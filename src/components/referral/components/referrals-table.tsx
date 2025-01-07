import { motion } from 'framer-motion';

const referrals = [
  {
    id: 1,
    name: 'Alex Johnson',
    date: '10 Jul, 2024',
    status: 'Completed',
    earnings: '$20 is approximately 15% of $150.',
    action: 'N/A'
  },
  {
    id: 2,
    name: 'Emily Carter',
    date: '25 Aug, 2024',
    status: 'Pending',
    earnings: '0',
    action: 'Resend Invite'
  },
  {
    id: 3,
    name: 'Michael Smith',
    date: '05 Sep, 2024',
    status: 'Completed',
    earnings: '$20 represents nearly 15% of $150.',
    action: 'N/A'
  }
];

export function ReferralsTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
    >
      <table className="w-full">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">#</th>
            <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Referred User's Name</th>
            <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Date Referred</th>
            <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Status</th>
            <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Earnings</th>
            <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Action</th>
          </tr>
        </thead>
        <tbody>
          {referrals.map((referral) => (
            <tr key={referral.id} className="border-b border-white/10 last:border-0">
              <td className="py-4 px-6">{referral.id}</td>
              <td className="py-4 px-6">{referral.name}</td>
              <td className="py-4 px-6">{referral.date}</td>
              <td className="py-4 px-6">
                <span className={`px-2 py-1 rounded-full text-sm ${
                  referral.status === 'Completed' 
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {referral.status}
                </span>
              </td>
              <td className="py-4 px-6">{referral.earnings}</td>
              <td className="py-4 px-6">
                {referral.action === 'Resend Invite' ? (
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    {referral.action}
                  </button>
                ) : (
                  referral.action
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}