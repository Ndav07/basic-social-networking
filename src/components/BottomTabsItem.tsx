import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

interface BottomTabsItemProps {
  title: string;
  icon: React.ReactNode;
  link: string;
}

export default function BottomTabsItem({
  icon,
  title,
  link,
}: BottomTabsItemProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  async function NavigateTo(link: string) {
    setIsLoading(true);
    await router.push(link);
    setIsLoading(false);
  }
  return (
    <>
      {isLoading ? (
        <div className="flex h-4 w-4 animate-spin rounded-full border border-t-blue-500" />
      ) : (
        <button
          onClick={() => void NavigateTo(link)}
          className={`group flex flex-col items-center justify-center gap-[3px] rounded-[9px] bg-cover px-7 pb-3 pt-2 ${
            router.asPath === link
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } backdrop-blur-sm}`}
        >
          {icon}
          <p className="font-['Be Vietnam'] text-[10px] font-normal leading-[18px] ">
            {title}
          </p>
        </button>
      )}
    </>
  );
}
