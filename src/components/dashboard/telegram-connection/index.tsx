import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { ConnectionStatus } from './types';
import { ConnectStep } from './steps/connect-step';
import { JoinStep } from './steps/join-step';
import { Button } from '@/components/ui/button';
import { useUser } from '@/lib/context/user';
import { TELEGRAM_CHANNEL_LINK } from '@/lib/config';
import { OpenUrl } from '@/lib/utils';
import { authApi } from '@/services/api';
import { validateTelegramHandle } from '@/components/onboarding/utils/validation';
import toast from 'react-hot-toast';
import { validateTelegramId } from '@/utils/utils';


export function TelegramConnection() {
  const [status, setStatus] = useState<ConnectionStatus>('not_connected');
  const [handle, setHandle] = useState('');
  const { userDetails, setUserDetails } = useUser();
  const [showChannelLink, setShowChannelLink] = useState(false);
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    if (userDetails?.telegramId) {
      setStatus("pending_join")
    }

  }, [userDetails])

  const onSubmit = async (value) => {
    // Temporarily comment out API call
    let validateTelegram = validateTelegramId(value)
    if (validateTelegram) {
      return toast.error(validateTelegram)
    }
    setLoader(true)
    let result = await authApi.update({ telegram_id: value })
    setLoader(false)
    if (result?.status) {
      toast.success("Please join telegram ")
      setUserDetails(prev => ({ ...prev, telegramId: value }))
      setStatus('pending_join');
    }

  }

  const renderTelegramInfo = () => {
    return (
      <div className="bg-white/5 rounded-xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20">
              <MessageCircle className="w-5 h-5 text-[#00D1FF]" />
            </div>
            <div>
              <button
                onClick={() => setShowChannelLink(!showChannelLink)}
                className="font-medium hover:text-[#00D1FF] transition-colors"
              >
                {userDetails?.telegramId}
              </button>
              <p className="text-sm text-gray-400">Connected Telegram Handle</p>
            </div>
          </div>
          <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
            Connected
          </div>
        </div>

        {showChannelLink && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-black/20 rounded-lg border border-white/10"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-[#00D1FF]">{TELEGRAM_CHANNEL_LINK}</span>
              <Button
                variant="secondary"
                size="sm"
                onClick={() => OpenUrl(TELEGRAM_CHANNEL_LINK)}
                className="flex items-center gap-2"
              >
                <span>Open Channel</span>
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  // if (userDetails?.telegramId) {
  //   return renderTelegramInfo();
  // }

  if (status === 'pending_approval') {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="relative group"
    >
      <div className="absolute -inset-[1px] bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

      <div className="relative bg-[#111] rounded-xl p-6 border border-white/10">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-gradient-to-r from-[#00D1FF]/20 to-[#00FFFF]/20">
            <MessageCircle className="w-5 h-5 text-[#00D1FF]" />
          </div>
          <div>
            <h3 className="font-medium">Connect Telegram</h3>
            <p className="text-sm text-gray-400">Get instant trading signals and market updates</p>
          </div>
        </div>

        {status === 'not_connected' ? (
          <ConnectStep loader={loader} onSubmit={onSubmit} />
        ) : (
          <JoinStep link={userDetails?.invite_link} onJoined={() => setStatus('pending_approval')} />
        )}
      </div>
    </motion.div>
  );
}