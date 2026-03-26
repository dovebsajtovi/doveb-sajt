import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { title?: string };

export function IconInstagram(props: IconProps) {
  const { title = "Instagram", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M7.6 2h8.8A5.6 5.6 0 0 1 22 7.6v8.8A5.6 5.6 0 0 1 16.4 22H7.6A5.6 5.6 0 0 1 2 16.4V7.6A5.6 5.6 0 0 1 7.6 2Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M17.3 6.9h.01"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  const { title = "Telefon", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M8.7 3.2c.4-.5 1.1-.7 1.7-.4l2.2 1.1c.7.3 1 .9.9 1.6l-.3 2.3c0 .3.1.7.4.9l2.3 1.7c.3.2.7.2 1 0l2-1.2c.6-.4 1.4-.3 1.9.2l1.3 1.3c.5.5.6 1.3.2 2a6.8 6.8 0 0 1-4.2 3.2c-3.8.9-8.6-2.3-11.8-5.5S1.9 8.9 2.8 5.1a6.8 6.8 0 0 1 3.2-4.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPhoneCall(props: IconProps) {
  const { title = "Telefon", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M14.7 3.3a7 7 0 0 1 6 6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M14.7 6.8a3.5 3.5 0 0 1 2.6 2.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M8.7 3.2c.4-.5 1.1-.7 1.7-.4l2.2 1.1c.7.3 1 .9.9 1.6l-.3 2.3c0 .3.1.7.4.9l2.3 1.7c.3.2.7.2 1 0l2-1.2c.6-.4 1.4-.3 1.9.2l1.3 1.3c.5.5.6 1.3.2 2a6.8 6.8 0 0 1-4.2 3.2c-3.8.9-8.6-2.3-11.8-5.5S1.9 8.9 2.8 5.1a6.8 6.8 0 0 1 3.2-4.2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  const { title = "Uključeno", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M20 6.8 9.7 17.2 4 11.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconArrowUpRight(props: IconProps) {
  const { title = "Otvori", ...rest } = props;
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path
        d="M7 17 17 7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10 7h7v7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function IconPhoneLucide(props: IconProps) {
  const { title = "Telefon", ...rest } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden={title ? undefined : true}
      role={title ? "img" : "presentation"}
      {...rest}
    >
      {title ? <title>{title}</title> : null}
      <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
    </svg>
  );
}

