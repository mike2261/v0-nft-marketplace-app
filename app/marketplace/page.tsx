"use client"

import { Navbar } from "@/components/navbar"
import { NFTGrid } from "@/components/nft-grid"
import { FilterSidebar } from "@/components/filter-sidebar"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Filter, Search } from "lucide-react"
import { useState } from "react"

export default function MarketplacePage() {
  const [showFilters, setShowFilters] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <FilterSidebar onClose={() => setShowFilters(false)} />
        </div>

        {/* Mobile Sidebar Overlay */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowFilters(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden"
          />
        )}

        {/* Mobile Sidebar */}
        {showFilters && (
          <div className="fixed inset-0 z-50 lg:hidden">
            <FilterSidebar onClose={() => setShowFilters(false)} />
          </div>
        )}

        {/* Main Content */}
        <div className="flex-1">
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-12 px-4 border-b border-border/40"
          >
            <div className="max-w-7xl mx-auto">
              <h1 className="text-4xl font-bold mb-8">Marketplace</h1>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 text-muted-foreground" size={20} />
                  <Input
                    placeholder="Search NFTs..."
                    className="pl-10 h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 bg-transparent lg:hidden"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <Filter size={20} />
                  {showFilters ? "Hide Filters" : "Filters"}
                </Button>
              </div>
            </div>
          </motion.section>

          <NFTGrid />
        </div>
      </div>
    </main>
  )
}
