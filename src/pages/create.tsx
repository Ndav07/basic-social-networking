import Image from "next/image";
import BottomTabsNavigation from "~/components/BottomTabsNavigation";

export default function Home() {
  return (
    <main className="mx-auto my-auto">
      <div
        className="relative h-[844px] w-[390px] bg-neutral-700"
        style={{
          backgroundImage: 'url("images/bg1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className=" absolute left-0 top-0">
          <Image
            width={390}
            height={845}
            alt="Background"
            className="absolute left-[-6px] top-[-189px] h-[845px] w-[390px]"
            src={"/images/bg1.png"}
          />
        </div>
        <div className="absolute left-0 top-0 inline-flex w-[390px] items-center justify-center bg-neutral-300 bg-opacity-50 py-3.5 pl-[129px] pr-32 backdrop-blur-sm">
          <div className="inline-flex items-center justify-center rounded-[9px] bg-zinc-800 bg-opacity-40 px-12 pb-3 pt-2">
            <div className="font-['Be Vietnam'] text-base font-normal leading-[18px] text-white">
              Criar
            </div>
          </div>
        </div>
        <div className="absolute left-[11px] top-[160px] h-[156.05px] w-[368px]">
          <div className="absolute inline-flex h-[206px]  w-[368px] flex-col items-center justify-center gap-3.5 rounded-[26px] bg-white py-[22px]">
            <textarea
              className="font-['Be Vietnam'] h-full w-full resize-none px-2 py-2 text-xs font-normal leading-[18px] text-zinc-800 text-opacity-70"
              placeholder="Digite aqui o que você deseja publicar"
            />
            <div className="inline-flex items-center justify-center self-stretch">
              <button
                className="relative h-8 w-8"
                style={{
                  backgroundImage: 'url("icons/coment.svg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></button>
            </div>
          </div>
        </div>
        <div className="absolute left-[34px] top-[76px] inline-flex items-center justify-center gap-[13px]">
          <Image
            width={70}
            height={70}
            alt="Imagem de Perfil"
            className="h-[70px] w-[70px] rounded-[26px]"
            src={"/images/perfil.png"}
          />
          <div className="inline-flex flex-col items-start justify-center">
            <div className="font-['Be Vietnam'] text-base font-bold uppercase text-white">
              Hannah Smith ( Você )
            </div>
            <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-zinc-500">
              @hannah_super
            </div>
          </div>
        </div>
        <BottomTabsNavigation />
      </div>
    </main>
  );
}
