"use client"

import { motion } from "framer-motion"
import { NFTCard } from "./nft-card"

const mockNFTs = [
  {
    id: "1",
    title: "Ethereal Dreams #001",
    creator: "Luna Studios",
    price: 2.5,
    image: "/ethereal-digital-art-nft.jpg",
    views: 1240,
  },
  {
    id: "2",
    title: "Cyber Genesis #042",
    creator: "Digital Collective",
    price: 3.8,
    image: "/cyberpunk-nft-artwork.jpg",
    views: 2103,
  },
  {
    id: "3",
    title: "Abstract Harmony #007",
    creator: "Color Theory",
    price: 1.9,
    image: "/abstract-colorful-nft.jpg",
    views: 856,
  },
  {
    id: "4",
    title: "Pixel Paradise #156",
    creator: "Retro Wave",
    price: 2.1,
    image: "/pixel-art-nft.png",
    views: 1567,
  },
  {
    id: "5",
    title: "Neural Pathways #089",
    creator: "AI Artistry",
    price: 4.2,
    image: "/neural-network-ai-nft.jpg",
    views: 3204,
  },
  {
    id: "6",
    title: "Cosmic Voyage #023",
    creator: "Space Collective",
    price: 2.7,
    image: "/cosmic-space-nft.jpg",
    views: 1892,
  },
]

interface NFTGridProps {
  title?: string
  limit?: number
}

export function NFTGrid({ title, limit }: NFTGridProps) {
  const nfts = limit ? mockNFTs.slice(0, limit) : mockNFTs

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
            <p className="text-muted-foreground">Curated digital assets from top creators</p>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {nfts.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </section>
  )
}
