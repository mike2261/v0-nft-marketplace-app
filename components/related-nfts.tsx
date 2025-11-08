"use client"

import { motion } from "framer-motion"
import { NFTCard } from "./nft-card"

const relatedNFTs = [
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
    id: "5",
    title: "Neural Pathways #089",
    creator: "AI Artistry",
    price: 4.2,
    image: "/neural-network-ai-nft.jpg",
    views: 3204,
  },
]

export function RelatedNFTs() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-8"
        >
          Related NFTs
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedNFTs.map((nft) => (
            <NFTCard key={nft.id} {...nft} />
          ))}
        </div>
      </div>
    </section>
  )
}
