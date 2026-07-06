"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

export interface ScrollExpandMediaProps {
  mediaType?: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  bgImageSrc: string;
  title?: string;
  titleLine2?: string;
  date?: string;
  scrollToExpand?: string;
  textBlend?: boolean;
  rtl?: boolean;
  children?: ReactNode;
}

/**
 * Container-scroll hero (21st.dev / Aceternity style).
 *
 * The media container expands as the user scrolls through a tall track.
 * The animation is driven by NATIVE scroll position (framer-motion `useScroll`)
 * rather than hijacking wheel/touch events — this keeps the intended visual
 * effect while being robust across mouse wheels, trackpads, "natural scroll"
 * settings and touch devices. Respects `prefers-reduced-motion`.
 */
export function ScrollExpandMedia({
  mediaType = "video",
  mediaSrc,
  posterSrc,
  bgImageSrc,
  title,
  titleLine2,
  date,
  scrollToExpand,
  textBlend,
  rtl = false,
  children,
}: ScrollExpandMediaProps) {
  const prefersReduced = useReducedMotion();
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // offset "end end" makes progress reach 1 exactly as the sticky child is
  // released at the bottom of the track — so the pinned hero fills the whole
  // track and there is no empty gap after it.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  // Reach full expansion slightly before release so the expanded state holds.
  const growEnd = 0.9;
  const mediaWidth = useTransform(
    scrollYProgress,
    [0, growEnd],
    [300, isMobile ? 950 : 1550],
  );
  const mediaHeight = useTransform(
    scrollYProgress,
    [0, growEnd],
    [400, isMobile ? 600 : 800],
  );
  const overlayOpacity = useTransform(scrollYProgress, [0, growEnd], [0.55, 0.3]);
  const bgOverlayOpacity = useTransform(scrollYProgress, [0, growEnd], [0.45, 0.62]);
  const textShiftMax = isMobile ? 12 : 8;
  const textLeftShift = useTransform(
    scrollYProgress,
    [0, growEnd],
    rtl ? [0, textShiftMax] : [0, -textShiftMax],
  );
  const textRightShift = useTransform(
    scrollYProgress,
    [0, growEnd],
    rtl ? [0, -textShiftMax] : [0, textShiftMax],
  );
  const promptOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  const resolvedLine2 =
    titleLine2 ??
    (title?.includes(",") ? title.split(",").slice(1).join(",").trim() : "");
  const resolvedLine1 =
    titleLine2 !== undefined && title
      ? title
      : title?.includes(",")
        ? title.split(",")[0].trim()
        : title;

  const titleBlend = textBlend ? "mix-blend-difference" : "mix-blend-normal";

  // Reduced-motion / no-JS-friendly static fallback: media shown expanded,
  // content visible, no scroll track, no sticky positioning.
  if (prefersReduced) {
    return (
      <div className="relative overflow-x-hidden font-sans">
        <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
          <Image src={bgImageSrc} alt="" fill priority sizes="100vw" className="object-cover object-center" />
          <div className="absolute inset-0 bg-[#0c0a24]/60" />
        </div>
        <section className="relative z-10 flex flex-col items-center gap-6 px-2 py-16 sm:px-4">
          <HeroHeadline
            date={date}
            line1={resolvedLine1}
            line2={resolvedLine2}
            titleBlend={titleBlend}
          />
          <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl" style={{ maxHeight: "70vh" }}>
            <HeroMedia mediaType={mediaType} mediaSrc={mediaSrc} posterSrc={posterSrc} alt={resolvedLine1} staticOnly />
          </div>
          <div className="relative w-full px-2 pt-2 sm:px-4 md:px-8">{children}</div>
        </section>
      </div>
    );
  }

  return (
    <div className="relative font-sans">
      {/* Tall scroll track drives the expansion via native scroll position.
          Track height = sticky height (100vh) + animation distance (100vh). */}
      <div ref={trackRef} className="relative h-[200vh] bg-[#0c0a24]">
        <div className="sticky top-0 h-[100dvh] overflow-hidden">
          {/* Full-bleed background */}
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
            <Image src={bgImageSrc} alt="" fill priority sizes="100vw" className="object-cover object-center" />
            <motion.div className="absolute inset-0 bg-[#0c0a24]" style={{ opacity: bgOverlayOpacity }} />
          </div>

          <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-5 px-2 sm:gap-6 sm:px-4">
            <HeroHeadline
              date={date}
              line1={resolvedLine1}
              line2={resolvedLine2}
              titleBlend={titleBlend}
              leftShift={textLeftShift}
              rightShift={textRightShift}
            />

            <motion.div
              className="relative z-10 shrink-0 overflow-hidden rounded-2xl"
              style={{
                width: mediaWidth,
                height: mediaHeight,
                maxWidth: "95vw",
                maxHeight: "62vh",
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.45)",
              }}
            >
              <HeroMedia
                mediaType={mediaType}
                mediaSrc={mediaSrc}
                posterSrc={posterSrc}
                alt={resolvedLine1}
                overlayOpacity={overlayOpacity}
                staticOnly={isMobile}
              />

              <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-2 bg-gradient-to-b from-[#0c0a24]/90 to-transparent px-4 pb-8 pt-3">
                <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-200/80">
                  Selogic · IT Ops
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[10px] font-medium text-emerald-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  LIVE
                </span>
              </div>
            </motion.div>

            {scrollToExpand ? (
              <motion.p
                className="relative z-30 shrink-0 text-center font-sans text-sm font-medium text-indigo-200/90 sm:text-base"
                style={{ opacity: promptOpacity }}
              >
                {scrollToExpand}
              </motion.p>
            ) : null}
          </div>
        </div>
      </div>

      {/* Expanded content flows in below the hero track. */}
      <motion.section
        className="relative z-10 flex w-full flex-col px-2 pt-2 pb-10 sm:px-4 sm:pt-4 md:px-8 md:pb-14"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[#0c0a24]" aria-hidden="true" />
        {children}
      </motion.section>
    </div>
  );
}

type HeadlineProps = {
  date?: string;
  line1?: string;
  line2?: string;
  titleBlend: string;
  leftShift?: ReturnType<typeof useTransform<number, number>>;
  rightShift?: ReturnType<typeof useTransform<number, number>>;
};

function HeroHeadline({ date, line1, line2, titleBlend, leftShift, rightShift }: HeadlineProps) {
  if (!date && !line1) return null;

  return (
    <div className={`relative z-30 w-full max-w-3xl shrink-0 text-center ${titleBlend}`}>
      {date ? (
        <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 font-sans text-sm font-medium text-indigo-100 backdrop-blur-sm">
          <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
          {date}
        </span>
      ) : null}

      {line1 ? (
        <motion.h1
          className="font-display text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.5)] sm:text-4xl md:text-5xl lg:text-[3.25rem]"
          style={leftShift ? { x: leftShift } : undefined}
        >
          {line1}
          {line2 ? "," : ""}
        </motion.h1>
      ) : null}

      {line2 ? (
        <motion.p
          className="font-display mt-2 text-[1.5rem] font-bold leading-snug text-indigo-100/95 drop-shadow-[0_2px_20px_rgba(0,0,0,0.45)] sm:mt-3 sm:text-3xl md:text-4xl"
          style={rightShift ? { x: rightShift } : undefined}
        >
          {line2}
        </motion.p>
      ) : null}
    </div>
  );
}

type MediaProps = {
  mediaType: "video" | "image";
  mediaSrc: string;
  posterSrc?: string;
  alt?: string;
  overlayOpacity?: ReturnType<typeof useTransform<number, number>>;
  /** Render a static poster image instead of the video (mobile / reduced-motion) to save the heavy video download. */
  staticOnly?: boolean;
};

function HeroMedia({ mediaType, mediaSrc, posterSrc, alt, overlayOpacity, staticOnly }: MediaProps) {
  const overlay = (
    <motion.div
      className="absolute inset-0 bg-gradient-to-b from-[#0c0a24]/60 via-transparent to-[#0c0a24]/35"
      style={overlayOpacity ? { opacity: overlayOpacity } : undefined}
    />
  );

  if (mediaType === "video" && !staticOnly) {
    return (
      <div className="pointer-events-none relative h-full w-full">
        <video
          src={mediaSrc}
          poster={posterSrc}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
        />
        {overlay}
      </div>
    );
  }

  // Static path: use the poster for a video, or the image source directly.
  const imageSrc = mediaType === "video" ? posterSrc ?? mediaSrc : mediaSrc;

  return (
    <div className="relative h-full w-full">
      <Image
        src={imageSrc}
        alt={alt || "Media content"}
        fill
        sizes="(max-width: 768px) 95vw, 1280px"
        className="object-cover object-center"
      />
      {overlay}
    </div>
  );
}

export default ScrollExpandMedia;
