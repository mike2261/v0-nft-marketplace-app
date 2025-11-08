"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { X } from "lucide-react"
import { useState } from "react"

interface FilterSidebarProps {
  onFiltersChange?: (filters: FilterState) => void
  onClose?: () => void
}

interface FilterState {
  priceRange: [number, number]
  categories: string[]
  sortBy: string
}

export function FilterSidebar({ onFiltersChange, onClose }: FilterSidebarProps) {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [sortBy, setSortBy] = useState("newest")

  const categories = ["Art", "Gaming", "Photography", "Collectibles", "Music"]
  const sortOptions = [
    { value: "newest", label: "Newest" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "popular", label: "Most Popular" },
  ]

  const handleCategoryToggle = (category: string) => {
    const updated = selectedCategories.includes(category)
      ? selectedCategories.filter((c) => c !== category)
      : [...selectedCategories, category]
    setSelectedCategories(updated)
    onFiltersChange?.({ priceRange, categories: updated, sortBy })
  }

  const handlePriceChange = (value: [number, number]) => {
    setPriceRange(value)
    onFiltersChange?.({ priceRange: value, categories: selectedCategories, sortBy })
  }

  const handleSortChange = (value: string) => {
    setSortBy(value)
    onFiltersChange?.({ priceRange, categories: selectedCategories, sortBy: value })
  }

  return (
    <motion.aside
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="w-64 bg-card border-r border-border/40 p-6 h-screen overflow-y-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold">Filters</h3>
        <button onClick={onClose} className="lg:hidden p-1 hover:bg-muted rounded-lg transition">
          <X size={20} />
        </button>
      </div>

      {/* Sort By */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold mb-4 text-foreground">Sort By</h4>
        <div className="space-y-2">
          {sortOptions.map((option) => (
            <motion.button
              key={option.value}
              onClick={() => handleSortChange(option.value)}
              className={`w-full text-left px-3 py-2 rounded-lg text-sm transition ${
                sortBy === option.value ? "bg-primary text-primary-foreground" : "bg-muted hover:bg-muted/80"
              }`}
            >
              {option.label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold mb-4">Price Range</h4>
        <div className="space-y-4">
          <Slider value={priceRange} onValueChange={handlePriceChange} min={0} max={100} step={1} className="w-full" />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>{priceRange[0]} SUI</span>
            <span>{priceRange[1]} SUI</span>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold mb-4">Categories</h4>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-3">
              <Checkbox
                id={category}
                checked={selectedCategories.includes(category)}
                onCheckedChange={() => handleCategoryToggle(category)}
              />
              <Label htmlFor={category} className="cursor-pointer text-sm">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Reset Button */}
      <Button
        variant="outline"
        className="w-full bg-transparent"
        onClick={() => {
          setPriceRange([0, 100])
          setSelectedCategories([])
          setSortBy("newest")
          onFiltersChange?.({ priceRange: [0, 100], categories: [], sortBy: "newest" })
        }}
      >
        Reset Filters
      </Button>
    </motion.aside>
  )
}
