import BottomTabsNavigation from "~/components/BottomTabsNavigation";
import Header from "~/components/Header";

interface TabsLayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function TabsLayout({ children, title }: TabsLayoutProps) {
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center justify-start">
      <Header title={title} />

      <div
        className="relative flex h-screen w-screen flex-col items-center justify-start overflow-y-auto"
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
