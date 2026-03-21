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
    return <div className="w-full h-48 bg-muted" />;
  }

  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover"
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
      whileHover={{ y: -6, scale: 1.01 }}
      className={cn(
        "group",
        className
      )}
    >
      <div
      className={cn(
        "flex flex-col h-full border border-border rounded-xl overflow-hidden hover:ring-2 cursor-pointer hover:ring-muted transition-all duration-200"
      )}
    >
      <div className="relative shrink-0">
        <Link
          href={href || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-48 object-cover"
            />
          ) : imageList.length > 0 ? (
            <motion.div
              key={imageList[activeImage]}
              initial={{ opacity: 0.55, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <ProjectImage src={imageList[activeImage]} alt={title} />
            </motion.div>
          ) : (
            <div className="w-full h-48 bg-muted" />
          )}
        </Link>
        {imageList.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-black/40 px-2 py-1">
            {imageList.map((_, index) => (
              <span
                key={index}
                className={cn(
                  "h-1.5 w-1.5 rounded-full",
                  index === activeImage ? "bg-white" : "bg-white/50"
                )}
              />
            ))}
          </div>
        )}
        {links && links.length > 0 && (
          <div className="absolute top-2 right-2 flex flex-wrap gap-2">
            {links.map((link, idx) => (
              <Link
                href={link.href}
                key={idx}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                <Badge
                  className="flex items-center gap-1.5 text-xs bg-black text-white hover:bg-black/90"
                  variant="default"
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 flex flex-col gap-3 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ delay: 0.05, duration: 0.35 }}
          className="flex items-start justify-between gap-2"
        >
          <div className="flex flex-col gap-1">
            <h3 className="font-semibold">{title}</h3>
            <time className="text-xs text-muted-foreground">{dates}</time>
          </div>
          <Link
            href={href || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
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
          className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert"
        >
          <Markdown>{description}</Markdown>
        </motion.div>
        {tags && tags.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15, duration: 0.35 }}
            className="flex flex-wrap gap-1 mt-auto"
          >
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[11px] font-medium border border-border h-6 w-fit px-2"
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
