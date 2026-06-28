import { posts } from "@/lib/data"
import { DropsRow } from "@/components/drops-row"
import { PostCard } from "@/components/post-card"

export function Feed() {
  return (
    <div className="mx-auto w-full max-w-[600px]">
      <div className="hidden items-center justify-between px-4 py-5 lg:flex">
        <h1 className="font-heading text-2xl font-semibold tracking-tight text-foreground">
          Your feed
        </h1>
        <div className="flex items-center gap-1 rounded-full border border-border bg-card p-1 text-sm">
          <button className="rounded-full bg-secondary px-3.5 py-1.5 font-medium text-foreground">
            Following
          </button>
          <button className="rounded-full px-3.5 py-1.5 font-medium text-muted-foreground transition-colors hover:text-foreground">
            For you
          </button>
        </div>
      </div>

      <DropsRow />

      <div className="flex flex-col gap-5 px-0 pb-24 pt-5 sm:px-4 lg:pb-12">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}
