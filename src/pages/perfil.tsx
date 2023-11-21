import Head from "next/head";
import Image from "next/image";
import React, { useState } from 'react';
import { api } from "~/utils/api";



export default function Home() {

return (

<>

    <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="bg-main flex h-screen w-screen items-center justify-center bg-cover bg-no-repeat">

        <div className="w-[390px] h-[844px] relative bg-neutral-700">
            <div className="w-[428px] h-[656px] left-0 top-0 absolute">
                <div className="w-[428px] h-[656px] left-0 top-0 absolute bg-gradient-to-b from-stone-300 to-stone-300">
                </div>
                <img className="w-[449px] h-[845px] left-[-6px] top-[-189px] absolute"
                    src={"/images/bg1.png"} />
            </div>
            <div className="w-[390px] h-[586px] left-0 top-0 absolute">
                <div className="w-[390px] h-[586px] left-0 top-0 absolute bg-gradient-to-b from-stone-300 to-stone-300">
                </div>
                <img className="w-[409.14px] h-[754.83px] left-[-5.47px] top-[-168.83px] absolute"
                    src={"/images/bg2.png"} />
            </div>
            <div
                className="w-[390px] pl-[129px] pr-[125px] py-3.5 left-0 top-0 absolute backdrop-blur-sm justify-end items-center inline-flex">
                <div
                    className="px-12 pt-2 pb-3 bg-zinc-800 bg-opacity-40 rounded-[9px] justify-center items-center inline-flex">
                    <div className="text-white text-base font-normal font-['Be Vietnam'] leading-[18px]">Perfil</div>
                </div>
            </div>
            <div className="w-[279px] h-[68.02px] left-[20px] top-[506px] absolute">
                <div className="left-0 top-0 absolute text-white text-[38px] font-bold font-['Be Vietnam'] uppercase">
                    Hannah Smith</div>
                <div className="left-0 top-[50.02px] absolute text-zinc-500 text-base font-normal font-['Be Vietnam'] leading-[18px]">
                    @hannah_super</div>
            </div>
            <div
                className="left-[20px] top-[608px] absolute flex-col justify-center items-start gap-[22px] inline-flex">
                <div className="justify-start items-start gap-[19px] inline-flex">
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-white text-base font-semibold font-['Be Vietnam'] leading-[18px]">787</div>
                        <div className="text-zinc-500 text-[13px] font-normal font-['Be Vietnam'] leading-[18px]">
                            Seguidores
                        </div>
                    </div>
                    <div className="flex-col justify-start items-start gap-0.5 inline-flex">
                        <div className="text-white text-base font-semibold font-['Be Vietnam'] leading-[18px]">308</div>
                        <div className="text-zinc-500 text-[13px] font-normal font-['Be Vietnam'] leading-[18px]">
                            Seguindo
                        </div>
                    </div>
                </div>
                <div className="justify-start items-start gap-[29px] inline-flex">
                    <div className="justify-start items-start gap-1.5 flex">
                        <div className="w-[38px] h-[38px] relative">
                            <div
                                className="w-[38px] h-[38px] left-0 top-0 absolute bg-zinc-500 bg-opacity-0 rounded-[9px] border border-zinc-500 backdrop-blur-[11px]">
                            </div>
                            <img className="w-3.5 h-2.5 left-[12px] top-[14px] absolute"
                                src="https://via.placeholder.com/14x10" />
                        </div>
                        <div
                            className="h-[38px] px-[46px] pt-2 pb-3 bg-neutral-700 rounded-[9px] border border-blue-400 justify-center items-center flex">
                            <div className="text-blue-400 text-base font-semibold font-['Be Vietnam'] leading-[18px]">+
                                Seguir</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[390px] h-[105px] left-0 top-[739px] absolute">
                <div
                    className="w-[390px] h-[105px] left-0 top-0 absolute bg-neutral-700 bg-opacity-90 backdrop-blur-sm">
                </div>
                <div
                    className="w-[274px] px-[7px] py-[8.50px] left-[58px] top-[12px] absolute justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch justify-start items-start gap-[5px] inline-flex">
                        <button
                            className="px-7 pt-2 pb-3 bg-white rounded-[9px] shadow flex-col justify-center items-center gap-[3px] flex group bg-cover group-hover:bg-blue-400 group-active:bg-blue-400 ">
                            <img className="w-[30px] h-[30px]" src={"/icons/feed.svg"} />
                            <div className="text-blue-400 text-[10px] font-normal font-['Be Vietnam'] leading-[18px]">
                                Feed</div>
                        </button>

                        <button
                            className="px-7 pt-2 pb-3 bg-white rounded-[9px] backdrop-blur-sm flex-col justify-center items-center gap-[3px] flex group">
                            <img className="w-[30px] h-[30px]" src={"/icons/criar.svg"} />
                            <div className="text-blue-400 text-xs font-normal font-['Be Vietnam'] leading-[18px]">Criar
                            </div>
                        </button>
                        <button
                            className="px-7 pt-2 pb-3 bg-white rounded-[9px] backdrop-blur-sm flex-col justify-center items-center gap-[3px] flex group">
                            <img className="w-[30px] h-[30px]" src={"/icons/perfil.svg"} />
                            <div className="text-blue-400 text-xs font-normal font-['Be Vietnam'] leading-[18px]">Perfil
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>

</>
);
}