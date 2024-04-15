/* eslint-disable @next/next/no-img-element */
import Footer from './FooterComp';
import Toolbar from './Toolbar';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-start justify-between">
            <Toolbar page="home" />
            <div className="flex h-auto w-screen flex-col items-center justify-center">
                <img
                    src="/programing.png"
                    alt="programing"
                    className="absolute z-0 h-5/6 w-screen px-12 py-5 opacity-70 blur-md lg:h-3/4"
                />
                <div className="flex size-4/6 flex-col items-center justify-center">
                    <h1 className="z-10 flex flex-row pt-10 text-2xl text-white lg:text-4xl">
                        Welcome to Mircea&apos;s
                    </h1>
                    <span className="z-10 p-1 text-2xl font-bold text-red-600 lg:text-4xl">
                        Portfolio
                    </span>
                    <p className="z-10 p-5 text-xl text-gray-100 lg:p-12 lg:text-2xl">
                        {' '}
                        Hello, I am Mircea, a full-stack developer driven by a
                        fervent passion for crafting clean, comprehensive,
                        efficient, and innovative coding solutions. With adept
                        proficiency in both backend and frontend technologies, I
                        am committed to developing dynamic and holistic web
                        applications.
                    </p>
                    <p className="z-10 p-5 text-xl text-gray-100 lg:p-12 lg:text-2xl">
                        My unwavering dedication to producing clean and
                        maintainable code, meticulously centered around
                        elevating the user experience, positions me to deliver
                        seamless digital interactions. I invite you to explore
                        my portfolio, a testament to my journey of mastering new
                        technologies and evolving into the proficient web
                        developer I am today.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}
