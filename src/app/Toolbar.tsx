import Link from 'next/link';
import PropTypes from 'prop-types';

interface ToolbarProps {
    page: string;
}

const Toolbar: React.FC<ToolbarProps> = ({ page }) => {
    return (
        <div className="flex h-24 w-full flex-wrap items-center justify-center bg-blue-950 px-10 lg:justify-between">
            <Link
                href="/"
                className="flex size-auto flex-row items-center justify-center"
            >
                <p className="pl-5 text-3xl text-white">Mircea&apos;s </p>
                <span className="p-1 text-3xl font-bold text-red-600">
                    Portfolio
                </span>
            </Link>
            <div className="flex size-auto flex-row items-center justify-center">
                {page === 'home' ? (
                    <>
                        <Link
                            href={'/'}
                            className="flex h-8 flex-row items-center justify-center p-8 text-xl font-semibold text-red-600 hover:text-red-600 lg:text-2xl"
                            draggable="false"
                        >
                            Home
                        </Link>
                        <Link
                            href={'/about'}
                            className="flex h-8 flex-row items-center justify-center p-8 text-xl font-semibold text-white hover:text-red-600 lg:text-2xl"
                            draggable="false"
                        >
                            About
                        </Link>
                        <Link
                            href={'/projects'}
                            className="flex h-8 flex-row items-center justify-center p-8 text-xl font-semibold text-white hover:text-red-600 lg:text-2xl"
                            draggable="false"
                        >
                            Projects
                        </Link>
                    </>
                ) : page === 'about' ? (
                    <>
                        <Link
                            href={'/'}
                            className="flex h-8 flex-row items-center justify-center p-8 text-xl font-semibold text-white hover:text-red-600 lg:text-2xl"
                            draggable="false"
                        >
                            Home
                        </Link>
                        <Link
                            href={'/about'}
                            className="flex h-8 flex-row items-center justify-center p-8 text-xl font-semibold text-red-600 hover:text-red-600 lg:text-2xl"
                            draggable="false"
                        >
                            About
                        </Link>
                        <Link
                            href={'/projects'}
                            className="flex h-8 flex-row items-center justify-center p-8 text-xl font-semibold text-white hover:text-red-600 lg:text-2xl"
                            draggable="false"
                        >
                            Projects
                        </Link>
                    </>
                ) : (
                    <>
                        <Link
                            href={'/'}
                            className="flex h-8 flex-row items-center justify-center p-8 text-xl font-semibold text-white hover:text-red-600 lg:text-2xl"
                            draggable="false"
                        >
                            Home
                        </Link>
                        <Link
                            href={'/about'}
                            className="flex h-8 flex-row items-center justify-center p-8 text-xl font-semibold text-white hover:text-red-600 lg:text-2xl"
                            draggable="false"
                        >
                            About
                        </Link>
                        <Link
                            href={'/projects'}
                            className="flex h-8 flex-row items-center justify-center p-8 text-xl font-semibold text-red-600 hover:text-red-600 lg:text-2xl"
                            draggable="false"
                        >
                            Projects
                        </Link>
                    </>
                )}
            </div>
            <div className="absolute hidden h-auto w-60 flex-row items-center justify-center text-xl lg:relative lg:flex lg:text-2xl"></div>
        </div>
    );
};

Toolbar.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Toolbar;
