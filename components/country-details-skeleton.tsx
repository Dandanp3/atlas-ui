"use client"

import { motion } from "framer-motion"

export function CountryDetailsSkeleton() {
  return (
    <div>
      <div className="h-10 w-28 bg-muted rounded-lg animate-pulse mb-12" />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="aspect-[3/2] w-full bg-muted rounded-xl animate-pulse"
        />

        <div>
          <div className="h-9 w-2/3 bg-muted rounded animate-pulse mb-8" />

          <div className="grid gap-8 sm:grid-cols-2 mb-12">
            <div className="space-y-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div
                  key={i}
                  className="h-5 bg-muted rounded animate-pulse"
                  style={{ width: `${70 + Math.random() * 30}%` }}
                />
              ))}
            </div>
            <div className="space-y-3">
              {Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="h-5 bg-muted rounded animate-pulse"
                  style={{ width: `${70 + Math.random() * 30}%` }}
                />
              ))}
            </div>
          </div>

          <div className="h-5 w-40 bg-muted rounded animate-pulse mb-4" />
          <div className="flex flex-wrap gap-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="h-8 w-24 bg-muted rounded animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
