//src/shared/components/DecorativeImage.tsx
/* eslint-disable @next/next/no-img-element */
import type { ImgHTMLAttributes } from "react";

export function DecorativeImage({
  alt = "",
  loading = "lazy",
  ...props
}: ImgHTMLAttributes<HTMLImageElement>) {
  return <img {...props} alt={alt} loading={loading} decoding="async" />;
}
