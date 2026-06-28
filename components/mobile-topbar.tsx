import { Bell, Send } from "lucide-react"
import { Logo } from "@/components/logo"

export function MobileTopbar() {
  return (
    <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 px-4 py-3 backdrop-blur lg:hidden">
      <Logo />
      <div className="flex items-center gap-4 text-foreground">
        <button aria-label="Notifications" className="relative">
          <Bell className="size-6" strokeWidth={2} />
          <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-destructive" />
        </button>
        <button aria-label="Messages">
          <Send className="size-6" strokeWidth={2} />
        </button>
      </div>
    </header>
  )
}
