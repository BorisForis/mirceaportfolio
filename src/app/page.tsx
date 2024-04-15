import Footer from "./FooterComp";
import Toolbar from "./Toolbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-between">
      <Toolbar page="home"/>
      <div className="flex flex-col items-center justify-center w-screen h-96">
        <img src="/programing2.webp" alt="programing" className="absolute z-0 w-screen h-3/4 py-5 px-12 opacity-70 blur-md"/>
        <div className="absolute flex flex-col justify-start items-center w-screen h-4/6"> 
          <h1 className="z-10 text-4xl text-white pt-10">Welcome to Mircea's <span className="text-red-600 text-4xl font-bold p-1">Portfolio</span> </h1>
          <p className="z-10 text-2xl text-gray-100 p-12"> Hello my friends</p>
        </div>
      </div>
      <Footer/>
    </main>
  );
}
