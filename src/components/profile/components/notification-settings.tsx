import { motion } from 'framer-motion';
import { Switch } from '@/components/ui/switch';
import { Bell, Zap } from 'lucide-react';
import { useState } from 'react';

export function NotificationSettings() {

  const [notifications, setNotifications] = useState([
    {
      icon: Bell,
      title: 'Email Notifications',
      description: 'Receive newsletters and promotions',
      enabled: true,
    },
    {
      icon: Zap,
      title: 'Trading Signals',
      description: 'Get instant signal notifications',
      enabled: true,
    },
    {
      icon: Zap,
      title: 'Market Updates',
      description: 'Daily market analysis and reports',
      enabled: false,
    },
  ]);
  const onSetEnabled = (value, index) => {
    let res = [...notifications]
    res[index].enabled = value
    setNotifications(res)
  }
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="space-y-6"
    >
      <h2 className="text-xl font-semibold">Notification Preferences</h2>

      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 bg-white/5 rounded-lg hover:bg-white/[0.07] transition-colors"
          >
            <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20">
              <notification.icon className="w-5 h-5 text-purple-400" />
            </div>

            <div className="flex-1">
              <h3 className="font-medium">{notification.title}</h3>
              <p className="text-sm text-gray-400">
                {notification.description}
              </p>
            </div>

            <Switch enabled={notification.enabled} setEnabled={(value) => onSetEnabled(value, index)} />
          </div>
        ))}
      </div>

      <p className="text-xs text-gray-500">
        Pistol Signals will process your data to send you information about our
        products and services. Your data will not be disclosed to third parties.
        You can opt out of notifications using the toggles above.
      </p>
    </motion.div>
  );
}
