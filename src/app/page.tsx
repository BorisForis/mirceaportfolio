/* eslint-disable @next/next/no-img-element */
import Footer from './FooterComp';
import Toolbar from './Toolbar';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-start justify-between">
            <Toolbar page="home" />
            <div className="flex h-auto w-screen flex-col items-center justify-center bg-gray-200">
                <img
                    src="/programing.png"
                    alt="programing"
                    className="absolute z-0 h-5/6 w-screen px-12 py-5 opacity-70 blur-md lg:h-3/4"
                />
                <div className="flex size-4/6 flex-col items-center justify-center">
                    <h1 className="z-10 flex flex-row pt-10 text-xl text-white lg:text-4xl">
                        Welcome to Mircea&apos;s
                    </h1>
                    <span className="z-10 p-1 text-xl font-bold text-red-600 lg:text-4xl">
                        Portfolio
                    </span>
                    <p className="z-10 p-3 text-center text-base text-gray-100 lg:p-12 lg:text-2xl">
                        {' '}
                        Hello, I am Mircea, a full-stack developer driven by a
                        fervent passion for crafting clean, comprehensive,
                        efficient, and innovative coding solutions. With adept
                        proficiency in both backend and frontend technologies, I
                        am committed to developing dynamic and holistic web
                        applications.
                    </p>
                    <p className="z-10 p-3 text-center text-base text-gray-100 lg:p-12 lg:text-2xl">
                        My unwavering dedication to producing clean and
                        maintainable code, meticulously centered around
                        elevating the user experience, positions me to deliver
                        seamless digital interactions. I invite you to explore
                        my portfolio, a testament to my journey of mastering new
                        technologies and evolving into the proficient web
                        developer I am today.
                    </p>
                </div>
                <div className="z-10 flex h-auto w-full flex-row items-center justify-center">
                    <a
                        href="/"
                        target="_blank"
                        rel="noreferrer"
                        download="mircea-dumitru_duca__CV.pdf"
                        className="m-8 cursor-pointer rounded-lg bg-red-600 px-8 py-4 text-center font-bold text-white transition hover:shadow-button2 active:scale-90 active:shadow-button1"
                    >
                        {' '}
                        Download resume{' '}
                    </a>
                    <a
                        href="https://api.whatsapp.com/send/?phone=%2B40770299096&text&type=phone_number&app_absent=0"
                        target="_blank"
                        rel="noreferrer"
                        className="m-8 cursor-pointer rounded-lg bg-red-600 px-8 py-4 text-center font-bold text-white transition hover:shadow-button2 active:scale-90 active:shadow-button1"
                    >
                        {' '}
                        Get in Contact{' '}
                    </a>
                </div>
            </div>
            <Footer />
        </main>
    );
}
