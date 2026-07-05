import Image, { type ImageProps } from "next/image";

type OptimizedImageProps = Omit<ImageProps, "quality"> & {
  quality?: number;
};

/** next/image wrapper — WebP/AVIF via Next image optimizer; lazy by default below fold. */
export function OptimizedImage({ quality = 82, loading, ...props }: OptimizedImageProps) {
  return <Image quality={quality} loading={loading ?? "lazy"} {...props} />;
}
