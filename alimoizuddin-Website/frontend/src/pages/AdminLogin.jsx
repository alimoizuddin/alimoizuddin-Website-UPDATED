import React, { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { Lock } from "lucide-react";

export default function AdminLogin() {
  const { user, login } = useAuth();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  if (user) {
    const to = location.state?.from?.pathname || "/admin";
    return <Navigate to={to} replace />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await login(email.trim(), password);
    } catch (err) {
      const detail = err?.response?.data?.detail;
      setError(typeof detail === "string" ? detail : "Login failed");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-[#F5F0E8] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-10">
          <Lock className="w-4 h-4 text-[#C9A84C]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#C9A84C]">
            Admin Access
          </span>
        </div>
        <h1 className="font-serif text-[#F5F0E8] text-5xl font-light tracking-tight leading-none mb-3">
          Sign <span className="italic text-[#C9A84C]">in.</span>
        </h1>
        <p className="text-[#888880] mb-10 text-sm leading-relaxed">
          Editor access only. Public visitors don&rsquo;t need to be here.
        </p>

        <form onSubmit={onSubmit} className="space-y-5" data-testid="admin-login-form">
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              data-testid="admin-email"
              className="mt-2 w-full bg-[#111116] border border-[#888880]/30 px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
            />
          </label>
          <label className="block">
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-[#888880]">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              data-testid="admin-password"
              className="mt-2 w-full bg-[#111116] border border-[#888880]/30 px-4 py-3 text-[#F5F0E8] focus:border-[#C9A84C] focus:outline-none transition-colors"
            />
          </label>
          {error && (
            <div className="text-red-400 text-sm font-mono" data-testid="admin-error">
              {error}
            </div>
          )}
          <button
            type="submit"
            disabled={busy}
            data-testid="admin-login-submit"
            className="w-full px-6 py-3 bg-[#C9A84C] text-[#0D0D0D] font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-[#F5F0E8] transition-colors disabled:opacity-60"
          >
            {busy ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    </main>
  );
}
