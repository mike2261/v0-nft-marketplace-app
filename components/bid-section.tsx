"use client"

import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface BidSectionProps {
  currentPrice: number
}

export function BidSection({ currentPrice }: BidSectionProps) {
  const [bidAmount, setBidAmount] = useState(currentPrice.toString())
  const [bids, setBids] = useState([
    { bidder: "0x5678...9abc", amount: 2.8, date: "2 hours ago" },
    { bidder: "0x1234...def0", amount: 2.4, date: "1 day ago" },
  ])

  const handlePlaceBid = () => {
    if (Number.parseFloat(bidAmount) > currentPrice) {
      const newBid = {
        bidder: "You (0x1234...5678)",
        amount: Number.parseFloat(bidAmount),
        date: "just now",
      }
      setBids([newBid, ...bids])
      setBidAmount(currentPrice.toString())
    }
  }

  return (
    <div className="bg-card border border-border/40 rounded-xl p-6 space-y-6">
      <h3 className="text-xl font-bold">Place a Bid</h3>

      <div className="space-y-3">
        <label htmlFor="bid" className="text-sm text-muted-foreground">
          Your Bid Amount
        </label>
        <div className="flex gap-2">
          <div className="flex-1 relative">
            <Input
              id="bid"
              type="number"
              min={currentPrice}
              step="0.1"
              value={bidAmount}
              onChange={(e) => setBidAmount(e.target.value)}
              placeholder="Enter bid amount"
              className="pr-12"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">SUI</span>
          </div>
          <Button onClick={handlePlaceBid} className="px-6">
            Bid
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">Minimum: {currentPrice} SUI (current price)</p>
      </div>

      {/* Recent Bids */}
      <div className="border-t border-border/40 pt-6">
        <h4 className="font-semibold mb-4 text-sm">Recent Bids</h4>
        <div className="space-y-3">
          {bids.map((bid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex justify-between items-center pb-3 border-b border-border/20 last:border-0 last:pb-0"
            >
              <div>
                <p className="text-sm font-semibold text-primary">{bid.amount} SUI</p>
                <p className="text-xs text-muted-foreground">{bid.bidder}</p>
              </div>
              <p className="text-xs text-muted-foreground">{bid.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
