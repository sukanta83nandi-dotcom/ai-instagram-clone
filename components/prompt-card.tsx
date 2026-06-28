"use client"

import { useState } from "react"
import {
  Copy,
  Check,
  ChevronDown,
  Wand2,
  Cpu,
  Hash,
  Layers,
  Gauge,
} from "lucide-react"
import type { Post } from "@/lib/data"
import { cn } from "@/lib/utils"

export function PromptCard({ post }: { post: Post }) {
  const [copied, setCopied] = useState(false)
  const [expanded, setExpanded] = useState(false)

  async function copyPrompt() {
    try {
      await navigator.clipboard.writeText(post.prompt)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <div className="rounded-2xl border border-border bg-secondary/40 p-3.5">
      <div className="mb-2 flex items-center justify-between gap-2">
        <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-primary">
          <Wand2 className="size-3.5" strokeWidth={2.5} />
          Prompt
        </span>
        <button
          onClick={copyPrompt}
          className={cn(
            "flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-colors",
            copied
              ? "bg-success/15 text-success"
              : "bg-primary text-primary-foreground hover:opacity-90",
          )}
          aria-label="Copy prompt"
        >
          {copied ? (
            <>
              <Check className="size-3.5" strokeWidth={3} />
              Copied
            </>
          ) : (
            <>
              <Copy className="size-3.5" strokeWidth={2.5} />
              Copy prompt
            </>
          )}
        </button>
      </div>

      <p
        className={cn(
          "font-mono text-[13px] leading-relaxed text-foreground/90",
          !expanded && "line-clamp-3",
        )}
      >
        {post.prompt}
      </p>

      <div className="mt-2.5 flex flex-wrap items-center gap-1.5">
        <Tag icon={Cpu} label={post.model} highlight />
        {post.tools.map((tool) => (
          <Tag key={tool} label={tool} />
        ))}
      </div>

      {expanded && (
        <div className="mt-3 grid grid-cols-2 gap-2 border-t border-border pt-3 sm:grid-cols-4">
          {post.seed && <Param icon={Hash} label="Seed" value={post.seed} />}
          {post.steps != null && (
            <Param icon={Layers} label="Steps" value={String(post.steps)} />
          )}
          {post.cfg != null && (
            <Param icon={Gauge} label="CFG" value={String(post.cfg)} />
          )}
          {post.negativePrompt && (
            <div className="col-span-2 sm:col-span-4">
              <p className="text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                Negative prompt
              </p>
              <p className="mt-0.5 font-mono text-xs text-foreground/80">
                {post.negativePrompt}
              </p>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-2.5 flex items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        {expanded ? "Hide details" : "View prompt & settings"}
        <ChevronDown
          className={cn(
            "size-3.5 transition-transform",
            expanded && "rotate-180",
          )}
        />
      </button>
    </div>
  )
}

function Tag({
  icon: Icon,
  label,
  highlight,
}: {
  icon?: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  highlight?: boolean
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium",
        highlight
          ? "bg-primary/15 text-primary"
          : "bg-background text-muted-foreground",
      )}
    >
      {Icon && <Icon className="size-3" strokeWidth={2.5} />}
      {label}
    </span>
  )
}

function Param({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col gap-0.5">
      <span className="flex items-center gap-1 text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
        <Icon className="size-3" strokeWidth={2.5} />
        {label}
      </span>
      <span className="font-mono text-xs text-foreground">{value}</span>
    </div>
  )
}
