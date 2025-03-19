"use client"

import { useState } from "react"
import Link from "next/link"
import { MoonIcon, SunIcon } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface HeaderProps {
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

export function Header({ sidebarOpen, setSidebarOpen }: HeaderProps) {
  const { setTheme, theme } = useTheme()
  const [showNotifications, setShowNotifications] = useState(false)
  
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:px-6">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="inline-flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground hover:text-foreground"
      >
        <span className="sr-only">Toggle Menu</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn(
            "transition-all",
            sidebarOpen ? "rotate-90 transform" : ""
          )}
        >
          <line x1="18" x2="6" y1="6" y2="18" />
          <line x1="6" x2="18" y1="6" y2="18" />
        </svg>
      </button>
      <div className="w-full">
        <div className="flex items-center justify-end gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                {theme === "dark" ? (
                  <SunIcon className="h-5 w-5" />
                ) : (
                  <MoonIcon className="h-5 w-5" />
                )}
                <span className="sr-only">Alternar tema</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Claro
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Escuro
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                Sistema
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <button 
            className="relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">
              3
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-foreground"
            >
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
            </svg>
          </button>
          
          <div
            className={cn(
              "absolute right-4 top-14 z-50 mt-1 w-80 rounded-md border bg-background p-2 shadow-md",
              showNotifications ? "block" : "hidden"
            )}
          >
            <div className="flex items-center justify-between border-b pb-2">
              <h3 className="font-medium">Notificações</h3>
              <button className="text-xs text-muted-foreground hover:text-foreground">
                Marcar todas como lidas
              </button>
            </div>
            <div className="max-h-[320px] overflow-auto py-2">
              {[1, 2, 3].map((notification) => (
                <div
                  key={notification}
                  className="mb-2 rounded-md bg-accent/50 p-3 text-sm"
                >
                  <p className="font-medium">Nova imobiliária cadastrada</p>
                  <p className="text-xs text-muted-foreground">há 5 minutos</p>
                </div>
              ))}
            </div>
            <div className="border-t pt-2">
              <Link
                href="/super-admin/notifications"
                className="block text-center text-xs text-muted-foreground hover:text-foreground"
              >
                Ver todas as notificações
              </Link>
            </div>
          </div>

          <div className="relative flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary/20" />
            <span className="hidden text-sm font-medium md:block">
              Super Admin
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}