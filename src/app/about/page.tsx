'use client';

/* eslint-disable @next/next/no-img-element */
import FooterComp from '../FooterComp';
import Toolbar from '../Toolbar';
import Image from 'next/image';

export default function Home() {
    const images = [
        'CSS3.svg',
        'HTML5.svg',
        'java-14.svg',
        'javascript-1.svg',
        'next-js.svg',
        'nodejs-3.svg',
        'react-2.svg',
        'tailwindcss.svg',
        'typescript.svg',
    ];
    return (
        <main className="flex min-h-screen flex-col items-center justify-between bg-gray-200">
            <Toolbar page="about" />
            <h1 className="h-3/4 text-6xl font-bold text-black">About</h1>
            <div className="flex size-auto flex-col items-center justify-start lg:flex-row">
                <div className="flex size-auto flex-col items-center justify-center xl:h-auto">
                    <h2 className="h-3/4  text-3xl font-bold text-black">
                        About{' '}
                        <span className="p-1 text-3xl font-bold text-red-600">
                            Myself
                        </span>
                    </h2>
                    <p className=" p-5 text-center text-base text-black lg:p-12 lg:text-2xl">
                        As a dedicated professional, I prioritize continuous
                        learning and development. My experience as a Game Tester
                        has honed essential soft skills for software
                        development: Attention to Detail: Meticulous in my
                        approach, I ensure thoroughness to maintain software
                        quality. Empathy: I empathize with end-users to deliver
                        user-centric solutions. Big Picture Thinking: I
                        understand project scope and align efforts accordingly.
                        Time and Task Management: Proficient in prioritization,
                        I meet deadlines while upholding quality. Furthermore, I
                        excel in both collaborative team environments and
                        independent work.
                    </p>
                </div>
                <div className="flex size-auto flex-col items-center justify-center xl:h-auto">
                    <h2 className="h-3/4 text-3xl font-bold text-black">
                        My{' '}
                        <span className="p-1 text-3xl font-bold text-red-600">
                            Hobbies
                        </span>
                    </h2>
                    <p className=" p-5 text-center text-base text-black lg:p-12 lg:text-2xl">
                        In addition to my professional pursuits, I cultivate
                        several hobbies that contribute to my skill set and
                        personal growth. Foremost among these is my passion for
                        gaming and game development. Engaging with various games
                        not only sharpens my eye for design and flaw detection
                        but also hones my ability to multitask effectively—a
                        crucial skill in the fast-paced world of web
                        development. Beyond gaming, I am an avid reader. I
                        devote time to reading each night, finding it not only a
                        relaxing way to unwind but also a valuable source of
                        knowledge. Delving into diverse subjects enriches my
                        understanding and enhances my capacity to learn new
                        technologies. Whether absorbing the latest documentation
                        or exploring new narratives, my commitment to reading
                        fuels my continuous growth as a web developer.
                    </p>
                </div>
            </div>
            <div className="flex size-auto flex-col items-center justify-center lg:w-3/4 xl:h-auto">
                <h2 className="flex h-3/4 flex-row items-center justify-center text-3xl font-bold text-black">
                    Known{' '}
                    <span className="p-1 text-3xl font-bold text-red-600">
                        Technologies
                    </span>
                </h2>
                <p className=" p-5 text-center text-base text-black lg:p-5 lg:text-2xl">
                    As a developer, I possess proficiency in both Backend and
                    Frontend technologies, enabling me to craft comprehensive,
                    end-to-end applications. My expertise encompasses a range of
                    technologies, including:
                </p>
            </div>
            <div className="grid size-auto grid-flow-row lg:flex lg:flex-row ">
                {images.map((img) => (
                    <Image
                        src={img}
                        alt="Description of the image"
                        width={100}
                        height={100}
                        key="img"
                        className="relative p-5"
                    />
                ))}
            </div>
            <FooterComp />
        </main>
    );
}
