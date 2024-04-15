export default function FooterComp() {
    return (
        <div className="flex h-16 w-full flex-wrap items-center justify-between bg-blue-950">
            <h6 className="pl-4 text-white">©Copyright 2024</h6>
            <div className="flex flex-warp">
                <a draggable="false" target="_blank" href="https://github.com/BorisForis">
                    <img src="/github.png" alt="github" className="h-10 w-10 m-2 hover:scale-90"/>
                </a>
                <a draggable="false" target="_blank" href="https://www.linkedin.com/in/duca-mircea-97a951192/">
                    <img src="/linkedin.png" alt="github" className="h-11 w-11 m-2 hover:scale-90"/>
                </a>
            </div>
            <div className="flex h-auto w-56 flex-row items-center justify-center text-3xl"></div>
        </div>
    )
}