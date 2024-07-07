import Navbar from "./Navbar";
import Logo from "../Snippets/Logo";

export default function Header() {
  return (
    <header className="p-6 text-slate-700 shadow-[0_0_5px_0_rgba(0,0,0,0.5)]	">
      <div className="container mx-auto flex items-center justify-between font-semibold tracking-wide">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}
