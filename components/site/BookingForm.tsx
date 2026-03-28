"use client";

import * as React from "react";

type PackageOption = "Standard" | "Pro" | "Premium" | "Gold";

type FormState = {
  fullName: string;
  phone: string;
  email: string;
  package: PackageOption;
  message: string;
};

const initial: FormState = {
  fullName: "",
  phone: "",
  email: "",
  package: "Pro",
  message: "",
};

function fieldBase() {
  return [
    "w-full rounded-2xl bg-white/4 border border-white/10",
    "px-4 py-3 text-[15px] text-white/90 placeholder:text-white/35",
    "transition hover:border-white/16 focus:outline-none focus:border-white/22 focus:ring-4 focus:ring-[var(--ring)]/40",
  ].join(" ");
}

export function BookingForm() {
  const [form, setForm] = React.useState<FormState>(initial);
  const [status, setStatus] = React.useState<
    | { kind: "idle" }
    | { kind: "sending" }
    | { kind: "success"; message: string }
    | { kind: "error"; message: string }
  >({ kind: "idle" });

  const update =
    (key: keyof FormState) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setForm((s) => ({ ...s, [key]: e.target.value }));

  const validateClient = () => {
    if (form.fullName.trim().length < 3) return "Unesite ime i prezime.";
    if (form.phone.trim().length < 6) return "Unesite kontakt telefon.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
      return "Unesite ispravan email.";
    if (form.message.trim().length < 10)
      return "Poruka treba da ima bar 10 karaktera.";
    return null;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateClient();
    if (err) {
      setStatus({ kind: "error", message: err });
      return;
    }

    setStatus({ kind: "sending" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = (await res.json()) as { ok: boolean; error?: string };
      if (!res.ok || !data.ok) {
        setStatus({
          kind: "error",
          message:
            data.error ?? "Nismo uspeli da pošaljemo poruku. Pokušajte ponovo.",
        });
        return;
      }

      setStatus({
        kind: "success",
        message:
          "Poruka je uspešno poslata. Javićemo vam se uskoro sa predlogom sledećih koraka.",
      });
      setForm(initial);
    } catch {
      setStatus({
        kind: "error",
        message: "Došlo je do greške pri slanju poruke. Pokušajte ponovo.",
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="block text-sm font-semibold text-white/75 mb-2">
            Ime i prezime
          </label>
          <input
            className={fieldBase()}
            value={form.fullName}
            onChange={update("fullName")}
            placeholder="Unesite ime i prezime"
            autoComplete="name"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-white/75 mb-2">
            Kontakt telefon
          </label>
          <input
            className={fieldBase()}
            value={form.phone}
            onChange={update("phone")}
            placeholder="+381..."
            autoComplete="tel"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-white/75 mb-2">
          Email
        </label>
        <input
          className={fieldBase()}
          value={form.email}
          onChange={update("email")}
          placeholder="vaš@email.com"
          autoComplete="email"
        />
      </div>

      <div>
        <div className="block text-sm font-semibold text-white/75 mb-2">
          Zainteresovani ste za:
        </div>
        <div className="relative">
          <select
            className={`${fieldBase()} appearance-none pr-12 bg-[#10192f]/80`}
            value={form.package}
            onChange={update("package")}
          >
            {(["Standard", "Pro", "Premium", "Gold"] as PackageOption[]).map(
              (p) => (
                <option key={p} value={p} className="bg-[#0b1220] text-white">
                  {p}
                </option>
              ),
            )}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-4 inline-flex items-center text-white/70">
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              aria-hidden
            >
              <path
                d="M6 9.5 12 15l6-5.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-white/75 mb-2">
          Poruka
        </label>
        <textarea
          className={`${fieldBase()} min-h-[140px] resize-y`}
          value={form.message}
          onChange={update("message")}
          placeholder="Napišite ukratko šta vam je potrebno (vrsta sajta, broj stranica, rok...)."
        />
      </div>

      <button
        className="btn btn-primary focus-ring w-full"
        type="submit"
        disabled={status.kind === "sending"}
      >
        {status.kind === "sending" ? "Slanje..." : "Pošalji"}
      </button>

      {status.kind === "success" ? (
        <div className="card p-4 border border-emerald-400/25 bg-emerald-400/5">
          <div className="text-sm font-semibold text-emerald-200">
            Uspešno poslato
          </div>
          <div className="mt-1 text-sm text-emerald-100/80 leading-7">
            {status.message}
          </div>
        </div>
      ) : null}

      {status.kind === "error" ? (
        <div className="card p-4 border border-rose-400/25 bg-rose-400/5">
          <div className="text-sm font-semibold text-rose-200">
            Nešto nije u redu
          </div>
          <div className="mt-1 text-sm text-rose-100/80 leading-7">
            {status.message}
          </div>
        </div>
      ) : null}

      <p className="text-xs text-white/50 leading-6">
        Klikom na “Pošalji” šaljete podatke na naš mejl. Po dobijanju poruke,
        javljamo se vam uskoro sa predlogom sledećih koraka. Ne delimo vaše
        podatke sa trećim licima.
      </p>
    </form>
  );
}
