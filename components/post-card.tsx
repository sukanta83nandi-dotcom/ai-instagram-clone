"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Heart,
  MessageCircle,
  Send,
  Bookmark,
  Repeat2,
  BadgeCheck,
  MoreHorizontal,
} from "lucide-react"
import type { Post } from "@/lib/data"
import { PromptCard } from "@/components/prompt-card"
import { cn } from "@/lib/utils"

function formatCount(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(n >= 10000 ? 0 : 1) + "K"
  return String(n)
}

export function PostCard({ post }: { post: Post }) {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)

  const likeCount = post.likes + (liked ? 1 : 0)
  const saveCount = post.saves + (saved ? 1 : 0)

  return (
    <article className="border-b border-border pb-5 sm:rounded-2xl sm:border sm:bg-card sm:pb-0">
      {/* header */}
      <header className="flex items-center gap-3 px-4 py-3">
        <Image
          src={post.creator.avatar || "/placeholder.svg"}
          alt={post.creator.name}
          width={44}
          height={44}
          className="size-10 rounded-full object-cover ring-2 ring-border"
        />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-1">
            <span className="truncate text-sm font-semibold text-foreground">
              {post.creator.handle}
            </span>
            {post.creator.verified && (
              <BadgeCheck
                className="size-4 shrink-0 text-primary"
                strokeWidth={2.5}
              />
            )}
          </div>
          <span className="text-xs text-muted-foreground">
            {post.creator.specialty} · {post.timeAgo}
          </span>
        </div>
        <button className="rounded-full px-3 py-1.5 text-xs font-semibold text-primary transition-colors hover:bg-primary/10">
          Follow
        </button>
        <button
          aria-label="More options"
          className="text-muted-foreground transition-colors hover:text-foreground"
        >
          <MoreHorizontal className="size-5" />
        </button>
      </header>

      {/* image */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-secondary",
          post.aspect === "portrait" ? "aspect-[4/5]" : "aspect-square",
        )}
      >
        <Image
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, 600px"
          className="object-cover"
          crossOrigin="anonymous"
        />
        <span className="absolute left-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-xs font-medium text-foreground backdrop-blur">
          {post.model}
        </span>
      </div>

      {/* actions */}
      <div className="flex items-center gap-1 px-3 pt-3">
        <ActionButton
          active={liked}
          activeClass="text-destructive"
          onClick={() => setLiked((v) => !v)}
          label="Like"
        >
          <Heart
            className="size-6"
            strokeWidth={2}
            fill={liked ? "currentColor" : "none"}
          />
        </ActionButton>
        <ActionButton label="Comment">
          <MessageCircle className="size-6" strokeWidth={2} />
        </ActionButton>
        <ActionButton label="Remix">
          <Repeat2 className="size-6" strokeWidth={2} />
        </ActionButton>
        <ActionButton label="Share">
          <Send className="size-6" strokeWidth={2} />
        </ActionButton>
        <ActionButton
          active={saved}
          activeClass="text-primary"
          onClick={() => setSaved((v) => !v)}
          label="Save"
          className="ml-auto"
        >
          <Bookmark
            className="size-6"
            strokeWidth={2}
            fill={saved ? "currentColor" : "none"}
          />
        </ActionButton>
      </div>

      {/* counts */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 px-4 pt-2 text-sm">
        <span className="font-semibold text-foreground">
          {formatCount(likeCount)} likes
        </span>
        <span className="text-muted-foreground">
          {formatCount(post.remixes)} remixes
        </span>
        <span className="text-muted-foreground">
          {formatCount(saveCount)} saves
        </span>
      </div>

      {/* caption */}
      <div className="px-4 pt-2">
        <p className="text-sm text-foreground">
          <span className="font-semibold">{post.creator.handle}</span>{" "}
          <span className="text-foreground/90">{post.title}</span>
        </p>
      </div>

      {/* prompt card */}
      <div className="px-4 pt-3">
        <PromptCard post={post} />
      </div>

      {/* top comment */}
      {post.topComment && (
        <div className="px-4 pt-3">
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground/90">
              {post.topComment.handle}
            </span>{" "}
            {post.topComment.text}
          </p>
        </div>
      )}

      <div className="px-4 pb-4 pt-2">
        <button className="text-sm text-muted-foreground transition-colors hover:text-foreground">
          View all {formatCount(post.comments)} comments
        </button>
      </div>
    </article>
  )
}

function ActionButton({
  children,
  label,
  active,
  activeClass,
  onClick,
  className,
}: {
  children: React.ReactNode
  label: string
  active?: boolean
  activeClass?: string
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      aria-pressed={active}
      className={cn(
        "rounded-full p-2 transition-colors",
        active
          ? activeClass
          : "text-foreground hover:text-muted-foreground",
        className,
      )}
    >
      {children}
    </button>
  )
}
