"use client"

import { useState } from "react"
import {
  Home,
  Compass,
  Sparkles,
  Bookmark,
  Store,
  GraduationCap,
  Trophy,
  Bell,
  PlusSquare,
} from "lucide-react"
import { Logo } from "@/components/logo"
import { cn } from "@/lib/utils"

const nav = [
  { label: "Home", icon: Home },
  { label: "Explore", icon: Compass },
  { label: "Prompt Studio", icon: Sparkles },
  { label: "Saved", icon: Bookmark },
  { label: "Marketplace", icon: Store },
  { label: "Learn", icon: GraduationCap },
  { label: "Challenges", icon: Trophy },
  { label: "Notifications", icon: Bell },
]

export function Sidebar() {
  const [active, setActive] = useState("Home")

  return (
    <aside className="sticky top-0 hidden h-screen w-[248px] shrink-0 flex-col border-r border-border bg-sidebar px-4 py-6 lg:flex">
      <div className="px-2">
        <Logo />
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-1">
        {nav.map((item) => {
          const Icon = item.icon
          const isActive = active === item.label
          return (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-secondary text-foreground"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
              )}
            >
              <Icon
                className={cn("size-5", isActive && "text-primary")}
                strokeWidth={2}
              />
              {item.label}
              {item.label === "Notifications" && (
                <span className="ml-auto flex size-5 items-center justify-center rounded-full bg-destructive text-[11px] font-semibold text-foreground">
                  3
                </span>
              )}
            </button>
          )
        })}
      </nav>

      <button className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90">
        <PlusSquare className="size-5" strokeWidth={2} />
        Share a creation
      </button>
    </aside>
  )
}
