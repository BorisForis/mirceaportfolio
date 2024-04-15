import Footer from "./FooterComp";
import Toolbar from "./Toolbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between">
      <Toolbar page="home"/>
      <div className="flex flex-col items-center justify-center w-screen h-auto">
        <img src="/programing.png" alt="programing" className="absolute z-0 w-screen h-5/6 lg:h-3/4 py-5 px-12 opacity-70 blur-md"/>
        <div className="flex flex-col justify-center items-center w-4/6 h-4/6"> 
          <h1 className="flex flex-row z-10 text-2xl text-white pt-10 lg:text-4xl">Welcome to Mircea's</h1>
          <span className="text-red-600 text-2xl z-10 font-bold p-1 lg:text-4xl">Portfolio</span> 
          <p className="z-10 text-md text-gray-100 p-5 lg:p-12 lg:text-2xl"> Hello, I am Mircea, a full-stack developer driven by a fervent passion for crafting clean, 
              comprehensive, efficient, and innovative coding solutions. With adept proficiency in both backend and frontend technologies, I am committed to 
              developing dynamic and holistic web applications.
          </p>
          <p className="z-10 text-md text-gray-100 p-5 lg:p-12 lg:text-2xl">
            My unwavering dedication to producing clean and maintainable code, meticulously centered around elevating the user experience, positions me 
            to deliver seamless digital interactions. I invite you to explore my portfolio, a testament to my journey of mastering new technologies and evolving 
            into the proficient web developer I am today.
          </p>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
