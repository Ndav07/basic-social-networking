import { Logout } from "iconsax-react";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/router";
import TabsLayout from "~/layout/Tabs";
import { api } from "~/utils/api";

export default function ProfileScreen() {
  const router = useRouter();
  const user = api.users.me.useQuery();
  async function exit() {
    signOut;
    await router.push("/");
  }
  return (
    <TabsLayout>
      <div className="absolute left-0 top-0 h-[656px] w-[428px]">
        <div className="bg-gradient-to-b absolute left-0 top-0 h-[656px] w-[428px] from-stone-300 to-stone-300"></div>
      </div>
      <div className="absolute left-0 top-0 h-[586px] w-[390px]">
        <div className="bg-gradient-to-b absolute left-0 top-0 h-[586px] w-[390px] from-stone-300 to-stone-300"></div>
        <Image
          width={409}
          height={656}
          alt="Background"
          className="absolute h-[656px] w-[409.14px]"
          src={"/images/bg2.png"}
        />
      </div>
      <div className="absolute left-0 top-0 inline-flex w-[390px] items-center justify-end py-3.5 pl-[129px] pr-[125px] backdrop-blur-sm">
        <div className="inline-flex items-center justify-center rounded-[9px] bg-zinc-800 bg-opacity-40 px-12 pb-3 pt-2">
          <div className="font-['Be Vietnam'] text-base font-normal leading-[18px] text-white">
            Perfil
          </div>
        </div>
      </div>
      <div className="absolute left-[20px] top-[506px] h-[68.02px] w-[279px]">
        <div className="font-['Be Vietnam'] absolute left-0 top-0 text-[38px] font-bold uppercase text-white">
          {user.data?.name}
        </div>
        <div className="font-['Be Vietnam'] absolute left-0 top-[50.02px] text-base font-normal leading-[18px] text-zinc-500">
          @{user.data?.email}
        </div>
      </div>
      <div className="absolute left-[20px] top-[608px] inline-flex flex-col items-start justify-center gap-[22px]">
        <div className="inline-flex items-start justify-start gap-[19px]">
          <div className="inline-flex flex-col items-start justify-start gap-0.5">
            <div className="font-['Be Vietnam'] text-base font-semibold leading-[18px] text-white">
              787
            </div>
            <div className="font-['Be Vietnam'] text-[13px] font-normal leading-[18px] text-zinc-500">
              Seguidores
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start gap-0.5">
            <div className="font-['Be Vietnam'] text-base font-semibold leading-[18px] text-white">
              308
            </div>
            <div className="font-['Be Vietnam'] text-[13px] font-normal leading-[18px] text-zinc-500">
              Seguindo
            </div>
          </div>
        </div>
        <div className="inline-flex items-start justify-start gap-[29px]">
          <div className="flex items-start justify-start gap-1.5">
            <button className="relative h-[38px] w-[38px]">
              <div className="absolute left-0 top-0 h-[38px] w-[38px] rounded-[9px] border border-zinc-500 bg-zinc-500 bg-opacity-0 backdrop-blur-[11px]">
                <Image
                  width={38}
                  height={38}
                  alt="Ícone de navegação"
                  className="w-10.5 h-10.5 absolute"
                  src={"icons/send.svg"}
                />
              </div>
            </button>
            <button className="flex h-[38px] items-center justify-center rounded-[9px] border border-blue-400 bg-neutral-700 px-[46px] pb-3 pt-2">
              <div className="font-['Be Vietnam'] text-base font-semibold leading-[18px] text-blue-400">
                + Seguir
              </div>
            </button>

            <button
              onClick={() => void exit()}
              className="flex h-[38px] flex-row items-center justify-center rounded-[9px] border border-blue-400 bg-neutral-700 px-[46px] pb-3 pt-2"
            >
              <div className="font-['Be Vietnam'] text-base font-semibold leading-[18px] text-blue-400">
                Sair
              </div>
              <Logout className="text-blue-400" size={24} />
            </button>
          </div>
        </div>
      </div>
    </TabsLayout>
  );
}
