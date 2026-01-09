import { LayoutDashboard, ImageIcon, TrendingUp } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, active }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer transition-colors ${active ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:bg-slate-800'}`}>
    <Icon size={20} />
    <span className="font-medium">{label}</span>
  </div>
);

export const Layout = ({ children }) => (
  <div className="flex min-h-screen bg-slate-50">
    <aside className="w-64 bg-slate-900 p-6 flex flex-col gap-8 fixed h-full">
      <div className="flex items-center gap-2 text-indigo-400 px-2">
        <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center text-white">C</div>
        <span className="text-xl font-bold tracking-tight text-white">CreativeOS</span>
      </div>
      <nav className="flex flex-col gap-2">
        <SidebarItem icon={LayoutDashboard} label="Overview" active />
        <SidebarItem icon={ImageIcon} label="Asset Library" />
        <SidebarItem icon={TrendingUp} label="Performance" />
      </nav>
    </aside>
    <main className="flex-1 ml-64 p-8">
      {children}
    </main>
  </div>
);