"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ShoppingBag, Upload, Heart } from "lucide-react"

export function DashboardTabs() {
  const myCollection = [
    {
      id: "1",
      title: "Ethereal Dreams #001",
      price: 2.5,
      image: "/ethereal-digital-art-nft.jpg",
      rarity: "Rare",
    },
    {
      id: "2",
      title: "Cyber Genesis #042",
      price: 3.8,
      image: "/cyberpunk-nft-artwork.jpg",
      rarity: "Epic",
    },
    {
      id: "3",
      title: "Abstract Harmony #007",
      price: 1.9,
      image: "/abstract-colorful-nft.jpg",
      rarity: "Common",
    },
  ]

  const activity = [
    { type: "sale", title: "Sold Ethereal Dreams #001", price: 2.5, date: "2 hours ago" },
    { type: "purchase", title: "Bought Cyber Genesis #042", price: 3.8, date: "1 day ago" },
    { type: "bid", title: "Placed bid on Neural Pathways #089", price: 4.0, date: "3 days ago" },
    { type: "like", title: "Added Cosmic Voyage #023 to favorites", price: 2.7, date: "5 days ago" },
  ]

  return (
    <Tabs defaultValue="collection" className="w-full">
      <TabsList className="grid w-full grid-cols-4 bg-muted">
        <TabsTrigger value="collection">Collection</TabsTrigger>
        <TabsTrigger value="activity">Activity</TabsTrigger>
        <TabsTrigger value="favorites">Favorites</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>

      {/* Collection Tab */}
      <TabsContent value="collection" className="space-y-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {myCollection.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Card className="bg-card border border-border/40 overflow-hidden hover:border-primary/40 transition">
                  <div className="relative h-48 bg-muted overflow-hidden">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition"
                    />
                    <div className="absolute top-3 right-3 bg-primary/80 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      {item.rarity}
                    </div>
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-sm mb-2">{item.title}</p>
                    <p className="text-lg font-bold text-primary">{item.price} SUI</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </TabsContent>

      {/* Activity Tab */}
      <TabsContent value="activity" className="space-y-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {activity.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 p-4 bg-card border border-border/40 rounded-lg hover:border-primary/40 transition"
            >
              <div className="p-2 bg-primary/10 rounded-lg">
                {item.type === "sale" && <ShoppingBag size={20} className="text-accent" />}
                {item.type === "purchase" && <ShoppingBag size={20} className="text-primary" />}
                {item.type === "bid" && <Upload size={20} className="text-muted-foreground" />}
                {item.type === "like" && <Heart size={20} className="text-accent" />}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.date}</p>
              </div>
              <p className="font-bold text-primary">{item.price} SUI</p>
            </motion.div>
          ))}
        </motion.div>
      </TabsContent>

      {/* Favorites Tab */}
      <TabsContent value="favorites" className="space-y-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p className="text-muted-foreground text-center py-12">
            No favorites added yet. Start exploring and save your favorite NFTs!
          </p>
        </motion.div>
      </TabsContent>

      {/* Settings Tab */}
      <TabsContent value="settings" className="space-y-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Card className="bg-card border border-border/40 p-6">
            <h3 className="text-lg font-bold mb-4">Account Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold">Wallet Address</label>
                <p className="text-muted-foreground text-sm">0x1234...5678</p>
              </div>
              <div>
                <label className="text-sm font-semibold">Email Notifications</label>
                <p className="text-muted-foreground text-sm">Receive updates on bids and sales</p>
              </div>
            </div>
          </Card>
        </motion.div>
      </TabsContent>
    </Tabs>
  )
}
