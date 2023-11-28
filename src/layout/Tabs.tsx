import { useRouter } from "next/router";
import { useState } from "react";
import BottomTabsItem from "~/components/BottomTabsItem";
import Header from "~/components/Header";
import { itemsData } from "~/utils/routerItemsData";

interface TabsLayoutProps {
  title: string;
  children: React.ReactNode;
  loader?: boolean;
}

export default function TabsLayout({
  children,
  title,
  loader,
}: TabsLayoutProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function NavigateTo(link: string) {
    setIsLoading(true);
    await router.push(link);
    setIsLoading(false);
  }
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center justify-start">
      {isLoading || loader ? (
        <div className="flex h-screen w-full items-center justify-center bg-white">
          <div className="flex h-6 w-6 animate-spin rounded-full border border-t-blue-500" />
        </div>
      ) : (
        <>
          <Header title={title} />

          <div
            className="relative flex h-screen w-full flex-col items-center justify-start overflow-y-auto"
            style={{
              backgroundImage: 'url("images/bg1.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {children}
          </div>

          <div className="fixed bottom-0 left-0 flex w-full items-center justify-center bg-black/10 backdrop-blur-sm">
            <div className="flex w-full flex-row items-center justify-center gap-3 px-[7px] py-[8.50px]">
              {itemsData.map((item) => (
                <BottomTabsItem
                  navigateTo={() => void NavigateTo(item.link)}
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </main>
  );
}
