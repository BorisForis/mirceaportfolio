'use client';

/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import Toolbar from '@/app/Toolbar';
import FooterComp from '@/app/FooterComp';

export default function Home() {
    const images = [
        {
            img: '/next-js.svg',
            name: 'NextJs',
        },
        {
            img: '/typescript.svg',
            name: 'Typescript',
        },
        {
            img: '/drizzle.png',
            name: 'Drizzle ORM',
        },
        {
            img: '/supabase-logo-icon.svg',
            name: 'SupaBase',
        },
        {
            img: '/tailwindcss.svg',
            name: 'TailwindCss',
        },
    ];
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-200">
            <Toolbar page="projects" />
            <h1 className="mt-10 h-auto text-6xl font-bold text-black">
                Clean Reviews
            </h1>
            <div className="flex h-auto w-full flex-col items-center justify-start">
                <Image
                    src="/cleanreviews.png"
                    alt="proj"
                    width={1500}
                    height={100}
                    key="proj"
                    className="relative p-5"
                />
                <div className="h-5 w-5/6 rounded-full border-2 border-black bg-red-600" />
                <h2 className="mt-10 h-auto text-4xl font-bold text-black">
                    Description
                </h2>
                <p className="z-10 w-4/6 p-5 text-center text-base text-black lg:p-12 lg:text-2xl">
                    {' '}
                    This is a website where users can look up reviews on Movies,
                    Tv Shows, Books and local Restaurants. They can leave and
                    read reviews from other users as well. It was a project used
                    to learn the ropes for Typescrisp and NextJs.
                </p>
                <h2 className="h-auto text-4xl font-bold text-black">
                    Technologies
                </h2>
                <div className="grid size-auto grid-flow-row lg:flex lg:flex-row lg:items-center lg:justify-end ">
                    {images.map((img) => {
                        return (
                            <div
                                key="why?"
                                className="mb-10 flex size-auto flex-col items-center justify-between"
                            >
                                <Image
                                    src={img.img}
                                    alt="Description of the image"
                                    width={100}
                                    height={100}
                                    key="img"
                                    className="relative p-5"
                                />
                                <p className="font-bold text-black">
                                    {img.name}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="flex h-auto w-full flex-row items-center justify-center">
                    <a
                        href="https://cleanreviews.vercel.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="m-8 cursor-pointer rounded-lg bg-red-600 px-8 py-4 text-center font-bold transition hover:shadow-button2 active:scale-90 active:shadow-button1"
                    >
                        {' '}
                        Live Demo{' '}
                    </a>
                    <a
                        href="https://github.com/CleanCodeRo/cleanreviews"
                        target="_blank"
                        rel="noreferrer"
                        className="m-8 cursor-pointer rounded-lg bg-red-600 px-8 py-4 text-center font-bold transition hover:shadow-button2 active:scale-90 active:shadow-button1"
                    >
                        {' '}
                        Github repo{' '}
                    </a>
                </div>
            </div>
            <FooterComp />
        </main>
    );
}
