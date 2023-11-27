import BottomTabsNavigation from "~/components/BottomTabsNavigation";

interface TabsLayoutProps {
  children: React.ReactNode;
}

export default function TabsLayout({ children }: TabsLayoutProps) {
  return (
    <main className="relative flex min-h-screen w-screen flex-col">
      {children}
      <BottomTabsNavigation />
    </main>
  );
}
