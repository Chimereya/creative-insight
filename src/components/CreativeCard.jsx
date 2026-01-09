import { MoreVertical, PlayCircle } from 'lucide-react';

export const CreativeCard = ({ creative }) => (
  <div className="bg-white rounded-xl border border-slate-200 overflow-hidden group">
    <div className={`h-40 ${creative.color} flex items-center justify-center relative`}>
      <PlayCircle className="text-white/40 group-hover:text-white/80 transition-colors" size={40} />
      <span className="absolute top-3 left-3 bg-white/90 px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider shadow-sm">
        {creative.status}
      </span>
    </div>
    <div className="p-4">
      <div className="flex justify-between items-start mb-4">
        <h4 className="font-bold text-slate-800 truncate">{creative.title}</h4>
        <MoreVertical size={16} className="text-slate-400 cursor-pointer" />
      </div>
      <div className="flex justify-between border-t pt-4 border-slate-50">
        <div>
          <p className="text-[10px] text-slate-400 uppercase font-bold">CTR</p>
          <p className="text-lg font-semibold text-slate-900">{creative.ctr}</p>
        </div>
        <div className="text-right">
          <p className="text-[10px] text-slate-400 uppercase font-bold">Spend</p>
          <p className="text-lg font-semibold text-slate-900">{creative.spend}</p>
        </div>
      </div>
    </div>
  </div>
);