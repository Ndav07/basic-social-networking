import { itemsData } from "~/utils/routerItemsData";
import BottomTabsItem from "./BottomTabsItem";

export default function BottomTabsNavigation() {
  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center justify-center bg-black/10 backdrop-blur-sm">
      <div className="flex w-full flex-row items-center justify-center gap-3 px-[7px] py-[8.50px]">
        {itemsData.map((item) => (
          <BottomTabsItem
            key={item.id}
            icon={item.icon}
            title={item.title}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}
