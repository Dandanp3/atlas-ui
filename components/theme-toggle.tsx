"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()

    return(
        <Button
        variant='outline'
        size="icon"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="relative overflow-hidden cursor-pointer">
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180: 0}}
                transition={{ duration: 0.3, ease: "easeInOut"}}
            >
                <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"/>
                <Moon className="absolute top-1/2 left-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rotate-90 scale-0 transition-all dark:rotate-180 dark:scale-100"/>
            </motion.div>
            <span className="sr-only">Alterar Tema</span>
        </Button>
    )

}