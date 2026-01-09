import React from 'react';
import { Layout } from './components/Layout';
import { StatCard } from './components/StatCard';
import { CreativeCard } from './components/CreativeCard';
import { PERFORMANCE_DATA, CREATIVES } from './data/mockData';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Filter } from 'lucide-react';

export default function App() {
  return (
    <Layout>
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Creative Insights</h1>
          <p className="text-slate-500 text-sm">Real-time performance of your visual assets.</p>
        </div>
        <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg hover:border-indigo-300 transition-all shadow-sm">
          <Filter size={16} />
          <span className="text-sm font-semibold">Filter Range</span>
        </button>
      </header>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <StatCard title="Avg. CTR" value="3.24%" trend="12%" isUp={true} /> {/* StatCard component to display average click-through rate */}
        <StatCard title="Conv. Rate" value="1.8%" trend="2.4%" isUp={false} />
        <StatCard title="Spend" value="$12.4k" trend="8%" isUp={true} />
        <StatCard title="ROAS" value="4.2x" trend="15%" isUp={true} />
      </div>

      {/* Chart Section */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 mb-8 shadow-sm">
        <h3 className="font-bold mb-6 text-slate-800">Engagement Over Time</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={PERFORMANCE_DATA}> // LineChart component to visualize performance data
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
              <Tooltip contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }} />
              <Line type="monotone" dataKey="ctr" stroke="#4f46e5" strokeWidth={4} dot={{ r: 6, fill: '#4f46e5', strokeWidth: 2, stroke: '#fff' }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Assets Grid */}
      <h3 className="font-bold text-xl mb-6 text-slate-800">Top Performing Creatives</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {CREATIVES.map(creative => (
          <CreativeCard key={creative.id} creative={creative} />
        ))}
      </div>
    </Layout>
  );
}