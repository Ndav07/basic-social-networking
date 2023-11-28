import Image from "next/image";
import BottomTabsNavigation from "~/components/BottomTabsNavigation";
import TabsLayout from "~/layout/Tabs";
import { api } from "~/utils/api";
import Avatar from "boring-avatars";

export default function Home() {
  const user = api.users.me.useQuery();
  const posts = api.users.myPosts.useQuery();
  const allPosts = api.posts.findAllPost.useQuery();

  return (
    <TabsLayout>
      <div
        className="relative h-[844px] w-[390px] overflow-y-hidden bg-neutral-700"
        style={{
          backgroundImage: 'url("images/bg1.png")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute left-0 top-0 z-20 inline-flex w-[390px] items-center justify-center bg-neutral-300 bg-opacity-50 py-3.5 pl-[129px] pr-32 backdrop-blur-sm">
          <div className="inline-flex items-center justify-center rounded-[9px] bg-zinc-800 bg-opacity-40 px-12 pb-3 pt-2">
            <div className="font-['Be Vietnam'] text-base font-normal leading-[18px] text-white">
              Feed
            </div>
          </div>
        </div>

        <div className="absolute left-[11px] inline-flex max-h-screen w-[368px] flex-col items-center justify-center gap-3 overflow-y-auto pt-[90px]">
          {posts.data?.map((post) => (
            <div key={post.id} className="relative h-[232.25px] w-[368px]">
              <div className="absolute top-0  inline-flex h-[70px] w-[274px] items-center justify-center gap-[13px]">
                <Avatar
                  name="Maria Mitchell"
                  variant="marble"
                  colors={[
                    "#92A1C6",
                    "#146A7C",
                    "#F0AB3D",
                    "#C271B4",
                    "#C20D90",
                  ]}
                />
                <div className="inline-flex flex-col items-start justify-center">
                  <div className="font-['Be Vietnam'] text-base font-bold uppercase text-white">
                    {user.data?.name} ( Você )
                  </div>
                  <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-white">
                    @{user.data?.email}
                  </div>
                  <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-white">
                    Ontem
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-[76.20px] h-[156.05px] w-[368px]">
                <div className="absolute left-0 top-[23.80px] inline-flex h-[132px] flex-col items-center justify-center gap-2.5 rounded-[26px] bg-white py-[22px]">
                  <div className="font-['Be Vietnam'] w-[283px] pl-[10px] text-xs font-normal leading-[18px] text-zinc-800">
                    {post.text}
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
                          {post.likesCount}
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
                          0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {allPosts.data?.map((post) => (
            <div key={post.id} className="relative h-[232.25px] w-[368px]">
              <div className="absolute top-0  inline-flex h-[70px] w-[274px] items-center justify-center gap-[13px]">
                <Avatar
                  name="Maria Mitchell"
                  variant="marble"
                  colors={[
                    "#92A1C6",
                    "#146A7C",
                    "#F0AB3D",
                    "#C271B4",
                    "#C20D90",
                  ]}
                />
                <div className="inline-flex flex-col items-start justify-center">
                  <div className="font-['Be Vietnam'] text-base font-bold uppercase text-white">
                    {post.user.name}
                  </div>
                  <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-white">
                    @{post.user.email}
                  </div>
                  <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-white">
                    Ontem
                  </div>
                </div>
              </div>
              <div className="absolute left-0 top-[76.20px] h-[156.05px] w-[368px]">
                <div className="absolute left-0 top-[23.80px] inline-flex h-[132px] flex-col items-center justify-center gap-2.5 rounded-[26px] bg-white py-[22px]">
                  <div className="font-['Be Vietnam'] w-[283px] pl-[10px] text-xs font-normal leading-[18px] text-zinc-800">
                    {post.text}
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
                          {post.likesCount}
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
                          0
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <BottomTabsNavigation />
      </div>
    </TabsLayout>
  );
}
