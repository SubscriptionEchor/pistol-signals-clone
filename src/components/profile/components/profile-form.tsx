import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ProfileField } from './profile-field';
import { useEffect, useState } from 'react';
import { authApi } from '@/services/api';
import toast from 'react-hot-toast';
import { useUser } from '@/lib/context/user';
import { validatePassword } from '@/lib/utils/validation';

export function ProfileForm({ userDetails }) {
  const { setUserDetails } = useUser()
  const [localUserDetails, setLocalUserDetails] = useState({})
  const passwordRequirements: PasswordRequirement[] = [
    {
      regex: /[A-Z]/,
      label: 'One uppercase letter',
      met: /[A-Z]/.test(localUserDetails?.password || '')
    },
    {
      regex: /[a-z]/,
      label: 'One lowercase letter',
      met: /[a-z]/.test(localUserDetails?.password || '')
    },
    {
      regex: /[0-9]/,
      label: 'One number',
      met: /[0-9]/.test(localUserDetails?.password)
    },
    {
      regex: /[!@#$%^&*(),.?":{}|<>]/,
      label: 'One special character',
      met: /[!@#$%^&*(),.?":{}|<>]/.test(localUserDetails?.password || '')
    },
    {
      regex: /.{8,}/,
      label: 'Minimum 8 characters',
      met: localUserDetails?.password?.length >= 8
    }
  ]
  useEffect(() => {
    if (userDetails) {
      setLocalUserDetails(userDetails)
    }
  }, [userDetails])

  const onSaveDetails = async () => {
    let payload = {}

    if (userDetails?.name != localUserDetails?.name) {
      payload['name'] = localUserDetails?.name
    }
    if (userDetails?.password != localUserDetails?.password) {
      if (!passwordRequirements.every(item => item?.met)) {
        return toast.error('Please send valid password')
      }
      payload['password'] = localUserDetails?.password
    }
    if (!Object.keys(payload)?.length) {
      return
    }
    let result = await authApi.update(payload)
    if (!result?.status) {
      toast.error(result?.message)
      return
    }
    delete payload['password']
    setUserDetails(prev => ({ ...prev, ...payload }))
    toast.success(result?.message)

  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-xl font-semibold mb-6">Personal Information</h2>
        <div className="space-y-6">
          <ProfileField
            label="Full name"
            value={localUserDetails?.name || ''}
            type="text"
            onchange={(value) => {
              const regex = /^[a-zA-Z\s]+$/
              value = value?.trim()?.toLowerCase()
              if (!regex?.test(value)) {
                toast.error('name should contaion only alphabets and spaces')
                return
              }
              setLocalUserDetails(prev => ({ ...prev, name: value }))

            }}
            onEdit={onSaveDetails}
          />

          <ProfileField
            label="Email"
            value={localUserDetails?.email || ''}
            type="email"
            onchange={(value) => setLocalUserDetails(prev => ({ ...prev, email: value }))}
            onEdit={onSaveDetails}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Security</h2>
        <div className="bg-white/5 rounded-lg p-4">
          <ProfileField
            label="Password"
            value={localUserDetails?.password || ''}
            type="password"
            onchange={(value) => setLocalUserDetails(prev => ({ ...prev, password: value }))}
          />
          <Button onClick={onSaveDetails} disabled={!localUserDetails?.password} variant="gradient" className='mt-4'>Update Password</Button>
        </div>
        {localUserDetails?.password && <div className="grid grid-cols-1 gap-2">
          {passwordRequirements.map((requirement, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`${requirement?.met ? 'bg-gradient-to-r from-blue-600 to-purple-600' : 'bg-gray-400'} rounded-full p-0.5`}>
                <svg
                  className={`w-3 h-3 text-white transition-opacity duration-200 ${requirement?.met ? 'opacity-100' : 'opacity-0'
                    }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span className={`text-sm ${requirement.met ? 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent' : 'text-gray-400'
                }`}>
                {requirement.label}
              </span>
            </div>
          ))}
        </div>}
      </div>
    </motion.div>
  );
}