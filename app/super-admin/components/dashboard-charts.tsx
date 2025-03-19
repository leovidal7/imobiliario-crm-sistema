"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import dynamic from "next/dynamic"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

// Importação dinâmica do ApexCharts para evitar erros de SSR
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false })

export function TenantGrowthChart() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: isDark ? "#CBD5E1" : "#475569",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
      curve: "smooth",
    },
    grid: {
      borderColor: isDark ? "#334155" : "#E2E8F0",
      strokeDashArray: 5,
    },
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      axisBorder: {
        color: isDark ? "#334155" : "#E2E8F0",
      },
      axisTicks: {
        color: isDark ? "#334155" : "#E2E8F0",
      },
    },
    yaxis: {
      labels: {
        formatter: function (val: number) {
          return val.toFixed(0)
        },
      },
    },
    tooltip: {
      theme: isDark ? "dark" : "light",
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    colors: ["#3B82F6", "#10B981", "#F59E0B"],
  }

  const chartSeries = [
    {
      name: "Imobiliárias",
      data: [30, 40, 45, 50, 49, 60, 70, 91, 125, 150, 180, 210],
    },
    {
      name: "Corretores",
      data: [120, 150, 180, 220, 250, 300, 340, 380, 450, 520, 600, 700],
    },
  ]

  if (!mounted) return <div className="h-80 w-full bg-muted/30 animate-pulse rounded-lg" />

  return (
    <Card>
      <CardHeader>
        <CardTitle>Crescimento de Usuários</CardTitle>
        <CardDescription>Novos cadastros por mês no último ano</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          {mounted && (
            <Chart
              options={chartOptions as any}
              series={chartSeries}
              type="line"
              height="100%"
              width="100%"
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}

export function RevenueTrendsChart() {
  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()
  const isDark = theme === "dark"

  useEffect(() => {
    setMounted(true)
  }, [])

  const chartOptions = {
    chart: {
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
      foreColor: isDark ? "#CBD5E1" : "#475569",
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 4,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    grid: {
      borderColor: isDark ? "#334155" : "#E2E8F0",
      strokeDashArray: 5,
    },
    xaxis: {
      categories: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
      axisBorder: {
        color: isDark ? "#334155" : "#E2E8F0",
      },
      axisTicks: {
        color: isDark ? "#334155" : "#E2E8F0",
      },
    },
    yaxis: {
      labels: {
        formatter: function (value: number) {
          return "R$ " + value.toLocaleString("pt-BR")
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      theme: isDark ? "dark" : "light",
      y: {
        formatter: function (value: number) {
          return "R$ " + value.toLocaleString("pt-BR")
        },
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },
    colors: ["#3B82F6", "#10B981", "#F59E0B"],
  }

  const chartSeries = [
    {
      name: "Assinaturas Básicas",
      data: [44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000, 68000, 78000, 85000],
    },
    {
      name: "Assinaturas Profissionais",
      data: [76000, 85000, 101000, 98000, 87000, 105000, 91000, 114000, 94000, 105000, 120000, 135000],
    },
    {
      name: "Assinaturas Empresariais",
      data: [35000, 41000, 36000, 26000, 45000, 48000, 52000, 53000, 41000, 55000, 58000, 62000],
    },
  ]

  if (!mounted) return <div className="h-80 w-full bg-muted/30 animate-pulse rounded-lg" />

  return (
    <Card>
      <CardHeader>
        <CardTitle>Tendências de Receita</CardTitle>
        <CardDescription>Receita por tipo de assinatura no último ano</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          {mounted && (
            <Chart
              options={chartOptions as any}
              series={chartSeries}
              type="bar"
              height="100%"
              width="100%"
            />
          )}
        </div>
      </CardContent>
    </Card>
  )
}