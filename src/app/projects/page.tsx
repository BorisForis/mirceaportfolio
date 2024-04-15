'use client';

import Link from 'next/link';
/* eslint-disable @next/next/no-img-element */
import FooterComp from '../FooterComp';
import Toolbar from '../Toolbar';
import Image from 'next/image';

export default function Home() {
    const projects = [
        {
            img: '/cauldron.png',
            title: 'Anime Cauldron',
            link: '/projects/cauldron',
        },
        {
            img: '/prg.png',
            title: 'Player Reviewed Games',
            link: '/projects/prg',
        },
        {
            img: '/cleanreviews.png',
            title: 'Clean reviews',
            link: '/projects/cleanreviews',
        },
    ];
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-200">
            <Toolbar page="projects" />
            <h1 className="h-3/4 text-6xl font-bold text-black">Projects</h1>
            <div className="flex size-auto flex-col items-center justify-start lg:flex-row">
                {projects.map((proj) => {
                    return (
                        <Link
                            key="why?"
                            className="flex size-auto flex-col items-center justify-start"
                            href={proj.link}
                        >
                            <Image
                                src={proj.img}
                                alt="proj"
                                width={700}
                                height={100}
                                key="proj"
                                className="relative p-5"
                            />
                            <h1 className="h-3/4  text-3xl font-bold text-black">
                                {proj.title}
                            </h1>
                        </Link>
                    );
                })}
            </div>
            <FooterComp />
        </main>
    );
}
