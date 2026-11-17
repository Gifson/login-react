import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function App() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function check(event) {
    event.preventDefault();
    setError("");

    const nextErrors = {};
    if (!email.trim()) {
      nextErrors.email = "Email is required.";
    } else if (!emailPattern.test(email.trim())) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!pass) {
      nextErrors.password = "Password is required.";
    } else if (pass.length < 8) {
      nextErrors.password = "Password must be at least 8 characters.";
    }

    setFieldErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: email.trim(),
        password: pass,
      });

      if (response.data === true) {
        navigate("/success");
      } else {
        setError("Invalid email or password.");
      }
    } catch {
      setError("Unable to connect. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-4 py-10">
      <section className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl shadow-slate-200/70">
        <div className="h-2 bg-brand-700" />
        <div className="px-7 py-9 sm:px-10 sm:py-11">
          <a className="mb-9 inline-flex items-center gap-2.5" href="/" aria-label="MJ Ware">
            
            <span className="text-sm font-bold tracking-[0.14em] text-slate-800">
              MJ WARE
            </span>
          </a>

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-700">
            Client portal
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900">
            Welcome back
          </h1>
          <p className="mt-2 text-sm leading-6 text-slate-500">
            Sign in with your account to continue.
          </p>

          <form className="mt-8 space-y-5" onSubmit={check} noValidate>
            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="email">
                Email
              </label>
              <input
                autoComplete="email"
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                aria-invalid={Boolean(fieldErrors.email)}
                className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10"
                id="email"
                name="email"
                onChange={(event) => {
                  setEmail(event.target.value);
                  setFieldErrors((current) => ({ ...current, email: "" }));
                  setError("");
                }}
                placeholder="Enter your email"
                required
                type="email"
                value={email}
              />
              {fieldErrors.email && (
                <p className="mt-2 text-sm text-red-700" id="email-error" role="alert">
                  {fieldErrors.email}
                </p>
              )}
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700" htmlFor="password">
                Password
              </label>
              <input
                autoComplete="current-password"
                aria-describedby={fieldErrors.password ? "password-error" : undefined}
                aria-invalid={Boolean(fieldErrors.password)}
                className="h-12 w-full rounded-lg border border-slate-300 bg-white px-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-brand-700 focus:ring-4 focus:ring-brand-700/10"
                id="password"
                name="password"
                onChange={(event) => {
                  setPass(event.target.value);
                  setFieldErrors((current) => ({ ...current, password: "" }));
                  setError("");
                }}
                minLength={8}
                placeholder="At least 8 characters"
                required
                type="password"
                value={pass}
              />
              {fieldErrors.password && (
                <p className="mt-2 text-sm text-red-700" id="password-error" role="alert">
                  {fieldErrors.password}
                </p>
              )}
            </div>

            {error && (
              <p className="rounded-lg bg-red-50 px-3.5 py-3 text-sm text-red-700" role="alert">
                {error}
              </p>
            )}

            <button
              className="flex h-12 w-full items-center justify-center rounded-lg bg-brand-700 px-4 text-sm font-semibold text-white transition hover:bg-brand-800 focus:outline-none focus:ring-4 focus:ring-brand-700/20 disabled:cursor-wait disabled:opacity-70"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
            </button>
          </form>

         
        </div>
      </section>
    </main>
  );
}

export default App;
