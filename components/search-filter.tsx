"use client"

import { Search, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"

const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

interface SearchFilterProps {
  search: string
  onSearchChange: (value: string) => void
  region: string
  onRegionChange: (value: string) => void
}

export function SearchFilter({
  search,
  onSearchChange,
  region,
  onRegionChange,
}: SearchFilterProps) {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
    >
      <div className="relative w-full sm:max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Buscar país..."
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 h-11 sm:h-12 shadow-sm"
        />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="h-11 sm:h-12 w-full sm:w-[200px] justify-between shadow-sm cursor-pointer"
          >
            {region || "Filtrar por Região"}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]">
          <DropdownMenuItem onClick={() => onRegionChange("")} className="cursor-pointer">
            Todas as Regiões
          </DropdownMenuItem>
          {regions.map((r) => (
            <DropdownMenuItem key={r} onClick={() => onRegionChange(r)} className="cursor-pointer">
              {r}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </motion.div>
  )
}
