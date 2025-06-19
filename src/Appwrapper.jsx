"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import { Loader } from "./components/Loader"

export default function AppWrapper({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence mode="wait">
      {loading ? <Loader /> : children}
    </AnimatePresence>
  )
}
