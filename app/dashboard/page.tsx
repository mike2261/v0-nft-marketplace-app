"use client"

import { Navbar } from "@/components/navbar"
import { DashboardTabs } from "@/components/dashboard-tabs"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wallet, TrendingUp, ShoppingBag, Heart } from "lucide-react"

export default function DashboardPage() {
  const stats = [
    { icon: Wallet, label: "Total Value", value: "$12,450", change: "+8.2%" },
    { icon: TrendingUp, label: "Total Sales", value: "$45,200", change: "+12.5%" },
    { icon: ShoppingBag, label: "Items Owned", value: "24", change: "+2" },
    { icon: Heart, label: "Favorites", value: "156", change: "+23" },
  ]

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-bold mb-2">Dashboard</h1>
              <p className="text-muted-foreground">Welcome back! Here's your portfolio overview.</p>
            </div>
            <Button>Edit Profile</Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ translateY: -4 }}
                >
                  <Card className="p-6 bg-card border border-border/40 hover:border-primary/40 transition">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <span className="text-xs font-semibold text-accent">{stat.change}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Card className="bg-card border border-border/40 p-6">
              <DashboardTabs />
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </main>
  )
}
