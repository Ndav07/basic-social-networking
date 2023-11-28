import Avatar from "boring-avatars";
import { Like1 } from "iconsax-react";
import { useState } from "react";
import { api } from "~/utils/api";

interface MyPostCard {
  post: {
    _count: {
      comment: number;
      likes: number;
    };
  } & {
    id: string;
    text: string;
    userId: string;
    likesCount: number;
    createdAt: Date;
    updatedAt: Date;
  };
  isLoading: boolean;
}

export default function MyPostCard({ post, isLoading }: MyPostCard) {
  const [liked, setLiked] = useState(false);

  const utils = api.useContext();
  const like = api.posts.like.useMutation();
  const unLike = api.posts.unLike.useMutation();

  const me = api.users.me.useQuery();

  function likePost(postId: string) {
    if (liked) {
      unLike.mutate(
        { postId: postId },
        { onSuccess: () => void utils.posts.invalidate() },
      );

      setLiked(false);
    } else {
      like.mutate(
        { postId: postId },
        { onSuccess: () => void utils.posts.invalidate() },
      );

      setLiked(true);
    }
  }

  return (
    <div key={post.id} className="flex w-full flex-col">
      <div className="flex h-[70px] w-[274px] items-center justify-center gap-[13px] text-white">
        <Avatar
          name={`${me.data?.name.split(" ")[0]} ${me.data?.name.split(" ")[1]}`}
          variant="beam"
          colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
        />

        <div className="flex w-full flex-col items-start justify-center">
          <div className="font-['Be Vietnam'] text-base font-bold uppercase">
            Você
          </div>
          <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px]">
            {me.data?.email}
          </div>
          <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px]">
            {post.createdAt.getDate()}/{post.createdAt.getUTCMonth() + 1}/
            {post.createdAt.getFullYear()} às {post.createdAt.getHours()}:
            {post.createdAt.getMinutes()}
          </div>
        </div>
      </div>

      <div className="flex h-fit flex-col items-center justify-center gap-2.5 rounded-xl bg-white py-[22px]">
        <div className="font-['Be Vietnam'] w-[283px] pl-[10px] text-xs font-normal leading-[18px] text-zinc-800">
          {post.text}
        </div>

        <div className="inline-flex items-center justify-end gap-2.5 self-stretch pr-3.5 pt-3">
          <div className="flex items-center gap-2.5">
            <div className="relative h-6 w-6"></div>

            {isLoading ? (
              <div className="flex h-[24px] w-[24px] animate-spin rounded-full border-t border-blue-500" />
            ) : (
              <button
                onClick={() => void likePost(post.id)}
                className="flex items-center gap-2.5"
              >
                <Like1
                  variant={liked ? "Bold" : "TwoTone"}
                  className="text-black"
                />
                <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-zinc-800">
                  {post.likesCount}
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
