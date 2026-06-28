import { Sidebar } from "@/components/sidebar"
import { MobileTopbar } from "@/components/mobile-topbar"
import { MobileNav } from "@/components/mobile-nav"
import { Feed } from "@/components/feed"
import { RightRail } from "@/components/right-rail"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <MobileTopbar />
      <div className="mx-auto flex w-full max-w-[1400px]">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <Feed />
        </main>
        <RightRail />
      </div>
      <MobileNav />
    </div>
  )
}
