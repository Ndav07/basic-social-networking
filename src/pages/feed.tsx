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
        <div className="absolute left-0 top-0 inline-flex w-[390px] items-center justify-center bg-neutral-300 bg-opacity-50 py-3.5 pl-[129px] pr-32 backdrop-blur-sm">
          <div className="inline-flex items-center justify-center rounded-[9px] bg-zinc-800 bg-opacity-40 px-12 pb-3 pt-2">
            <div className="font-['Be Vietnam'] text-base font-normal leading-[18px] text-white">
              Feed
            </div>
          </div>
        </div>

        <div className="absolute left-[11px] inline-flex  w-[368px] flex-col items-center justify-center gap-3 pt-[90px]">
          <div className="relative h-[232.25px] w-[368px]">
            <div className="absolute top-0  inline-flex h-[70px] w-[274px] items-center justify-center gap-[13px]">
              <Image
                width={70}
                height={70}
                alt="Imagem de Perfil"
                className="h-[70px] w-[70px] rounded-[26px]"
                src={"/images/perfil.png"}
              />
              <div className="inline-flex flex-col items-start justify-center">
                <div className="font-['Be Vietnam'] text-base font-bold uppercase text-white">
                  Hannah Smith
                </div>
                <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-white">
                  @hannah_super
                </div>
                <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-white">
                  Ontem
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-[76.20px] h-[156.05px] w-[368px]">
              <div className="absolute left-0 top-[23.80px] inline-flex h-[132px] flex-col items-center justify-center gap-2.5 rounded-[26px] bg-white py-[22px]">
                <div className="font-['Be Vietnam'] w-[283px] pl-[10px] text-xs font-normal leading-[18px] text-zinc-800">
                  Hoje fiz uma viagem incrível para as bahamas. É incrível o
                  quão fácil é viajar quando se acumula milhas
                </div>
                <div className="inline-flex items-center justify-end gap-2.5 self-stretch pr-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-6 w-6"></div>
                    <div className="flex items-center gap-2.5">
                      <Image
                        width={20}
                        height={20}
                        className="h-5 w-5 rounded-full"
                        src={"/icons/like.svg"}
                        alt="Emoji de Like"
                      />
                      <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-zinc-800">
                        3
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-6 w-6"></div>
                    <div className="flex items-center gap-2.5">
                      <Image
                        width={20}
                        height={20}
                        className="h-5 w-5 rounded-full"
                        src={"/icons/comentario.svg"}
                        alt="Ícone de Comentário"
                      />
                      <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-zinc-800">
                        75
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BottomTabsNavigation />
      </div>
    </main>
  );
}
