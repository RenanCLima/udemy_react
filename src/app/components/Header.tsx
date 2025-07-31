import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between text-gray-800">
          <Link href="/">
            <li>Meu Portfólio</li>
          </Link>
          <Link href="/portfolio">
            <li>Projetos</li>
          </Link>
          <Link href="/admin">
            <li>Admin</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
