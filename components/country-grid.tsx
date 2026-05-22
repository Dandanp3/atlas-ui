"use client"

import { AnimatePresence } from "framer-motion"
import { Country } from "@/types/country"
import { AlertCircle, SearchX} from "lucide-react"
import { div } from "framer-motion/client"

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
                
            </div>
        )
    }
}