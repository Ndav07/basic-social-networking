import Image from "next/image";
import Link from "next/link";

export default function BottomTabsNavigation() {
  return (
    <div className="absolute bottom-0 left-0 flex w-full items-center justify-center bg-black/30 backdrop-blur">
      <div className="flex w-full flex-row items-center justify-center gap-3 px-[7px] py-[8.50px]">
        <Link
          href={"/feed"}
          className="group flex flex-col items-center justify-center gap-[3px] rounded-[9px] bg-white bg-cover px-7 pb-3 pt-2 shadow group-hover:bg-blue-400 group-active:bg-blue-400 "
        >
          <Image
            width={30}
            height={30}
            alt="Ícone de navegação"
            className="h-[30px] w-[30px]"
            src={"/icons/feed.svg"}
          />
          <div className="font-['Be Vietnam'] text-[10px] font-normal leading-[18px] text-blue-400">
            Feed
          </div>
        </Link>

        <Link
          href={"/create"}
          className="group flex flex-col items-center justify-center gap-[3px] rounded-[9px] bg-white px-7 pb-3 pt-2 backdrop-blur-sm"
        >
          <Image
            width={30}
            height={30}
            alt="Ícone de navegação"
            className="h-[30px] w-[30px]"
            src={"/icons/criar.svg"}
          />
          <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-blue-400">
            Criar
          </div>
        </Link>

        <Link
          href={"/perfil"}
          className="group flex flex-col items-center justify-center gap-[3px] rounded-[9px] bg-white px-7 pb-3 pt-2 backdrop-blur-sm"
        >
          <Image
            width={30}
            height={30}
            alt="Ícone de navegação"
            className="h-[30px] w-[30px]"
            src={"/icons/perfil.svg"}
          />
          <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-blue-400">
            Perfil
          </div>
        </Link>
      </div>
    </div>
  );
}
