import Avatar from "boring-avatars";
import { Add, ArrowLeft2, DirectInbox, Verify } from "iconsax-react";
import { useRouter } from "next/router";
import { useState } from "react";
import Header from "~/components/Header";
import { api } from "~/utils/api";

export default function UsersProfile() {
  const router = useRouter();

  const [isFollow, setIsFollow] = useState(false);

  const user = api.users.getById.useQuery({
    id: router.query.userId as string,
  });
  const follow = api.users.follow.useMutation();
  const UnFollow = api.users.unFollow.useMutation();

  function ToFollow() {
    if (isFollow) {
      UnFollow.mutate({
        id: router.query.userId as string,
      });
      setIsFollow(false);
    } else {
      follow.mutate({
        id: router.query.userId as string,
      });
      setIsFollow(true);
    }
  }

  const [isLoading, setIsLoading] = useState(false);

  async function IsBack() {
    setIsLoading(true);
    await router.push("/feed");
    setIsLoading(false);
  }
  return (
    <main className="relative flex min-h-screen w-screen flex-col items-center justify-start">
      {isLoading ? (
        <div className="flex h-screen w-full items-center justify-center bg-white">
          <div className="flex h-6 w-6 animate-spin rounded-full border border-t-blue-500" />
        </div>
      ) : (
        <>
          <Header title={"Perfil"} />

          <div
            className="relative flex h-screen w-full flex-col items-center justify-start overflow-y-auto"
            style={{
              backgroundImage: 'url("/images/bg1.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="max-h-auto flex h-full min-h-[650px] w-full flex-col items-center justify-start overflow-y-auto">
              <div className="flex h-fit w-full flex-col items-center justify-start gap-3">
                <Avatar
                  name={`${user.data?.name.split(
                    " ",
                  )[0]} ${user.data?.name.split(" ")[1]}`}
                  variant="beam"
                  square={true}
                  size="100%"
                  colors={[
                    "#92A1C6",
                    "#146A7C",
                    "#F0AB3D",
                    "#C271B4",
                    "#C20D90",
                  ]}
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
                      {/* {user.data?._count?.followers} */}
                    </div>
                    <div className="font-['Be Vietnam'] text-[13px] font-normal leading-[18px] text-white">
                      Seguidores
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <div className="font-['Be Vietnam'] text-base font-semibold leading-[18px] text-white">
                      {/* {user.data?._count?.following} */}
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
                    onClick={ToFollow}
                    className="flex flex-row items-center justify-center gap-2 rounded-xl border border-blue-400 bg-neutral-700 px-8 py-2"
                  >
                    <p className="font-['Be Vietnam'] text-base font-semibold text-white">
                      {isFollow ? "Seguindo" : "Seguir"}
                    </p>
                    {isFollow ? (
                      <Verify size={18} className="text-white" />
                    ) : (
                      <Add size={18} className="text-white" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="fixed bottom-6 left-0 flex w-full items-center justify-center">
            <button
              className="flex flex-row items-center justify-center gap-2 rounded-xl bg-white px-12 py-4"
              onClick={() => void IsBack()}
            >
              <ArrowLeft2 variant="TwoTone" size={24} className="text-black" />
              Voltar
            </button>
          </div>
        </>
      )}
    </main>
  );
}
