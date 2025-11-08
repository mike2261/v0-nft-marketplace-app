"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ShoppingBag, User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-card border-b border-border/40 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Link href="/" className="flex items-center gap-2">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            NFT Market
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/marketplace" className="hover:text-primary transition">
            Marketplace
          </Link>
          <Link href="/dashboard" className="hover:text-primary transition">
            Dashboard
          </Link>
          <a href="#" className="hover:text-primary transition">
            About
          </a>
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative p-2 hover:bg-muted rounded-lg transition"
          >
            <ShoppingBag size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-accent rounded-full" />
          </motion.button>
          <Button size="sm" className="gap-2">
            <User size={16} />
            Connect Wallet
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 hover:bg-muted rounded-lg transition"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border/40 bg-card"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
            <Link
              href="/marketplace"
              className="block py-2 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              href="/dashboard"
              className="block py-2 hover:text-primary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <a href="#" className="block py-2 hover:text-primary transition">
              About
            </a>
            <div className="flex gap-2 pt-2 border-t border-border/40">
              <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                Cart
              </Button>
              <Button size="sm" className="flex-1 gap-2">
                <User size={16} />
                Connect
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}
