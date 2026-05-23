"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Country } from "@/types/country"
import { CountryCardSkeleton } from "./country-card-skeleton"
import { AlertCircle, SearchX} from "lucide-react"
import { div } from "framer-motion/client"
import { count } from "console"

interface CountryGridProps {
    countries: Country[]
    isLoading: boolean
    error?: string | null
}

export function CountryGrid({ countries, isLoading, error} : CountryGridProps) {
    if (error) {
        return (
            <motion.div>
                <AlertCircle/>
                <h3>Erro ao carregar países</h3>
                <p>{error}</p>
            </motion.div>
        )
    }

    if (isLoading) {
        return (
            <div>
                {Array.from({ length: 12}).map((_, i) => (
                    <CountryCardSkeleton key={i} index={i}/>
                ))}
            </div>
        )
    }

    if (countries.length === 0) {
        return (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center"
            >
                <SearchX className="h-16 w-16 text-muted-foreground mb-5"/>
                <h3>Nenhum país encontrado</h3>
                <p>Tente ajustar sua busca ou filtro de região</p>
            </motion.div>
        )
    }

    return (
        <motion.div>
            <AnimatePresence>
            </AnimatePresence>
        </motion.div>
    )
}