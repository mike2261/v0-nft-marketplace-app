"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto px-4 text-center z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent"
        >
          Discover & Collect
          <br />
          Digital Masterpieces
        </motion.h1>

        <motion.p variants={itemVariants} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Explore curated NFT collections from leading creators. Secure, transparent, and instant transactions on the
          blockchain.
        </motion.p>

        <motion.div variants={itemVariants} className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" className="gap-2">
            Explore Now
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </motion.div>

        <motion.div variants={itemVariants} className="mt-16 grid grid-cols-3 gap-8 text-center">
          {[
            { label: "10K+", desc: "NFT Collections" },
            { label: "$50M+", desc: "Trading Volume" },
            { label: "25K+", desc: "Active Members" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-card/50 border border-border/40 rounded-xl p-6 backdrop-blur-sm"
            >
              <p className="text-2xl md:text-3xl font-bold text-primary">{stat.label}</p>
              <p className="text-sm text-muted-foreground mt-2">{stat.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
        }}
        transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
      />
    </section>
  )
}
