/* eslint-disable @typescript-eslint/no-misused-promises */
import Image from "next/image";
import { useRouter } from "next/router";

export default function BottomTabsNavigation() {
  const router = useRouter();

  async function profileNavigate() {
    await router.push("/perfil");
    console.log("clicou");
  }
  async function createNavigate() {
    await router.push("/create");
    console.log("clicou");
  }
  async function feedNavigate() {
    await router.push("/feed");
    console.log("clicou");
  }
  return (
    <div className="absolute left-0 top-[739px] h-[105px] w-[390px]">
      <div className="absolute left-0 top-0 h-[105px] w-[390px] bg-neutral-700 bg-opacity-90 backdrop-blur-sm"></div>
      <div className="absolute left-[58px] top-[12px] inline-flex w-[274px] items-center justify-center px-[7px] py-[8.50px]">
        <div className="inline-flex shrink grow basis-0 items-start justify-start gap-[5px] self-stretch">
          <button
            onClick={() => feedNavigate()}
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
          </button>

          <button
            onClick={() => createNavigate()}
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
          </button>
          <button
            onClick={() => profileNavigate()}
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
          </button>
        </div>
      </div>
    </div>
  );
}
