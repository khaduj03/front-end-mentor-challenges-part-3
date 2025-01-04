
export default function Header() {
  return (
    <header className="bg-background flex justify-between h-96 p-10 px-32">
        <img className="w-32 h-5" src="/images/logo.svg" alt="logo" />
        <ul className="flex flex-row text-lg space-x-12 text-white font-semibold">
            <li><a href="#">About</a></li>
            <li><a href="#">Discover</a></li>
            <li><a href="#">Get Started</a></li>
        </ul>
    </header>
  )
}
