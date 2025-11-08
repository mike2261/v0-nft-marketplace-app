"use client"

import { motion } from "framer-motion"
import { Heart, Eye } from "lucide-react"
import Link from "next/link"

interface NFTCardProps {
  id: string
  title: string
  creator: string
  price: number
  image: string
  likes?: number
  views?: number
}

export function NFTCard({ id, title, creator, price, image, likes = 0, views = 0 }: NFTCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
    >
      <Link href={`/nft/${id}`}>
        <div className="group bg-card border border-border/40 rounded-xl overflow-hidden hover:border-primary/40 transition cursor-pointer">
          {/* Image Container */}
          <div className="relative h-64 bg-muted overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />

            {/* Stats overlay */}
            <div className="absolute top-4 right-4 flex gap-3 opacity-0 group-hover:opacity-100 transition">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card/80 backdrop-blur-sm p-2 rounded-lg hover:bg-primary/20 transition"
              >
                <Heart size={16} />
              </motion.button>
            </div>

            {/* View count */}
            <div className="absolute bottom-4 left-4 flex items-center gap-1 text-xs text-white bg-black/40 backdrop-blur-sm px-3 py-1 rounded-full">
              <Eye size={12} />
              {views.toLocaleString()}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-xs text-muted-foreground mb-2 uppercase tracking-wide">{creator}</p>
            <h3 className="font-semibold mb-3 line-clamp-2 group-hover:text-primary transition">{title}</h3>

            {/* Price */}
            <div className="flex justify-between items-center pt-3 border-t border-border/40">
              <div>
                <p className="text-xs text-muted-foreground">Current Price</p>
                <p className="text-lg font-bold text-primary">{price} SUI</p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition"
              >
                Buy
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
