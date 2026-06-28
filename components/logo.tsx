import { Aperture } from "lucide-react"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  showWordmark = true,
}: {
  className?: string
  showWordmark?: boolean
}) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
        <Aperture className="size-5" strokeWidth={2.25} />
      </span>
      {showWordmark && (
        <span className="font-heading text-xl font-semibold tracking-tight text-foreground">
          AIGram
        </span>
      )}
    </div>
  )
}
