"use client"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { NFTGrid } from "@/components/nft-grid"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <HeroSection />

      {/* Featured Section */}
      <NFTGrid title="Featured Collections" limit={6} />

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Create Your First NFT</h2>
          <p className="text-muted-foreground mb-8">
            Ready to showcase your digital art? Join thousands of creators minting on our platform.
          </p>
          <Button size="lg">Start Creating</Button>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {[
              {
                title: "Product",
                links: ["Explore", "Create", "Manage"],
              },
              {
                title: "Community",
                links: ["Discord", "Twitter", "Instagram"],
              },
              {
                title: "Resources",
                links: ["Docs", "FAQ", "Blog"],
              },
              {
                title: "Legal",
                links: ["Terms", "Privacy", "Contact"],
              },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="font-semibold mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link, lidx) => (
                    <li key={lidx}>
                      <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 NFT Marketplace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
