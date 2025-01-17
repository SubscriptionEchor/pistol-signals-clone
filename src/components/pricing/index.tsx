import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { Button } from '../ui/button';
import { useNavigate } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import { commonApi } from '@/services/api/common';
import { ROUTE_NAMES } from '@/routes/routenames';
import { API_ENDPOINTS, authApi } from '@/services/api';
import { SubscriptionCheckout } from '../checkout';
import { PAYMENT_STATUS } from '@/constant';
import toast from 'react-hot-toast';
import confetti from 'canvas-confetti';
import { cn } from '@/lib/utils';
import { useUser } from '@/lib/context/user';

export function PricingPage() {
  const { setUserDetails, plan, setPlan } = useUser()
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false)
  const [planDetails, setPlanDetails] = useState({})
  const [id, setId] = useState(null)
  const [planSuccess, setPlanSuccess] = useState(false)
  const [dataLoader, setDataLoader] = useState(false)
  const [pageLoader, setPageLoader] = useState(false)


  useEffect(() => {
    (async () => {
      if (plan) {
        setPageLoader(true)
        onClickSelectedPlan(plan)
      }
      else {
        let result = await commonApi.plan();
        if (result?.status) {
          setData(result?.data?.sort((a, b) => a.days - b.days));
        }
      }
    })();
  }, [plan]);




  useEffect(() => {
    // Store the current path in history state when component mounts
    window.history.pushState({ path: location.pathname }, '', location.pathname);

    const handleBeforeUnload = (event) => {
      if (isProcessing) {
        const confirmationMessage = 'On closing or changing page you need to verify your payment again';
        event.returnValue = confirmationMessage;
        return confirmationMessage;
      }
    };

    const handlePopState = (event) => {
      if (isProcessing) {
        console.log('back/forward button clicked');

        // Show confirmation dialog
        const confirmNavigation = window.confirm('On closing or changing page you need to verify your payment again');

        if (!confirmNavigation) {
          // Prevent navigation by pushing current path back to history
          window.history.pushState({ path: location.pathname }, '', location.pathname);
        } else {


          setIsProcessing(false)

          navigate(ROUTE_NAMES.HOME, { replace: true })
        }
      }
    };

    // Add event listeners
    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);

    // Cleanup function
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, [isProcessing, location.pathname]);



  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 1500
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      origin: { x: 0.2 }
    });

    fire(0.2, {
      spread: 60,
      origin: { x: 0.5 }
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      origin: { x: 0.8 }
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#00D1FF', '#00FFFF']
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#00D1FF', '#00FFFF']
    });
  };

  const Polling = useCallback(async (id) => {
    try {
      let res = await commonApi.verifyPayment({ payment_id: id })
      if (!res?.status) {
        return
      }
      if (res.data.status == PAYMENT_STATUS.PENDING) {
        setTimeout(async () => {
          await Polling(id)
        }, 2000)
      }
      else if (res.data.status == PAYMENT_STATUS.FAILED) {
        toast.error('Payment failed')
        setIsProcessing(false)
        setId(null)
      }
      else {
        triggerConfetti()
        toast.success(res?.message)
        localStorage.setItem('auth_token', res?.data?.token?.access_token)
        setIsProcessing(false)
        setPlanSuccess(true)
        setId(null)
      }
    }
    catch (e) {
      setIsProcessing(false)
      setPlanDetails({})
      setId(null)
    }
  }, [])

  const onClickSelectedPlan = async (plan: any) => {
    try {
      setId(plan?.id)
      let data = {
        name: plan.name,
        price: plan.price,
        period: plan.duration
      }

      let payload = {
        chain: 'BNB',
        plan_id: plan.id

      }
      payload = await commonApi.subscribe(payload)
      setPlan(null)
      setPageLoader(false)
      if (!payload?.status) {
        return
      }
      if (payload?.data.status == PAYMENT_STATUS.PENDING) {
        let updated = { ...data, ...payload?.data }
        setPlanDetails(updated)
        Polling(payload?.data?.id)
        setIsProcessing(true)

      }
      else if (payload?.data.status == PAYMENT_STATUS.PAID) {
        toast.success(payload?.message)
        localStorage.setItem('auth_token', payload?.data?.token?.access_token)
        setPlanSuccess(true)
        setIsProcessing(false)

      }
    }
    catch (e) {
      setPlanSuccess(false)
      setIsProcessing(false)
      setPlan(null)
      setId(null)
    }

  }
  const onHandleSuccess = async () => {
    try {
      setDataLoader(true)
      let res = await authApi.getuser()
      if (res?.status) {
        setUserDetails(res?.data)
        navigate(ROUTE_NAMES.DASHBOARD, { replace: true })
        setDataLoader(false)
      }
    }
    catch (e) {
      setDataLoader(false)
    }
  }

  if (pageLoader) {
    return (<div className="h-screen w-max-screen flex items-center justify-center">
      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
    </div>)
  }

  if (isProcessing) {
    return <SubscriptionCheckout key={planDetails?.price} isProcessing={isProcessing} details={planDetails} />
  }

  if (planSuccess) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn(
            'w-full max-w-md p-8 rounded-2xl',
            'bg-[#1d1d1d] border border-white/10',
            'text-center relative overflow-hidden'
          )}
        >
          {/* Animated Background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-light/10 via-transparent to-primary-light/5" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(51,144,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(51,144,255,0.05)_1px,transparent_1px)] bg-[size:14px_24px]" />
          </div>

          {/* Content */}
          <div className="relative">
            {/* Celebration Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                "inline-flex items-center gap-2",
                "px-4 py-2 rounded-full",
                "bg-gradient-to-r from-[#00D1FF] via-[#00FFFF] to-[#00D1FF] bg-clip-text text-transparent ",
                "mb-6"
              )}
            >
              <Sparkles className="w-4 h-4  text-[#00D1FF]" />
              <span className="text-sm font-medium">SUBSCRIPTION ACTIVATED</span>
            </motion.div>

            {/* Success Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20
              }}
              className="flex justify-center mb-8"
            >
              <div className={cn(
                'w-24 h-24 rounded-full',
                ' bg-gradient-to-r from-[#00D1FF]/50 via-[#00FFFF]/20 to-[#00D1FF]/50',
                'flex items-center justify-center',
                'animate-pulse'
              )}>
                <Check className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <h1 className="text-3xl font-bold  bg-gradient-to-r from-[#00D1FF] via-[#00FFFF] to-[#00D1FF] bg-clip-text text-transparent">
                Welcome Aboard!
              </h1>
              <p className="text-lg text-gray-400">
                Your subscription is now active. Get ready to receive premium trading signals and maximize your potential.
              </p>
            </motion.div>

            {/* Action Button */}

            <Button
              onClick={onHandleSuccess}
              variant="gradient"
              className="w-full mt-5 py-3 text-white">
              {dataLoader ? (
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </div>
              ) :
                (
                  <>
                    Go to Dashboard
                    < ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </>
                )}
            </Button>
          </div>
        </motion.div>
      </div>)
  }


  return (
    <div className="min-h-screen bg-black text-white">
      <header className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className='flex'>
            <img src="/assets/images/nav-logo.png" alt="AI Technical Analyst" className="h-10" />
            <div className='ms-2 text-sm column  items-center'>
              <p>AI </p>
              <p>Techinal Analyst</p>
            </div>
          </div>
          <a href="/" className="text-gray-400 hover:text-white transition-colors">
            Back to home
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Choose the plan that best fits your trading needs. All plans include our core features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

                <div className="relative bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                  {plan?.isPopular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#00D1FF] to-[#00FFFF] rounded-full text-sm font-medium text-black">
                      Most Popular
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                    <div className="mt-4">
                      <span className="text-4xl font-bold ">${plan.price}</span>
                      <span className="text-gray-400">/ {plan.duration}</span>
                      {/* <span className="inline-flex ms-2 items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Your Free Week
                      </span> */}
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="gradient"
                    className="w-full"
                    onClick={() => onClickSelectedPlan(plan)}
                    disabled={id}
                  >
                    {id == plan?.id ? (
                      <div className="flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      </div>
                    ) :
                      'Get Started'}
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}