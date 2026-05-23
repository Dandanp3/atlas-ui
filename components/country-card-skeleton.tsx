"use client"

import { motion } from "framer-motion"

export function CountryCardSkeleton({ index }: { index: number}) {
    return (
        <motion.div>
            <div className="h-40 w-full bg-muted animate-pulse"/>
            <div className="p-5 space-y-3">
                <div className="h-5 w-3/4 bg-muted rounded animate-pulse"/>
                <div className="space-y-2">
                    <div className="h-4 w-full bg-muted rounded animate-pulse"/>
                    <div className="h-4 w-2/3 bg-muted rounded animate-pulse"/>
                    <div className="h-4 w-1/2 bg-muted rounded animate-pulse"/>
                </div>
            </div>
        </motion.div>
    )
}