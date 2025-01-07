import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

const billingHistory = [
  {
    date: 'Nov 26, 2024',
    amount: '$120.00',
    status: 'Paid',
    invoice: '#INV-2024-011'
  },
  {
    date: 'Oct 26, 2024',
    amount: '$120.00',
    status: 'Paid',
    invoice: '#INV-2024-010'
  },
  {
    date: 'Sep 26, 2024',
    amount: '$120.00',
    status: 'Paid',
    invoice: '#INV-2024-009'
  }
];

export function BillingHistory() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="space-y-6"
    >
      <h2 className="text-2xl font-bold">Billing History</h2>
      
      <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Date</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Amount</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Status</th>
              <th className="text-left py-4 px-6 text-sm font-medium text-gray-400">Invoice</th>
              <th className="py-4 px-6"></th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((item, index) => (
              <tr key={index} className="border-b border-white/10 last:border-0">
                <td className="py-4 px-6">{item.date}</td>
                <td className="py-4 px-6">{item.amount}</td>
                <td className="py-4 px-6">
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-6 text-gray-400">{item.invoice}</td>
                <td className="py-4 px-6">
                  <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                    <Download className="w-5 h-5 text-gray-400" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}