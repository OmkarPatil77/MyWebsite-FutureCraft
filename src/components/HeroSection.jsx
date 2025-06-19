import { motion } from "framer-motion"
import { ArrowDown, Star, TrendingUp, Users, Zap } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

export function HeroSection() {
  const floatingElements = [
    { icon: TrendingUp, label: "Analytics", x: "10%", y: "20%", delay: 0 },
    { icon: Users, label: "Team", x: "85%", y: "15%", delay: 0.2 },
    { icon: Zap, label: "Performance", x: "15%", y: "70%", delay: 0.4 },
    { icon: Star, label: "Quality", x: "80%", y: "75%", delay: 0.6 },
  ]

  return (
    <section id="home" className="relative min-h-screen flex font-poppins items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />

      {/* Floating Elements */}
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute hidden lg:block"
          style={{ left: element.x, top: element.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 0.8,
            delay: element.delay,
            y: {
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
          }}
        >
          <Card className="p-3 bg-background/20 backdrop-blur-md border-border/50 hover:bg-background/30 transition-all duration-300">
            <div className="flex items-center space-x-2">
              <element.icon className="h-4 w-4 text-blue-400" />
              <span className="text-sm font-medium">{element.label}</span>
            </div>
          </Card>
        </motion.div>
      ))}

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Trust Badges */}
        <motion.div
          className="flex justify-center space-x-4 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="secondary" className="bg-background/20 backdrop-blur-md">
            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
            4.8 on G2
          </Badge>
          <Badge variant="secondary" className="bg-background/20 backdrop-blur-md">
            <Star className="h-3 w-3 mr-1 fill-yellow-400 text-yellow-400" />
            4.9 on Capterra
          </Badge>
        </motion.div>

        {/* AI Badge */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Badge className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 text-sm">
            <Zap className="h-3 w-3 mr-2" />
            Now with AI-Insights
          </Badge>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-400 to-purple-600 bg-clip-text text-transparent leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Create reports, forecasts,
          <br />
          dashboards & consolidations
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Transform your data into actionable insights with our cutting-edge platform
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 text-lg group relative overflow-hidden"
          >
            <span className="relative z-10">Start 14-day free trial</span>
            <motion.div
              className="absolute inset-0 bg-white/20 rounded-full scale-0 group-hover:scale-100"
              transition={{ duration: 0.3 }}
            />
          </Button>

          <Button
          variant="ghost"
          size="lg"
          className="text-lg text-white hover:text-primary transition-colors group"
          >
            See what we do
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform text-white group-hover:text-primary" />
            </Button>
        </motion.div>
      </div>
    </section>
  )
}
