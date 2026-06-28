import Image from "next/image"
import { Search, TrendingUp, BadgeCheck, Trophy } from "lucide-react"
import { suggestedCreators, trendingPrompts } from "@/lib/data"

export function RightRail() {
  return (
    <aside className="sticky top-0 hidden h-screen w-[330px] shrink-0 flex-col gap-5 overflow-y-auto border-l border-border px-6 py-6 xl:flex">
      {/* search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search prompts, models, creators"
          className="w-full rounded-full border border-border bg-card py-2.5 pl-9 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
        />
      </div>

      {/* logged-in user */}
      <div className="flex items-center gap-3">
        <Image
          src="/avatars/nova.png"
          alt="Your profile"
          width={48}
          height={48}
          className="size-11 rounded-full object-cover ring-2 ring-border"
        />
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">
            novarenders
          </p>
          <p className="truncate text-xs text-muted-foreground">Nova Reyes</p>
        </div>
        <button className="text-xs font-semibold text-primary">Switch</button>
      </div>

      {/* daily challenge */}
      <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/15 to-card p-4">
        <div className="flex items-center gap-2 text-primary">
          <Trophy className="size-4" strokeWidth={2.5} />
          <span className="text-xs font-semibold uppercase tracking-wide">
            Daily challenge
          </span>
        </div>
        <h3 className="mt-2 font-heading text-base font-semibold text-foreground">
          Liquid light & glass
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
          Generate something using refraction. Top entry gets featured on the
          Explore page. Ends in 14h.
        </p>
        <button className="mt-3 w-full rounded-xl bg-primary py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90">
          Enter challenge
        </button>
      </div>

      {/* trending prompts */}
      <div>
        <div className="mb-3 flex items-center gap-2">
          <TrendingUp className="size-4 text-muted-foreground" />
          <h3 className="text-sm font-semibold text-foreground">
            Trending prompts
          </h3>
        </div>
        <div className="flex flex-col gap-1">
          {trendingPrompts.map((t, i) => (
            <button
              key={t.tag}
              className="flex items-center justify-between rounded-lg px-2 py-2 text-left transition-colors hover:bg-secondary/60"
            >
              <span className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-medium text-foreground">
                  #{t.tag.replace(/\s+/g, "")}
                </span>
              </span>
              <span className="text-xs text-muted-foreground">
                {t.posts}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* suggested creators */}
      <div>
        <h3 className="mb-3 text-sm font-semibold text-foreground">
          Creators to follow
        </h3>
        <div className="flex flex-col gap-3">
          {suggestedCreators.map((c) => (
            <div key={c.id} className="flex items-center gap-3">
              <Image
                src={c.avatar || "/placeholder.svg"}
                alt={c.name}
                width={40}
                height={40}
                className="size-9 rounded-full object-cover ring-2 ring-border"
              />
              <div className="min-w-0 flex-1">
                <p className="flex items-center gap-1 truncate text-sm font-semibold text-foreground">
                  {c.handle}
                  {c.verified && (
                    <BadgeCheck
                      className="size-3.5 shrink-0 text-primary"
                      strokeWidth={2.5}
                    />
                  )}
                </p>
                <p className="truncate text-xs text-muted-foreground">
                  {c.followers} followers
                </p>
              </div>
              <button className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-auto text-xs leading-relaxed text-muted-foreground/70">
        AIGram · The home for AI creators. Prompts, models & params shared
        openly. © 2026
      </p>
    </aside>
  )
}
