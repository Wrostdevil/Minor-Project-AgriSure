import { Outlet, Link, useLocation } from "react-router-dom";
import { Header } from "./Header";
import { ChatWidget } from "../misc/ChatWidget";

export function Layout() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* Floating chat widget visible on all routes except assistant (has full chat) */}
      {location.pathname !== "/assistant" && <ChatWidget />}
      <footer className="border-t bg-muted/30">
        <div className="container py-8 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} AgriSure. All rights reserved.</p>
          <nav className="flex items-center gap-4">
            <a className="hover:text-foreground" href="/">
              Home
            </a>
            <a className="hover:text-foreground" href="/weather">
              Weather
            </a>
            <a className="hover:text-foreground" href="/assistant">
              Assistant
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}
