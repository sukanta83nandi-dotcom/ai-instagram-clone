import Image from "next/image"
import { Plus } from "lucide-react"
import { drops } from "@/lib/data"

export function DropsRow() {
  return (
    <section
      aria-label="Latest creator drops"
      className="border-b border-border px-4 py-4"
    >
      <div className="flex gap-4 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {drops.map((drop, i) => (
          <button
            key={drop.id}
            className="flex w-16 shrink-0 flex-col items-center gap-1.5"
          >
            <span className="relative rounded-full bg-gradient-to-tr from-primary to-chart-2 p-[2px]">
              <span className="block rounded-full border-2 border-background">
                <Image
                  src={drop.creator.avatar || "/placeholder.svg"}
                  alt={drop.creator.name}
                  width={60}
                  height={60}
                  className="size-14 rounded-full object-cover"
                />
              </span>
              {i === 0 && (
                <span className="absolute -bottom-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full border-2 border-background bg-primary text-primary-foreground">
                  <Plus className="size-3" strokeWidth={3} />
                </span>
              )}
            </span>
            <span className="w-full truncate text-center text-xs text-muted-foreground">
              {drop.label}
            </span>
          </button>
        ))}
      </div>
    </section>
  )
}
