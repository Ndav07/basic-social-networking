import BottomTabsNavigation from "~/components/BottomTabsNavigation";

interface TabsLayoutProps {
  children: React.ReactNode;
}

export default function TabsLayout({ children }: TabsLayoutProps) {
  return (
    <main className="relative flex min-h-screen w-screen flex-col">
      <div
        className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-y-hidden bg-neutral-700"
        style={{
          backgroundImage: 'url("images/bg1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {children}
      </div>
      <BottomTabsNavigation />
    </main>
  );
}
