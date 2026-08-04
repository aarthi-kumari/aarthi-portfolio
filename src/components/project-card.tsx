/* eslint-disable @next/next/no-img-element */
"use client";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import Markdown from "react-markdown";

function ProjectImage({ src, alt }: { src: string; alt: string }) {
  const [imageError, setImageError] = useState(false);

  if (!src || imageError) {
    return <div className="absolute inset-0 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
      onError={() => setImageError(true)}
    />
  );
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  images?: readonly string[];
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  images,
  video,
  links,
  className,
}: Props) {
  const imageList = useMemo(
    () => (images && images.length > 0 ? images.filter(Boolean) : image ? [image] : []),
    [images, image]
  );
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [imageList.length]);

  useEffect(() => {
    if (imageList.length <= 1) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % imageList.length);
    }, 2800);

    return () => window.clearInterval(interval);
  }, [imageList.length]);

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className={cn("group h-full", className)}
    >
      <div
        className={cn(
          "flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300",
          "hover:border-foreground/15 hover:shadow-md"
        )}
      >
        <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted">
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 block"
          >
            {video ? (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
            ) : imageList.length > 0 ? (
              <motion.div
                key={imageList[activeImage]}
                initial={{ opacity: 0.45 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <ProjectImage src={imageList[activeImage]} alt={title} />
              </motion.div>
            ) : (
              <div className="absolute inset-0 bg-muted" />
            )}
          </Link>
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-linear-to-t from-black/25 to-transparent" />
          {imageList.length > 1 && (
            <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 backdrop-blur-sm">
              {imageList.map((_, index) => (
                <span
                  key={index}
                  className={cn(
                    "h-1.5 w-1.5 rounded-full transition-colors",
                    index === activeImage ? "bg-white" : "bg-white/45"
                  )}
                />
              ))}
            </div>
          )}
          {links && links.length > 0 && (
            <div className="absolute top-3 right-3 z-10 flex flex-wrap gap-2">
              {links.map((linkItem, idx) => (
                <Link
                  href={linkItem.href}
                  key={idx}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Badge
                    className="flex items-center gap-1.5 bg-black/85 text-xs text-white backdrop-blur-sm hover:bg-black"
                    variant="default"
                  >
                    {linkItem.icon}
                    {linkItem.type}
                  </Badge>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-1 flex-col gap-3.5 p-5 sm:p-6">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: 0.05, duration: 0.35 }}
            className="flex items-start justify-between gap-2"
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-base font-semibold leading-snug tracking-tight sm:text-[1.05rem]">
                {title}
              </h3>
              <time className="text-xs text-muted-foreground">{dates}</time>
            </div>
            <Link
              href={href || "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`Open ${title}`}
            >
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ delay: 0.1, duration: 0.38 }}
            className="prose max-w-full flex-1 text-pretty font-sans text-sm leading-relaxed text-muted-foreground dark:prose-invert"
          >
            <Markdown>{description}</Markdown>
          </motion.div>
          {tags && tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.15, duration: 0.35 }}
              className="mt-auto flex flex-wrap gap-1.5"
            >
              {tags.map((tag) => (
                <Badge
                  key={tag}
                  className="h-6 w-fit border border-border px-2 text-[11px] font-medium"
                  variant="outline"
                >
                  {tag}
                </Badge>
              ))}
            </motion.div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
