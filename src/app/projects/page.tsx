import Toolbar from "../Toolbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-start pt-3">
      <Toolbar page="projects"/>
    </main>
  );
}