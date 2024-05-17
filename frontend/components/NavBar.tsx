import Link from "next/link";

const NavBar = () => {
  return (
    <nav>
      <div>
        <Link href="/">Home</Link>
        <Link href="/pages/inspect">Inspecionar Url</Link>
      </div>
    </nav>
  )
}

export default NavBar;
