import FooterComp from '../FooterComp';
import Toolbar from '../Toolbar';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-start justify-between bg-gray-200">
            <Toolbar page="projects" />
            <FooterComp />
        </main>
    );
}
