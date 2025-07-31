import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <ul className="flex justify-between text-gray-800">
          <Link
            href="/"
            className="text-lg font-semibold text-gray-600 hover:text-gray-800"
          >
            <li>Meu Portfólio</li>
          </Link>
          <Link
            href="/portfolio"
            className="text-lg font-semibold text-gray-600 hover:text-gray-800"
          >
            <li>Projetos</li>
          </Link>
          <Link
            href="/admin"
            className="text-lg font-semibold text-gray-600 hover:text-gray-800"
          >
            <li>Admin</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
