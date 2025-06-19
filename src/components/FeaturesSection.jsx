import { useState, useEffect } from "react"
import { BarChart3, LineChart, Users, Clock } from "lucide-react"
import { Card,CardContent } from "./ui/card"
import { cn } from "../lib/utils"
import { AnimatePresence, motion } from "framer-motion"

const tabs = [
  {
    key: "analytics",
    label: "Analytics",
    icon: BarChart3,
    title: "Advanced Analytics Suite",
    description: "Comprehensive data analysis tools with real-time insights and customizable dashboards.",
    features: ["Real-time data processing", "Custom visualizations", "Automated reporting"],
    image: "./Dummy.png",
  },
  {
    key: "forecasting",
    label: "Forecasting",
    icon: LineChart,
    title: "Forecasting Engine",
    description: "Predict trends with AI-powered forecasting models and intelligent insights.",
    features: ["Predictive modeling", "Historical data analysis", "Scenario simulation"],
    image: "./Dummy2.png",
  },
  {
    key: "collaboration",
    label: "Collaboration",
    icon: Users,
    title: "Team Collaboration Tools",
    description: "Work seamlessly across teams with integrated communication and task tracking.",
    features: ["Shared dashboards", "Comment threads", "Team access control"],
    image: "./Dummy3.png",
  },
  {
    key: "visualization",
    label: "Visualization",
    icon: Clock,
    title: "Data Visualization Tools",
    description: "Build impactful visuals with drag-and-drop charts and graphs.",
    features: ["Interactive charts", "Theme customization", "Export options"],
    image: "./Dummy2.png",
  },
]

export default function FeaturesSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const activeTab = tabs[activeIndex]

  return (
    <section id="gallery" className="py-20 font-poppins bg-background">
      <div className="container mx-auto px-4">
        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">
          {tabs.map((tab, index) => (
            <button
              key={tab.key}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex items-center space-x-2 px-4 py-2 border rounded-full text-sm transition-all",
                activeIndex === index
                ? "bg-white text-black font-semibold shadow-md"
                : "bg-muted text-muted-foreground border border-border hover:bg-muted/60"
              )}
            >
              <tab.icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content with animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab.key}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="grid md:grid-cols-2 gap-6 items-center p-6">
              <CardContent className="space-y-4">
                <h3 className="text-2xl font-semibold">{activeTab.title}</h3>
                <p className="text-muted-foreground">{activeTab.description}</p>
                <ul className="list-disc ml-6 space-y-1 text-muted-foreground">
                  {activeTab.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>
              </CardContent>
               
              {/* Media Placeholder */}
              <div className="w-full h-64 rounded-xl bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center border border-dashed border-border">
               <img
                  src={activeTab.image}
                  alt={activeTab.title}
                  className="w-full h-full object-cover rounded-xl"
                  />
              </div>

            </Card>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
