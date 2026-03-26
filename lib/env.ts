function required(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

export const EMAIL_ENV = {
  host: () => required("SMTP_HOST"),
  port: () => Number(required("SMTP_PORT")),
  user: () => required("SMTP_USER"),
  pass: () => required("SMTP_PASS"),
  from: () => required("SMTP_FROM"),
};

