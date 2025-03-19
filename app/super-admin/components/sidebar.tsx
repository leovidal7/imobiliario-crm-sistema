"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { 
  BarChart3, 
  Building2, 
  CreditCard, 
  HelpCircle, 
  Home, 
  LucideIcon, 
  Settings, 
  Users 
} from "lucide-react"

interface NavItem {
  title: string
  href: string
  icon: LucideIcon
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/super-admin",
    icon: Home,
  },
  {
    title: "Imobiliárias",
    href: "/super-admin/tenants",
    icon: Building2,
  },
  {
    title: "Usuários",
    href: "/super-admin/users",
    icon: Users,
  },
  {
    title: "Assinaturas",
    href: "/super-admin/subscriptions",
    icon: CreditCard,
  },
  {
    title: "Relatórios",
    href: "/super-admin/reports",
    icon: BarChart3,
  },
  {
    title: "Configurações",
    href: "/super-admin/settings",
    icon: Settings,
  },
  {
    title: "Suporte",
    href: "/super-admin/support",
    icon: HelpCircle,
  },
]

interface SidebarProps {
  open: boolean
}

export function Sidebar({ open }: SidebarProps) {
  const pathname = usePathname()

  return (
    <div
      className={cn(
        "fixed inset-y-0 z-20 flex h-full flex-col border-r bg-background transition-all duration-300 md:relative",
        open ? "w-64" : "w-[70px]"
      )}
    >
      <div className="flex h-14 items-center border-b px-3">
        <Link
          href="/super-admin"
          className={cn(
            "flex items-center gap-2 font-semibold",
            !open && "justify-center"
          )}
        >
          {open ? (
            <span className="text-lg">CRM Imobiliário</span>
          ) : (
            <span className="text-xl">CRM</span>
          )}
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="grid items-start px-2 text-sm">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground",
                pathname === item.href &&
                  "bg-accent text-accent-foreground hover:bg-accent hover:text-accent-foreground",
                !open && "justify-center"
              )}
            >
              <item.icon className="h-5 w-5" />
              {open && <span>{item.title}</span>}
            </Link>
          ))}
        </nav>
      </div>
      <div className="mt-auto border-t p-3">
        <div
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground",
            !open && "justify-center"
          )}
        >
          <div className="h-7 w-7 rounded-full bg-primary/20" />
          {open && (
            <div>
              <p className="text-xs font-medium leading-none">Super Admin</p>
              <p className="text-xs leading-none text-muted-foreground">
                admin@sistema.com
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}