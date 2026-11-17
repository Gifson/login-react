import { useNavigate } from "react-router-dom";

function Success() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            className="text-sm font-bold tracking-[0.14em] text-slate-800"
            href="/"
          >
            MJ WARE
          </a>
          <button
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            onClick={() => navigate("/")}
            type="button"
          >
            Sign out
          </button>
        </div>
      </header>

      <section className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-sm font-medium text-brand-700">
          <span aria-hidden="true">✓</span>
          Signed in successfully
        </span>
        <h1 className="mt-7 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Welcome to your workspace
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
          You're all set. This is your home for updates, projects, and everything
          you need to get started.
        </p>

        <div className="mt-12 w-full rounded-2xl border border-slate-200 bg-white p-8 text-left shadow-sm sm:p-10">
          <p className="text-sm font-semibold text-brand-700">YOUR NEXT STEP</p>
          <h2 className="mt-3 text-xl font-semibold text-slate-900">
            Your account is ready
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Start exploring your workspace. New activity and useful links will
            appear here.
          </p>
        </div>
      </section>
    </main>
  );
}

export default Success;
