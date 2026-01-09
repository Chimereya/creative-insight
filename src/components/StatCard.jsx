import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

export const StatCard = ({ title, value, trend, isUp }) => (
  <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm transition-transform hover:scale-[1.02]">
    <p className="text-sm text-slate-500 font-medium">{title}</p>
    <div className="flex items-end justify-between mt-2">
      <h3 className="text-2xl font-bold text-slate-900">{value}</h3>
      <div className={`flex items-center text-sm ${isUp ? 'text-green-600' : 'text-red-600'}`}>
        {isUp ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
        {trend}
      </div>
    </div>
  </div>
);