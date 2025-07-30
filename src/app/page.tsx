export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl">Bem Vindo ao <span className="text-blue-600">Portfólio!</span></h1>
        <p className="mt-5 text-2xl">
          Comece a construir o seu portfólio profissional hoje!
        </p>
        <div>
          <h2>Ver Portfólio</h2>
          <p>Exploque os projetos e trabalhos realizados.</p>
        </div>
        <div>
          <h2>Área Administrativa</h2>
          <p>Gerencie seu porfólio (requer login).</p>
        </div>
      </main>
    </div>
  );
}
