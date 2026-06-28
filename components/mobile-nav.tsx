"use client"

import { useState } from "react"
import { Home, Compass, PlusSquare, Store, Bookmark } from "lucide-react"
import { cn } from "@/lib/utils"

const items = [
  { label: "Home", icon: Home },
  { label: "Explore", icon: Compass },
  { label: "Create", icon: PlusSquare },
  { label: "Market", icon: Store },
  { label: "Saved", icon: Bookmark },
]

export function MobileNav() {
  const [active, setActive] = useState("Home")

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-border bg-sidebar/95 px-2 py-2 backdrop-blur lg:hidden">
      {items.map((item) => {
        const Icon = item.icon
        const isActive = active === item.label
        return (
          <button
            key={item.label}
            onClick={() => setActive(item.label)}
            className="flex flex-1 flex-col items-center gap-1 py-1"
            aria-label={item.label}
          >
            <Icon
              className={cn(
                "size-6 transition-colors",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
              strokeWidth={2}
            />
            <span
              className={cn(
                "text-[10px] font-medium",
                isActive ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
