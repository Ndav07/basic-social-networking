import { zodResolver } from "@hookform/resolvers/zod";
import Avatar from "boring-avatars";
import { Message } from "iconsax-react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import TabsLayout from "~/layout/Tabs";
import { api } from "~/utils/api";

const REQUIRED_MESSAGE = "Postagens devem conter no mínimo 3 caracteres!";

const SchemaValidation = z.object({
  postMessage: z.string().min(3, REQUIRED_MESSAGE),
});

type FormData = z.infer<typeof SchemaValidation>;

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      postMessage: "",
    },
    mode: "onBlur",
    resolver: zodResolver(SchemaValidation),
  });

  const user = api.users.me.useQuery();
  const post = api.posts.create.useMutation();
  const router = useRouter();

  async function createPost() {
    await post.mutateAsync(
      {
        text: watch("postMessage"),
      },
      {
        onSuccess: () =>
          void Swal.fire({
            title: "Aee!",
            text: "Seu post foi realizado com sucesso!",
            icon: "success",
          }).then(() => router.push("/feed")),
        onError: () =>
          void Swal.fire({
            title: "Ooops!",
            text: "Não foi possível publicar seu post, postagens devem conter no mínimo 3 caracteres!",
            icon: "success",
          }),
      },
    );
    reset();
  }

  return (
    <TabsLayout title="Criar postagem">
      <div className="flex h-full min-h-[70vh] w-4/5 flex-col items-center justify-start gap-4 pt-[85px]">
        <div className="flex w-full items-center justify-start gap-[13px]">
          <Avatar
            name={`${user.data?.name.split(" ")[0]} ${user.data?.name.split(
              " ",
            )[1]}`}
            variant="beam"
            colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
          />
          <div className="flex-col items-start justify-center">
            <div className="font-['Be Vietnam'] text-base font-bold uppercase text-white">
              {user.data?.name}( Você )
            </div>
            <div className="font-['Be Vietnam'] text-xs font-normal leading-[18px] text-zinc-500">
              @{user.data?.email}
            </div>
          </div>
        </div>

        <textarea
          {...register("postMessage")}
          className="font-['Be Vietnam'] h-[120px] w-full resize-none rounded-xl p-2 text-sm font-normal leading-[18px] text-zinc-800 text-opacity-70"
          placeholder="Digite aqui o que você deseja publicar"
        />

        {errors?.postMessage?.message && (
          <p className="flex animate-pulse rounded-lg bg-white px-4 py-2 text-center text-xs text-red-600">
            {errors?.postMessage?.message}
          </p>
        )}

        <button
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          onClick={() => handleSubmit(createPost())}
          className="flex flex-row items-center justify-center gap-3 rounded-xl bg-white px-4 py-2"
        >
          <Message size={24} className="text-black" variant="TwoTone" />
          Criar postagem
        </button>
      </div>
    </TabsLayout>
  );
}
