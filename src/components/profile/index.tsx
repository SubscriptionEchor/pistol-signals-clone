import { ProfileHeader } from './components/profile-header';
import { ProfileForm } from './components/profile-form';
import { TelegramSettings } from './components/telegram-settings';
import { NotificationSettings } from './components/notification-settings';
import { DashboardLayout } from '@/components/dashboard/layout';
import { useUser } from '@/lib/context/user';
import { authApi } from '@/services/api';

export function Profile() {
  const { userDetails } = useUser()
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="p-8 max-w-4xl mx-auto">
          <div className="space-y-12">
            <ProfileHeader />

            {/* Main Content */}
            <div className="relative group">
              <div className="absolute -inset-[1px] bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500" />

              <div className="relative bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 divide-y divide-white/10">
                <div className="p-8">
                  <ProfileForm userDetails={userDetails} />
                </div>

                <div className="p-8">
                  <TelegramSettings userDetails={userDetails} />
                </div>

                <div className="p-8">
                  <NotificationSettings userDetails={userDetails} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}