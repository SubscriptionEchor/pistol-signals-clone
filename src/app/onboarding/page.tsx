'use client';

import { useState } from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { motion } from 'framer-motion';
import { ArrowRight, Eye, EyeOff, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const steps = {
  REGISTER: 1,
  TELEGRAM: 2,
  VERIFY: 3,
  PLAN: 4,
};

export default function OnboardingPage() {
  const [step, setStep] = useState(steps.REGISTER);
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    telegramHandle: '',
  });

  const googleLogin = useGoogleLogin({
    onSuccess: (response) => console.log(response),
    onError: () => console.log('Login Failed'),
  });

  const renderStep = () => {
    switch (step) {
      case steps.REGISTER:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md space-y-8"
          >
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">
                {isLogin ? 'Welcome back' : 'Create your account'}
              </h2>
              <p className="text-gray-400">
                {isLogin ? 'Sign in to continue' : 'Get started with your trading journey'}
              </p>
            </div>

            <Button 
              variant="secondary"
              className="w-full"
              onClick={() => googleLogin()}
            >
              <img src="/svg/google.svg" alt="Google" className="w-5 h-5 mr-2" />
              Continue with Google
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-800" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-black text-gray-500">
                  or continue with email
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <Input
                type="email"
                placeholder="Email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />

              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder={isLogin ? 'Enter password' : 'Create password'}
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              <Button 
                variant="gradient"
                className="w-full"
                onClick={() => setStep(steps.TELEGRAM)}
              >
                Continue
              </Button>

              <p className="text-center text-sm text-gray-400">
                {isLogin ? (
                  <>
                    New to Pistol Signals?{' '}
                    <button
                      onClick={() => setIsLogin(false)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Create an account
                    </button>
                  </>
                ) : (
                  <>
                    Already have an account?{' '}
                    <button
                      onClick={() => setIsLogin(true)}
                      className="text-blue-400 hover:text-blue-300"
                    >
                      Sign in
                    </button>
                  </>
                )}
              </p>
            </div>
          </motion.div>
        );

      case steps.TELEGRAM:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md space-y-6"
          >
            <h2 className="text-2xl font-bold">Enter telegram handle</h2>
            <p className="text-gray-400">
              Share your Telegram handle with us! This is your key to receiving all trading signals, 
              and remember, you can't change it once it's submitted.
            </p>

            <div className="relative">
              <MessageCircle className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Enter telegram username"
                className="pl-10"
                value={formData.telegramHandle}
                onChange={(e) => setFormData({ ...formData, telegramHandle: e.target.value })}
              />
            </div>

            <Button 
              variant="gradient"
              className="w-full"
              onClick={() => setStep(steps.VERIFY)}
            >
              I've confirmed my details!
            </Button>
          </motion.div>
        );

      case steps.VERIFY:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-md space-y-6"
          >
            <h2 className="text-2xl font-bold">Next up, verify your email</h2>
            <p className="text-gray-400">
              To continue subscribing a plan, head over to your inbox and click the verification 
              link we just sent you.
            </p>

            <Button 
              variant="gradient"
              className="w-full group"
              onClick={() => setStep(steps.PLAN)}
            >
              <span>I've confirmed my email!</span>
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <button className="text-sm text-blue-400 hover:text-blue-300">
              Resend email
            </button>
          </motion.div>
        );

      case steps.PLAN:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-6xl"
          >
            <h2 className="text-3xl font-bold text-center mb-8">Choose your plan</h2>
            {/* Import and use PricingPlans component here */}
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black">
      <div className="relative w-full">
        <div className="absolute inset-0 bg-gradient-radial from-blue-500/20 via-purple-500/10 to-transparent" />
        <div className="relative flex justify-center">
          {renderStep()}
        </div>
      </div>
    </div>
  );
}