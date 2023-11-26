export default function Home() {
  return (
    <main className="flex h-screen w-screen items-center justify-center bg-main bg-cover bg-no-repeat">
      <div className="relative h-[950px] w-[1340px] bg-white bg-opacity-25">
        <div className="absolute left-[199px] top-[81px] inline-flex flex-col items-start justify-center gap-16">
          <div className="relative h-[196px] w-[703px]">
            <div className="absolute left-[28px] top-0 inline-flex items-center justify-center gap-[13px]">
              <div className="flex items-center justify-center gap-[13px] self-stretch">
                <img
                  className="h-[70px] w-[70px] rounded-[26px]"
                  src={"images/perfil.png"}
                />
                <div className="inline-flex flex-col items-start justify-center">
                  <div className="font-['Be Vietnam'] text-base font-bold uppercase text-neutral-800">
                    agata august
                  </div>
                  <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-neutral-800">
                    @august_agat
                  </div>
                  <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-neutral-800">
                    2 dias atrás
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute left-0 top-[76px] h-[120px] w-[703px]">
              <div className="absolute left-0 top-[24px] inline-flex h-[114px] flex-col items-center justify-center gap-2.5 rounded-[26px] bg-white py-[22px]">
                <div className="font-['Be Vietnam'] w-[639px] text-xs font-normal leading-[18px] text-zinc-800">
                  Descobrir, viajar, inovar, mudar o mundo... Se não por nós por
                  quem? Invista em si mesma, o autoconhecimento é algo que irá
                  mudar a forma como você encherga o mundo ao seu redor
                </div>
                <div className="inline-flex w-[645px] items-center justify-end gap-2.5 pr-3.5">
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-6 w-6"></div>
                    <div className="flex items-center gap-2.5">
                      <img
                        className="h-5 w-5 rounded-full"
                        src={"icons/like.svg"}
                        alt="Like"
                      />
                      <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-zinc-800">
                        3
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <div className="relative h-6 w-6"></div>
                    <div className="flex items-center gap-2.5">
                      <img
                        className="h-5 w-5 rounded-full"
                        src={"icons/comentario.svg"}
                        alt="Comentário"
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

        <div className="absolute left-[653px] top-[26px] inline-flex items-center justify-center rounded-[9px] bg-zinc-800 bg-opacity-40 px-12 pb-3 pt-2">
          <div className="font-['Be Vietnam'] text-base font-normal leading-[18px] text-white">
            Feed
          </div>
        </div>

        <div className="absolute left-[36px] top-[429px] inline-flex flex-col items-start justify-start gap-[5px]">
          <button className="group flex flex-col items-center justify-center gap-[3px] rounded-[9px] bg-white bg-cover px-7 pb-3 pt-2 shadow group-hover:bg-blue-400 group-active:bg-blue-400 ">
            <img className="h-[30px] w-[30px]" src={"/icons/feed.svg"} />
            <div className="font-['Be Vietnam'] text-[10px] font-normal leading-[18px] text-blue-400">
              Feed
            </div>
          </button>

          <button className="group flex flex-col items-center justify-center gap-[3px] rounded-[9px] bg-white px-7 pb-3 pt-2 backdrop-blur-sm">
            <img className="h-[30px] w-[30px]" src={"/icons/criar.svg"} />
            <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-blue-400">
              Criar
            </div>
          </button>

          <button className="group flex flex-col items-center justify-center gap-[3px] rounded-[9px] bg-white px-7 pb-3 pt-2 backdrop-blur-sm">
            <img className="h-[30px] w-[30px]" src={"/icons/perfil.svg"} />
            <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-blue-400">
              Perfil
            </div>
          </button>
        </div>

        <div className="absolute left-[920px] top-[157px] h-[700px] w-[357px]">
          <div className="absolute left-0 top-0 h-[700px] w-[357px]">
            <div className="absolute left-0 top-0 h-[700px] w-[357px] bg-zinc-300"></div>
            <div className="absolute left-[64px] top-[36px] inline-flex h-[38px] w-[216px] items-center justify-center rounded-[9px] bg-zinc-800 bg-opacity-40 px-12 pb-3 pt-2">
              <div className="font-['Be Vietnam'] text-base font-normal leading-[18px] text-white">
                Recomendados
              </div>
            </div>
          </div>

          <div className="absolute left-[41px] top-[110px] inline-flex flex-col items-start justify-center gap-[49px]">
            <div className="inline-flex items-center justify-center gap-[13px] self-stretch">
              <img
                className="h-[70px] w-[70px] rounded-[26px]"
                src="https://via.placeholder.com/70x70"
              />
              <div className="inline-flex flex-col items-start justify-center">
                <div className="font-['Be Vietnam'] text-base font-bold uppercase text-neutral-800">
                  Hannah Smith ( você )
                </div>
                <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-neutral-800">
                  @hannah_super
                </div>
                <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-neutral-800">
                  Ontem
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-[13px] self-stretch">
              <div className="flex items-center justify-center gap-[13px] self-stretch">
                <img
                  className="h-[70px] w-[70px] rounded-[26px]"
                  src="https://via.placeholder.com/70x70"
                />
                <div className="inline-flex flex-col items-start justify-center">
                  <div className="font-['Be Vietnam'] text-base font-bold uppercase text-neutral-800">
                    agata august
                  </div>
                  <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-neutral-800">
                    @august_agat
                  </div>
                  <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-neutral-800">
                    2 dias atrás
                  </div>
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-[13px] self-stretch">
              <img
                className="h-[70px] w-[70px] rounded-[26px]"
                src="https://via.placeholder.com/70x70"
              />
              <div className="inline-flex flex-col items-start justify-center">
                <div className="font-['Be Vietnam'] text-base font-bold uppercase text-neutral-800">
                  Hannah Smith ( você )
                </div>
                <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-neutral-800">
                  @hannah_super
                </div>
                <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-neutral-800">
                  Ontem
                </div>
              </div>
            </div>

            <div className="inline-flex items-center justify-center gap-[13px] self-stretch">
              <div className="flex items-center justify-center gap-[13px] self-stretch">
                <img
                  className="h-[70px] w-[70px] rounded-[26px]"
                  src="https://via.placeholder.com/70x70"
                />
                <div className="inline-flex flex-col items-start justify-center">
                  <div className="font-['Be Vietnam'] text-base font-bold uppercase text-neutral-800">
                    agata august
                  </div>
                  <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-neutral-800">
                    @august_agat
                  </div>
                  <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-neutral-800">
                    2 dias atrás
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
