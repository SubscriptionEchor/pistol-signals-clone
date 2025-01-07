import { DashboardLayout } from '../dashboard/layout';
import { FeedbackHeader } from './components/feedback-header';
import { FeedbackForm } from './components/feedback-form';

export function Feedback() {
  return (
    <DashboardLayout>
      <div className="min-h-screen bg-[#0A0A0A] text-white">
        <div className="p-8">
          <FeedbackHeader />
          <FeedbackForm />
        </div>
      </div>
    </DashboardLayout>
  );
}