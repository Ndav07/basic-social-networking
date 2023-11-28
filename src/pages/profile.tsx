import Avatar from "boring-avatars";
import { DirectInbox, Logout } from "iconsax-react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useState } from "react";
import MyPostCard from "~/components/MyPostCard";
import TabsLayout from "~/layout/Tabs";
import { api } from "~/utils/api";

export default function ProfileScreen() {
  const router = useRouter();
  const user = api.users.me.useQuery();
  const [redirectIsLoading, setRedirectIsLoading] = useState(false);
  const myPosts = api.users.myPosts.useQuery();

  async function exit() {
    signOut;
    setRedirectIsLoading(true);
    await router.push("/");
    setRedirectIsLoading(false);
  }
  return (
    <TabsLayout title="Meu Perfil" loader={redirectIsLoading}>
      <div className="max-h-auto flex h-full min-h-[650px] w-full flex-col items-center justify-start overflow-y-auto">
        <div className="flex h-fit w-full flex-col items-center justify-start gap-3">
          <Avatar
            name={`${user.data?.name.split(" ")[0]} ${user.data?.name.split(
              " ",
            )[1]}`}
            variant="beam"
            square={true}
            size="100%"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />

          <div className="font-['Be Vietnam'] flex w-4/5 text-2xl font-bold uppercase text-white">
            {user.data?.name}
          </div>

          <div className="font-['Be Vietnam'] -[50.02px] flex w-4/5 text-base font-normal leading-[18px] text-white">
            {user.data?.email}
          </div>

          <div className="flex w-4/5 flex-row items-start justify-start gap-12">
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

          <div className="flex w-4/5 flex-row items-start justify-start gap-2">
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

        <div className="mt-12 flex h-fit w-4/5 flex-col items-center justify-center">
          <p className="rounded-lg bg-white px-6 py-2">Meus posts</p>
          <div className="mt-4 flex w-full flex-col items-start justify-start pb-[140px]">
            {myPosts.isLoading ? (
              <div className="flex w-full items-center justify-center">
                <div className="flex h-6 w-6 animate-spin rounded-full border border-t-blue-500" />
              </div>
            ) : (
              myPosts.data
                ?.map((post, index) => (
                  <MyPostCard
                    isLoading={myPosts.isFetching}
                    post={post}
                    key={index}
                  />
                ))
                .reverse()
            )}
          </div>
        </div>
      </div>
    </TabsLayout>
  );
}
