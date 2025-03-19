import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RevenueTrendsChart, TenantGrowthChart } from "./components/dashboard-charts"
import { ArrowUpRight, Building2, UserRound, Wallet } from "lucide-react"

export default function SuperAdminDashboard() {
  return (
    <div className="flex-1 space-y-6 p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard Administrativo</h1>
        <div className="flex items-center gap-2">
          <Link
            href="/super-admin/tenants"
            className="flex items-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Nova Imobiliária
          </Link>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Imobiliárias Ativas</CardTitle>
            <Building2 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">210</div>
            <div className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center gap-0.5">
                +12% <ArrowUpRight className="h-3 w-3" />
              </span>{" "}
              em relação ao mês anterior
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Usuários Ativos</CardTitle>
            <UserRound className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,345</div>
            <div className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center gap-0.5">
                +5.2% <ArrowUpRight className="h-3 w-3" />
              </span>{" "}
              em relação ao mês anterior
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Receita Mensal</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 284.500</div>
            <div className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center gap-0.5">
                +8.1% <ArrowUpRight className="h-3 w-3" />
              </span>{" "}
              em relação ao mês anterior
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Ticket Médio</CardTitle>
            <Wallet className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 1.350</div>
            <div className="text-xs text-muted-foreground">
              <span className="text-emerald-500 flex items-center gap-0.5">
                +2.5% <ArrowUpRight className="h-3 w-3" />
              </span>{" "}
              em relação ao mês anterior
            </div>
          </CardContent>
        </Card>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <TenantGrowthChart />
        <RevenueTrendsChart />
      </div>
      
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Atividades Recentes</CardTitle>
            <CardDescription>Últimas atividades no sistema</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-start gap-4 rounded-lg border p-3">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Nova imobiliária cadastrada: Imobiliária Exemplo {i}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      há {i} {i === 1 ? "hora" : "horas"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Alertas do Sistema</CardTitle>
            <CardDescription>Problemas e notificações importantes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 rounded-lg border border-yellow-200 bg-yellow-50 p-3 dark:border-yellow-900 dark:bg-yellow-950">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Uso de CPU elevado</p>
                  <p className="text-sm text-muted-foreground">
                    O servidor está operando com 89% de uso de CPU
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-red-200 bg-red-50 p-3 dark:border-red-900 dark:bg-red-950">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Falha na sincronização de dados</p>
                  <p className="text-sm text-muted-foreground">
                    A última sincronização de dados falhou em 3 locatários
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-lg border border-green-200 bg-green-50 p-3 dark:border-green-900 dark:bg-green-950">
                <div className="space-y-1">
                  <p className="text-sm font-medium leading-none">Backup completo</p>
                  <p className="text-sm text-muted-foreground">
                    Backup diário concluído com sucesso
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}