import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { ConnectionStatus } from './types';
import { ConnectStep } from './steps/connect-step';
import { JoinStep } from './steps/join-step';
import { VerifyStep } from './steps/verify-step';
import { ConnectedStep } from './steps/connected-step';
import { authApi } from '@/services/api';
import { useUser } from '@/lib/context/user';

export function TelegramConnection() {
  const [status, setStatus] = useState<ConnectionStatus>('not_connected');
  const [handle, setHandle] = useState('');
  const { userDetails, setUserDetails } = useUser()

  const onSubmit = async (value) => {
    let result = await authApi.update({ telegram_id: value })
    console.log(result, "result")
    if (result?.status) {
      setUserDetails(prev => ({ ...prev, telegramId: value }))
      setStatus('pending_join');
    }
    // {
    //   setHandle(value);
    //   setStatus('pending_join');
    // }

  }

  const renderStep = () => {
    switch (status) {
      case 'not_connected':
        return <ConnectStep onSubmit={(value) => onSubmit(value)} />;
      case 'pending_join':
        return <JoinStep onJoined={() => setStatus('pending_approval')} />;
      // case 'pending_approval':
      //   return <VerifyStep />;
      // // case 'connected':
      //   return <ConnectedStep handle={handle} />;
    }
  };
  if (userDetails?.telegramId || status == 'pending_approval') {
    return null
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative group "
    >
      {/* Gradient border effect */}
      <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      <div className="relative bg-[#111] rounded-xl p-6 border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20">
            <MessageCircle className="w-5 h-5 text-blue-400" />
          </div>
          <div>
            <h3 className="font-medium">Connect Telegram</h3>
            <p className="text-sm text-gray-400">Get instant trading signals and market updates</p>
          </div>
        </div>

        {renderStep()}
      </div>
    </motion.div>
  );
}