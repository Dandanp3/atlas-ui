"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Country } from "@/types/country"
import { CountryCardSkeleton } from "./country-card-skeleton"
import { AlertCircle, SearchX} from "lucide-react"
import { CountryCard } from "./country-card"

interface CountryGridProps {
    countries: Country[]
    isLoading: boolean
    error?: string | null
}

export function CountryGrid({ countries, isLoading, error} : CountryGridProps) {
    if (error) {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1}}
                className="flex flex-col items-center justify-center py-20 text-center"
            >
                <AlertCircle/>
                <h3 className="text-xl font-semibold mb-2">Erro ao carregar países</h3>
                <p className="text-muted-foreground">{error}</p>
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
                <h3 className="text-xl font-semibold mb-2">Nenhum país encontrado</h3>
                <p className="text-muted-foreground">Tente ajustar sua busca ou filtro de região</p>
            </motion.div>
        )
    }

    return (
        <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8"
        >
            <AnimatePresence mode="popLayout">
                {countries.map((country, index) => (
                    <CountryCard
                    key={country.cca3}
                    country={country}
                    index={index % 12}
                    />
                ))}
            </AnimatePresence>
        </motion.div>
    )
}