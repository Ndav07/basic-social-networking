import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-main flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat">
        <form className="flex flex-col items-center justify-center gap-12 rounded-xl px-8 py-6 lg:bg-white lg:px-24 lg:py-12">
          <div className="items-center justify-center rounded-full bg-white object-cover p-8">
            <Image
              alt="Logomarca"
              src={"/icons/logo.svg"}
              height={80}
              width={80}
            />
          </div>
          <input
            type="text"
            placeholder="Digite o seu email"
            className="box-shadow-white flex w-full flex-row items-center justify-between rounded-3xl bg-white px-4 py-6"
          />

          <input
            type="password"
            placeholder="Digite a sua senha"
            className="box-shadow-white flex w-full flex-row items-center justify-between rounded-3xl bg-white px-4 py-6"
          />

          <button className="box-shadow-white w-full items-center justify-center rounded-2xl bg-white py-3 ">
            Entrar
          </button>

          <p className="text-white">
            Não possui conta?{" "}
            <a href="#" className="underline">
              Registre-se
            </a>
          </p>
        </form>
      </main>
    </>
  );
}
