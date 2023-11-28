import Avatar from "boring-avatars";
import { Add, DirectInbox, Logout } from "iconsax-react";
import { signOut } from "next-auth/react";
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
    <TabsLayout title="Meu Perfil">
      <div className="flex h-full max-h-screen min-h-[650px] w-screen flex-col items-center justify-start overflow-y-auto">
        <Avatar
          name={`${user.data?.name.split(" ")[0]} ${user.data?.name.split(
            " ",
          )[1]}`}
          variant="beam"
          square={true}
          size="100%"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />

        <div className="flex h-full w-4/5 flex-col gap-3">
          <div className="font-['Be Vietnam'] flex text-2xl font-bold uppercase text-white">
            {user.data?.name}
          </div>

          <div className="font-['Be Vietnam'] -[50.02px] flex text-base font-normal leading-[18px] text-white">
            {user.data?.email}
          </div>

          <div className="flex flex-row items-start justify-start gap-12">
            <div className="flex flex-col items-center justify-center">
              <div className="font-['Be Vietnam'] text-base font-semibold leading-[18px] text-white">
                {user.data?._count?.followers}
              </div>
              <div className="font-['Be Vietnam'] text-[13px] font-normal leading-[18px] text-white">
                Seguidores
              </div>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="font-['Be Vietnam'] text-base font-semibold leading-[18px] text-white">
                {user.data?._count?.following}
              </div>
              <div className="font-['Be Vietnam'] text-[13px] font-normal leading-[18px] text-white">
                Seguindo
              </div>
            </div>
            <a
              href={`mailto:${user.data?.email}`}
              className="relative h-[38px] w-[38px]"
            >
              <div className="flex h-[38px] w-[38px] items-center justify-center rounded-[9px] border border-zinc-500 bg-zinc-500 bg-opacity-0 backdrop-blur-[11px]">
                <DirectInbox size={18} className="text-white" />
              </div>
            </a>
          </div>

          <div className="flex flex-row items-start justify-start gap-2">
            <button className="flex flex-row items-center justify-center gap-2 rounded-xl border border-blue-400 bg-neutral-700 px-8 py-2">
              <p className="font-['Be Vietnam'] text-base font-semibold text-white">
                Seguir
              </p>
              <Add size={18} className="text-white" />
            </button>

            <button
              onClick={() => void exit()}
              className="flex flex-row items-center justify-center gap-2 rounded-xl border border-blue-400 bg-neutral-700 px-8 py-2"
            >
              <div className="font-['Be Vietnam'] text-base font-semibold text-white">
                Sair
              </div>
              <Logout className="text-white" size={24} />
            </button>
          </div>
        </div>
      </div>
    </TabsLayout>
  );
}
