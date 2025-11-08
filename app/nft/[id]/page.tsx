"use client"

import { Navbar } from "@/components/navbar"
import { BidSection } from "@/components/bid-section"
import { RelatedNFTs } from "@/components/related-nfts"
import { motion } from "framer-motion"
import { ArrowLeft, Share2, Heart, Eye } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function NFTDetailPage({ params }: { params: { id: string } }) {
  const [liked, setLiked] = useState(false)

  const nft = {
    id: params.id,
    title: "Ethereal Dreams #001",
    creator: "Luna Studios",
    creatorAddress: "0x1234...5678",
    price: 2.5,
    image: "/ethereal-digital-art-nft.jpg",
    description:
      "A mesmerizing digital artwork blending ethereal landscapes with dreamlike elements. Created through advanced generative techniques and hand-crafted refinements.",
    views: 1240,
    likes: 342,
    blockchain: "Sui Network",
    contractAddress: "0xabcd...ef01",
    transactionHistory: [
      { from: "Luna Studios", to: "0x1234...5678", price: 2.5, date: "2025-01-15" },
      { from: "0x5678...9012", to: "Luna Studios", price: 2.0, date: "2025-01-10" },
    ],
  }

  return (
    <main className="bg-background min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back button */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <Link href="/marketplace" className="flex items-center gap-2 text-primary hover:gap-3 transition mb-8">
            <ArrowLeft size={20} />
            Back to Marketplace
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2"
          >
            <div className="bg-card border border-border/40 rounded-xl overflow-hidden">
              <img
                src={nft.image || "/placeholder.svg"}
                alt={nft.title}
                className="w-full aspect-square object-cover"
              />
            </div>
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="flex gap-4">
              <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-lg">
                <Eye size={16} className="text-muted-foreground" />
                <span className="text-sm">{nft.views} views</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setLiked(!liked)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${
                  liked ? "bg-accent/20 text-accent" : "bg-muted/50"
                }`}
              >
                <Heart size={16} fill={liked ? "currentColor" : "none"} />
                <span className="text-sm">{nft.likes}</span>
              </motion.button>
            </div>

            {/* Title and Creator */}
            <div>
              <h1 className="text-3xl font-bold mb-2">{nft.title}</h1>
              <p className="text-muted-foreground mb-4">Created by</p>
              <a href="#" className="flex items-center gap-3 hover:opacity-70 transition">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full" />
                <div>
                  <p className="font-semibold">{nft.creator}</p>
                  <p className="text-xs text-muted-foreground">{nft.creatorAddress}</p>
                </div>
              </a>
            </div>

            {/* Price Card */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-6">
              <p className="text-sm text-muted-foreground mb-2">Current Price</p>
              <p className="text-4xl font-bold text-primary mb-6">{nft.price} SUI</p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:bg-primary/90 transition"
              >
                Buy Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-3 border border-border rounded-lg py-3 font-semibold hover:bg-muted/50 transition flex items-center justify-center gap-2"
              >
                <Share2 size={18} />
                Share
              </motion.button>
            </div>

            <div className="bg-card border border-border/40 rounded-xl p-4 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Blockchain</span>
                <span className="font-semibold">{nft.blockchain}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Contract</span>
                <span className="font-mono text-xs">{nft.contractAddress}</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description and History */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-card border border-border/40 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground leading-relaxed">{nft.description}</p>
            </div>

            <div className="bg-card border border-border/40 rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">Transaction History</h2>
              <div className="space-y-4">
                {nft.transactionHistory.map((tx, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-l-2 border-primary/40 pl-4 text-sm"
                  >
                    <p className="text-muted-foreground">
                      {tx.from} → {tx.to}
                    </p>
                    <p className="font-semibold text-primary">{tx.price} SUI</p>
                    <p className="text-xs text-muted-foreground">{tx.date}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <BidSection currentPrice={nft.price} />
          </div>
        </motion.div>

        {/* Related NFTs Section */}
        <RelatedNFTs />
      </div>
    </main>
  )
}
