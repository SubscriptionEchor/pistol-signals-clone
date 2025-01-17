import { DashboardLayout } from '../dashboard/layout';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Bell, MessageCircle, Shield, CreditCard, Calendar, Check, Copy } from 'lucide-react';
import { Button } from '../ui/button';
import { useUser } from '@/lib/context/user';
import { useEffect, useState } from 'react';
import { authApi } from '@/services/api';
import toast from 'react-hot-toast';
import { APP_URL, TELEGRAM_CHANNEL_LINK } from '@/lib/config';
import { cn, OpenUrl } from '@/lib/utils';
import { useNavigate } from 'react-router-dom';
import { getFormattedDateFromTimestamp } from '@/utils/utils';

export function Profile() {
  const [copied, setCopied] = useState(false);
  const { userDetails, setUserDetails } = useUser();
  const [userLoader, setUserLoader] = useState(false)
  const [passwordLoader, setPasswordLoader] = useState(false)
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    notifications: {
      email: true,
      telegram: true
    }
  });

  useEffect(() => {
    if (userDetails) {
      setFormData(prev => ({ ...prev, name: userDetails?.name, email: userDetails?.email }))
    }
  }, [userDetails])

  const passwordRequirements = [
    { regex: /[A-Z]/, label: 'One uppercase letter' },
    { regex: /[a-z]/, label: 'One lowercase letter' },
    { regex: /[0-9]/, label: 'One number' },
    { regex: /[!@#$%^&*(),.?":{}|<>]/, label: 'One special character' },
    { regex: /.{8,}/, label: 'Minimum 8 characters' }
  ];

  const validatePassword = (password: string) => {
    return passwordRequirements.every(req => req.regex.test(password));
  };

  const handleSave = async (key) => {
    try {
      let payload = {};

      // if(!formData?.name&& !formData.password){

      // }

      if (userDetails?.name !== formData.name?.trim() && key == "name") {
        payload['name'] = formData.name;
        setUserLoader(true)
      }

      if (formData.password?.trim() && key == "password") {
        if (!validatePassword(formData.password)) {
          toast.error('Please ensure password meets all requirements');
          return;
        }
        payload['password'] = formData.password?.trim();
        setUserLoader(true)
      }
      if (Object.keys(payload).length === 0) {
        setIsEditing(false);
        return;
      }

      const result = await authApi.update(payload);
      setUserLoader(false)
      setPasswordLoader(false)
      if (!result?.status) {
        // toast.error(result?.message);
        return;
      }

      delete payload['password'];
      setUserDetails(prev => ({ ...prev, ...payload }));
      toast.success(result?.message);
      setIsEditing(false);
      setFormData(prev => ({ ...prev, password: '' }));
    } catch (error) {
      console.log(error)
      setUserLoader(false)
      setPasswordLoader(false)
      // toast.error('Failed to update profile');
    }
  };



  const handleCopyCode = async () => {
    let referralCode = `${APP_URL}/signup?referral=${userDetails?.refCode}`
    try {
      await navigator.clipboard.writeText(referralCode);
      toast.success('Copied to clipboard')
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="p-8 max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-6 mb-12"
          >
            <div className="p-4 rounded-full bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20">
              <User className="w-8 h-8 text-[#00D1FF]" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Profile Settings</h1>
              <p className="text-gray-400">Manage your account preferences and settings</p>
            </div>
          </motion.div>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Personal Information */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-[#111] rounded-xl p-6 border border-white/10"
            >
              <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <div className="flex gap-4">
                    <div className="relative flex-1">
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        disabled={!isEditing}
                        className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#00D1FF] transition-colors"
                      />
                    </div>
                    <Button
                      variant="secondary"
                      onClick={() => {
                        if (isEditing) {

                          handleSave("name");

                        } else {
                          setIsEditing(true);
                        }
                      }}
                    >
                      {userLoader ?
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        </div> :
                        isEditing ? 'Save' : 'Edit'}
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      value={formData.email}
                      disabled
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg text-gray-400"
                    />
                    <Mail className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Subscription Section */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-[#111] rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Subscription</h2>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                  Active
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="text-gray-400 mb-1">Current Plan</p>
                  {/* <p className="text-lg font-semibold">Pro Monthly</p> */}
                  <p className="text-sm font-bold text-gray-400">{userDetails?.plan?.toUpperCase()}</p>
                </div>

                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <Calendar className="w-4 h-4" />
                    <p>Next billing date</p>
                  </div>
                  <p className="text-lg font-semibold">{getFormattedDateFromTimestamp(userDetails?.planExpiry, true)}</p>
                </div>
              </div>

              {/* <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  variant="gradient"
                  onClick={() => navigate('/pricing')}
                  className="flex-1"
                >
                  Upgrade Plan
                </Button>
                <Button
                  variant="secondary"
                  onClick={() => navigate('/subscription')}
                  className="flex-1"
                >
                  Manage Subscription
                </Button>
              </div> */}


              {/* <div className=" flex gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-1">
                    <p>Invite Link</p>
                  </div>
                  <a onClick={handleCopyCode} className="text-sm underline  text-blue-400 cursor-pointer font-semibold">{`${APP_URL}/signup?referral=${userDetails?.refCode}`}</a>
                </div>
                <button
                  onClick={handleCopyCode}
                  className={cn(
                    'p-3 rounded-lg',
                    'bg-white/5 hover:bg-white/10',
                    'border border-white/10 hover:border-white/20',
                    'transition-all duration-200',
                    'group w-fit h-fit'
                  )}
                >
                  {copied ? <Check className="w-5 h-5  text-emerald-500" /> : <Copy className="w-5 h-5 text-gray-400 group-hover:text-white" />}
                </button>
              </div>
              <div className="  gap-6 mb-6">

                <div className="flex items-center gap-2 text-gray-400 mb-1 mb-3">
                  <p>Invite Code</p>
                </div>
                <div className='flex'>

                  <a onClick={handleCopyCode}
                    className={cn(
                      'p-3 rounded-lg ',
                      'bg-white/5 hover:bg-white/10',
                      'border border-white/10 hover:border-white/20',
                      'transition-all duration-200',
                      'group w-fit h-fit me-3'
                    )}>{userDetails?.refCode}</a>

                  <button
                    onClick={handleCopyCode}
                    className={cn(
                      'p-3 rounded-lg',
                      'bg-white/5 hover:bg-white/10',
                      'border border-white/10 hover:border-white/20',
                      'transition-all duration-200',
                      'group'
                    )}
                  >
                    {copied ? <Check className="w-5 h-5  text-emerald-500" /> : <Copy className="w-5 h-5 text-gray-400 group-hover:text-white" />}
                  </button>
                </div>
              </div> */}
            </motion.section>

            {/* Security */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-[#111] rounded-xl p-6 border border-white/10"
            >
              <h2 className="text-xl font-semibold mb-6">Security</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Password</label>
                  <div className="relative">
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                      placeholder="Enter new password"
                      className="w-full px-4 py-3 bg-black/50 border border-white/10 rounded-lg focus:outline-none focus:border-[#00D1FF] transition-colors"
                    />
                    <Lock className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
                  </div>
                </div>

                {formData.password && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {passwordRequirements.map((req, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${req.regex.test(formData.password) ? 'bg-[#00D1FF]' : 'bg-gray-500'}`} />
                        <span className={`text-sm ${req.regex.test(formData.password) ? 'text-[#00D1FF]' : 'text-gray-500'}`}>
                          {req.label}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <Button
                  variant="gradient"
                  onClick={() => handleSave("password")}
                  disabled={!formData.password || !validatePassword(formData.password)}
                >
                  {userLoader ?
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    </div> : 'Update Password'}
                </Button>
              </div>
            </motion.section>

            {/* Telegram Connection */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-[#111] rounded-xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Telegram Connection</h2>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                  Connected
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-black/50 rounded-lg border border-white/10 mb-6">
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-[#00D1FF]" />
                  <div>
                    <div className="font-medium">{userDetails?.telegramId}</div>
                    <p className="text-sm text-gray-400">Connected Telegram Handle</p>
                  </div>
                </div>
                <Shield className="w-5 h-5 text-green-400" />
              </div>

              {!userDetails?.tel_chat_id &&
                (userDetails?.invite_link && userDetails?.telegramId) ? <Button
                  variant="gradient"
                  onClick={() => OpenUrl(userDetails?.invite_link)}
                  className="w-full sm:w-auto"
                >
                Join Telegram Channel
              </Button> : null}
            </motion.section>

            {/* Notifications */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-[#111] rounded-xl p-6 border border-white/10"
            >
              <h2 className="text-xl font-semibold mb-6">Notification Preferences</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-black/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#00D1FF]" />
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <p className="text-sm text-gray-400">Receive updates and alerts via email</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.notifications.email}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        notifications: {
                          ...prev.notifications,
                          email: e.target.checked
                        }
                      }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D1FF]"></div>
                  </label>
                </div>

                <div className="flex items-center justify-between p-4 bg-black/50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Bell className="w-5 h-5 text-[#00D1FF]" />
                    <div>
                      <div className="font-medium">Trading Signals</div>
                      <p className="text-sm text-gray-400">Get instant signal notifications</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.notifications.telegram}
                      onChange={(e) => setFormData(prev => ({
                        ...prev,
                        notifications: {
                          ...prev.notifications,
                          telegram: e.target.checked
                        }
                      }))}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00D1FF]"></div>
                  </label>
                </div>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}