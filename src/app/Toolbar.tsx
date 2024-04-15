import Link from "next/link";

interface ToolbarProps {
    page: string;
}

const Toolbar: React.FC<ToolbarProps> = ({ page }) => {
    return (
        <div className="mt-8 flex h-24 w-full flex-wrap items-center justify-between bg-blue-950 px-10">
            <div className="flex h-auto w-auto flex-row items-center justify-center"> 
                <p className="text-3xl text-white pl-5">Mircea's </p> 
                <span className="text-red-600 text-3xl font-bold p-1">Portfolio</span>
            </div>
            <div className="flex h-auto w-auto flex-row items-center justify-center">
                {page === "home" ? (
                    <>
                        <Link
                            href={'/'}
                            className="flex h-8 flex-row items-center justify-center text-3xl text-red-600 font-semibold p-8 hover:text-red-600" draggable="false">
                                Home
                        </Link>
                        <Link
                            href={'/about'}
                            className="flex h-8 flex-row items-center justify-center text-3xl text-white font-semibold p-8 hover:text-red-600" draggable="false">
                                About
                        </Link>
                        <Link
                            href={'/projects'}
                            className="flex h-8 flex-row items-center justify-center text-3xl text-white font-semibold p-8 hover:text-red-600" draggable="false">
                                Projects
                        </Link>
                    </>
                ) : page === "about" ? (
                    <>
                        <Link
                            href={'/'}
                            className="flex h-8 flex-row items-center justify-center text-3xl text-white font-semibold p-8 hover:text-red-600" draggable="false">
                                Home
                        </Link>
                        <Link
                            href={'/about'}
                            className="flex h-8 flex-row items-center justify-center text-3xl text-red-600 font-semibold p-8 hover:text-red-600" draggable="false">
                                About
                        </Link>
                        <Link
                            href={'/projects'}
                            className="flex h-8 flex-row items-center justify-center text-3xl text-white font-semibold p-8 hover:text-red-600" draggable="false">
                                Projects
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href={'/'}
                            className="flex h-8 flex-row items-center justify-center text-3xl text-white font-semibold p-8 hover:text-red-600" draggable="false">
                                Home
                        </Link>
                        <Link
                            href={'/about'}
                            className="flex h-8 flex-row items-center justify-center text-3xl text-white font-semibold p-8 hover:text-red-600" draggable="false">
                                About
                        </Link>
                        <Link
                            href={'/projects'}
                            className="flex h-8 flex-row items-center justify-center text-3xl text-red-600 font-semibold p-8 hover:text-red-600" draggable="false">
                                Projects
                        </Link>
                    </>
                )}
            </div>
            <div className="flex h-auto w-56 flex-row items-center justify-center text-3xl"></div>
        </div>
    );
}

export default Toolbar;