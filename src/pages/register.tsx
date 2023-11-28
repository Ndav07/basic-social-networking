import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, UserAdd } from "iconsax-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";
import { api } from "~/utils/api";

const REQUIRED_MESSAGE = "Campo obrigatório!";

const SchemaValidation = z.object({
  name: z.string().min(1, REQUIRED_MESSAGE),
  email: z.string().email("Email inválido").min(1, REQUIRED_MESSAGE),
  password: z.string().min(1, REQUIRED_MESSAGE),
});

type FormData = z.infer<typeof SchemaValidation>;

export default function UserRegister() {
  const { register, handleSubmit, reset } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(SchemaValidation),
  });

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const utils = api.useContext();

  const create = api.users.create.useMutation();

  const onSubmit: SubmitHandler<FormData> = (inputs) =>
    create.mutate(inputs, {
      onSuccess: () => {
        void Swal.fire({
          title: "Aeee!",
          text: "Cadastro realizado com sucesso! Volte para a tela de login e realize seu acesso!",
          icon: "success",
        });
        reset;
        void router.push("/");
      },
      onError: (error) => {
        void Swal.fire({
          title: "Oops...",
          text: `${error.message}`,
          icon: "error",
        });

        console.error("Erro de login:", error.message);
      },
      onSettled: () => void utils.users.invalidate(),
    });

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-main bg-cover bg-no-repeat">
      <form className="flex flex-col items-center justify-center gap-12 rounded-xl px-8 py-6 lg:px-24 lg:py-12">
        <div className="items-center justify-center rounded-full bg-white object-cover p-8">
          <UserAdd size="64" variant="TwoTone" className="text-blue-400" />
        </div>
        <div className="box-shadow-white flex w-full flex-row items-center justify-start rounded-3xl bg-white px-4 py-6">
          <input
            {...register("name")}
            type="text"
            placeholder="Digite o seu nome"
            className="text-black placeholder:text-gray-500"
          />
        </div>

        <div className="box-shadow-white flex w-full flex-row items-center justify-start rounded-3xl bg-white px-4 py-6">
          <input
            {...register("email")}
            type="text"
            placeholder="Digite o seu email"
            className="text-black placeholder:text-gray-500"
          />
        </div>

        <div className="box-shadow-white flex w-full flex-row items-center justify-start rounded-3xl bg-white px-4 py-6">
          <input
            {...register("password")}
            type={showPassword ? "text" : "password"}
            placeholder="Digite a sua senha"
            className="text-black placeholder:text-gray-500"
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)}>
            <Eye size="32" variant="TwoTone" className="text-blue-400" />
          </button>
        </div>

        <button
          type="button"
          disabled={create.isLoading}
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onClick={handleSubmit(onSubmit)}
          className={`box-shadow-white flex w-full items-center justify-center rounded-2xl bg-white py-3 ${
            create.isLoading ? "opacity-70" : ""
          }`}
        >
          {create.isLoading ? (
            <div className="flex h-[24px] w-[24px] animate-spin rounded-full border border-t-blue-500" />
          ) : (
            <p className="text-blue-400">Entrar</p>
          )}
        </button>

        <p>
          Já possui conta?{" "}
          <a href="#" className="underline">
            Entre agora
          </a>
        </p>
      </form>
    </main>
  );
}
