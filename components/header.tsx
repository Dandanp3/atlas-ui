"use client"

import Link from "next/link"
import { Globe } from "lucide-react"
import { motion } from "framer-motion"
import { ThemeToggle } from "./theme-toggle"

export function Header() {
    return(
        <motion.header
            initial={{ y: -20, opacity: 0}}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
        >
            <div className="container px-4 sm:px-6 lg:px-8 flex h-14 sm:h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group cursor-pointer">
                    <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Globe className="h-6 w-6 text-primary"/>
                    </motion.div>
                    <span className="text-xl font-bold tracking-tight">
                        Atlas.ui
                    </span>
                </Link>
                <ThemeToggle/>
            </div>
        </motion.header>
    )
}