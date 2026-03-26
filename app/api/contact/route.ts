import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { EMAIL_ENV } from "@/lib/env";
import { SITE } from "@/lib/site";

type Payload = {
  fullName: string;
  phone: string;
  email: string;
  package: "Standard" | "Pro" | "Premium" | "Gold";
  message: string;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function clean(value: unknown) {
  return String(value ?? "").trim();
}

function validate(
  input: any,
): { ok: true; data: Payload } | { ok: false; error: string } {
  const fullName = clean(input?.fullName);
  const phone = clean(input?.phone);
  const email = clean(input?.email);
  const pkg = clean(input?.package) as Payload["package"];
  const message = clean(input?.message);

  if (fullName.length < 3) {
    return { ok: false, error: "Unesite ime i prezime." };
  }
  if (phone.length < 6) {
    return { ok: false, error: "Unesite kontakt telefon." };
  }
  if (!isEmail(email)) {
    return { ok: false, error: "Unesite ispravan email." };
  }
  if (!["Standard", "Pro", "Premium", "Gold"].includes(pkg)) {
    return { ok: false, error: "Izaberite paket." };
  }
  if (message.length < 10) {
    return { ok: false, error: "Poruka treba da ima bar 10 karaktera." };
  }

  return {
    ok: true,
    data: { fullName, phone, email, package: pkg, message },
  };
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const validated = validate(json);

    if (!validated.ok) {
      return NextResponse.json(
        { ok: false, error: validated.error },
        { status: 400 },
      );
    }

    const data = validated.data;
    const now = new Date();
    const nowIso = now.toISOString();
    const sentAt = now.toLocaleString("sr-RS", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    const payload = {
      ...data,
      createdAt: nowIso,
      source: "doveb.rs",
    };

    const transporter = nodemailer.createTransport({
      host: EMAIL_ENV.host(),
      port: Number(EMAIL_ENV.port()),
      secure: Number(EMAIL_ENV.port()) === 465,
      auth: {
        user: EMAIL_ENV.user(),
        pass: EMAIL_ENV.pass(),
      },
    });

    const jsonText = JSON.stringify(payload, null, 2);

    await transporter.sendMail({
      from: EMAIL_ENV.from(),
      to: SITE.email,
      replyTo: data.email,
      subject: `Novi upit — ${data.fullName} (${data.package})`,
      text: `
Novi upit sa sajta DOVEB

Ime i prezime: ${data.fullName}
Telefon: ${data.phone}
Email: ${data.email}
Paket: ${data.package}
Vreme slanja: ${sentAt}

Poruka:
${data.message}

Izvor: doveb.rs
      `.trim(),
      html: `
        <div style="margin:0;padding:24px;background:#0b1120;font-family:Arial,Helvetica,sans-serif;color:#e5e7eb;">
          <div style="max-width:680px;margin:0 auto;background:#111827;border:1px solid rgba(255,255,255,0.08);border-radius:18px;overflow:hidden;">
            
            <div style="padding:24px 28px;background:linear-gradient(135deg,#8b5cf6,#38bdf8);color:white;">
              <div style="font-size:13px;opacity:0.9;letter-spacing:0.08em;text-transform:uppercase;">
                DOVEB
              </div>
              <h1 style="margin:8px 0 0;font-size:28px;line-height:1.2;">
                Novi upit sa sajta
              </h1>
            </div>

            <div style="padding:28px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                <tr>
                  <td style="padding:0 0 14px;font-size:14px;color:#9ca3af;width:180px;">Ime i prezime</td>
                  <td style="padding:0 0 14px;font-size:16px;font-weight:700;color:#ffffff;">${escapeHtml(data.fullName)}</td>
                </tr>
                <tr>
                  <td style="padding:0 0 14px;font-size:14px;color:#9ca3af;">Telefon</td>
                  <td style="padding:0 0 14px;font-size:16px;color:#ffffff;">
                    <a href="tel:${escapeHtml(data.phone)}" style="color:#93c5fd;text-decoration:none;">
                      ${escapeHtml(data.phone)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 14px;font-size:14px;color:#9ca3af;">Email</td>
                  <td style="padding:0 0 14px;font-size:16px;color:#ffffff;">
                    <a href="mailto:${escapeHtml(data.email)}" style="color:#93c5fd;text-decoration:none;">
                      ${escapeHtml(data.email)}
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0 0 14px;font-size:14px;color:#9ca3af;">Paket</td>
                  <td style="padding:0 0 14px;">
                    <span style="display:inline-block;padding:8px 14px;border-radius:999px;background:rgba(139,92,246,0.18);border:1px solid rgba(139,92,246,0.35);font-size:14px;font-weight:700;color:#ffffff;">
                      ${escapeHtml(data.package)}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding:0;font-size:14px;color:#9ca3af;">Vreme slanja</td>
                  <td style="padding:0;font-size:16px;color:#ffffff;">${escapeHtml(sentAt)}</td>
                </tr>
              </table>

              <div style="margin-top:24px;">
                <div style="font-size:14px;color:#9ca3af;margin-bottom:10px;">Poruka</div>
                <div style="padding:18px 20px;background:#0b1220;border:1px solid rgba(255,255,255,0.08);border-radius:14px;font-size:15px;line-height:1.7;color:#f3f4f6;white-space:pre-wrap;">
                  ${escapeHtml(data.message)}
                </div>
              </div>

              <div style="margin-top:24px;padding-top:18px;border-top:1px solid rgba(255,255,255,0.08);font-size:13px;color:#9ca3af;">
                Izvor: ${escapeHtml(payload.source)}
              </div>
            </div>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: `upit-${nowIso.replace(/[:.]/g, "-")}.json`,
          content: Buffer.from(jsonText, "utf-8"),
          contentType: "application/json",
        },
      ],
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err: any) {
    console.error("MAIL ERROR:", err);

    return NextResponse.json(
      {
        ok: false,
        error: err?.message || "Došlo je do greške pri slanju poruke.",
      },
      { status: 500 },
    );
  }
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
