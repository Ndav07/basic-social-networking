import { useRouter } from "next/router";

interface BottomTabsItemProps {
  title: string;
  icon: React.ReactNode;
  link: string;
  navigateTo: () => void;
}

export default function BottomTabsItem({
  icon,
  title,
  link,
  navigateTo,
}: BottomTabsItemProps) {
  const router = useRouter();

  return (
    <button
      onClick={() => navigateTo()}
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
  );
}
