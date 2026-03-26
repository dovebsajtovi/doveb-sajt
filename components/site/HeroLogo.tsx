"use client";

import * as React from "react";
import Image from "next/image";

export function HeroLogo(props: { logoSrc: string; alt: string }) {
  const { logoSrc, alt } = props;
  const [animationFinished, setAnimationFinished] = React.useState(false);

  return (
    <div className="relative h-full w-full">
      {!animationFinished ? (
        <video
          className="h-full w-full object-contain invert -translate-y-4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={() => setAnimationFinished(true)}
          onError={() => setAnimationFinished(true)}
        >
          <source src="/foxvideo.mp4" type="video/mp4" />
        </video>
      ) : (
        <Image
          src={logoSrc}
          alt={alt}
          fill
          className="object-contain logo-invert"
          priority
        />
      )}
    </div>
  );
}
