```tsx
import { SidebarHeader } from './sidebar-header';
import { SidebarNav } from './sidebar-nav';
import { SidebarFooter } from './sidebar-footer';

export function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-[#111]/90 backdrop-blur-sm border-r border-white/5">
      <div className="flex flex-col h-full">
        <SidebarHeader />
        <SidebarNav />
        <SidebarFooter />
      </div>
    </aside>
  );
}
```