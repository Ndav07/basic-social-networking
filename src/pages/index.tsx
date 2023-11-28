import { zodResolver } from "@hookform/resolvers/zod";
import { Eye } from "iconsax-react";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { z } from "zod";

const REQUIRED_MESSAGE = "Campo obrigatório!";

const SchemaValidation = z.object({
  email: z.string().email("Email inválido").min(1, REQUIRED_MESSAGE),
  password: z.string().min(1, REQUIRED_MESSAGE),
});

type FormData = z.infer<typeof SchemaValidation>;

export default function Login() {
  const { register, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(SchemaValidation),
  });

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [redirectIsLoading, setRedirectIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    const result = await signIn("credentials", {
      redirect: false,
      email: watch("email"),
      password: watch("password"),
    });

    if (!result?.error) {
      setRedirectIsLoading(true);
      void router.push("/feed");
      setRedirectIsLoading(false);
    } else {
      await Swal.fire({
        title: "Oops...",
        text: "Email ou senha inválidos!",
        icon: "error",
      });
      console.error("Erro de login:", result.error);
    }

    setIsLoading(false);
  };

  async function onSubmit() {
    await handleLogin();
  }

  return (
    <main className="flex h-screen w-screen items-center justify-center bg-main bg-cover bg-no-repeat">
      {redirectIsLoading ? (
        <div className="flex h-full w-full items-center justify-center bg-white">
          <div className="flex h-4 w-4 animate-spin rounded-full border border-t-blue-500" />
        </div>
      ) : (
        <form className="flex flex-col items-center justify-center gap-12 rounded-xl px-8 py-6 lg:px-24 lg:py-12">
          <div className="items-center justify-center rounded-full bg-white object-cover p-8">
            <Image
              alt="Logomarca"
              src={"/icons/logo.svg"}
              height={80}
              width={80}
            />
          </div>
          <div className="box-shadow-white flex w-full flex-row items-center justify-start rounded-3xl bg-white px-4 py-6">
            <input
              {...register("email")}
              type="text"
              placeholder="Digite o seu email"
              autoCapitalize="none"
              className="text-black placeholder:text-gray-500"
            />
          </div>

          <div className="box-shadow-white flex w-full flex-row items-center justify-start rounded-3xl bg-white px-4 py-6">
            <input
              {...register("password")}
              type={showPassword ? "text" : "password"}
              placeholder="Digite a sua senha"
              autoCapitalize="none"
              className="text-black placeholder:text-gray-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              <Eye size="32" variant="TwoTone" className="text-blue-400" />
            </button>
          </div>

          <button
            type="button"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onClick={handleSubmit(onSubmit)}
            className="box-shadow-white flex w-full items-center justify-center rounded-2xl bg-white py-3"
          >
            {isLoading ? (
              <div className="flex h-4 w-4 animate-spin rounded-full border border-t-blue-500" />
            ) : (
              <p className="text-blue-400">Entrar</p>
            )}
          </button>

          <Link href={"/register"}>
            <p className="text-white">
              Não possui conta? <span className="underline">Registre-se</span>
            </p>
          </Link>
        </form>
      )}
    </main>
  );
}
