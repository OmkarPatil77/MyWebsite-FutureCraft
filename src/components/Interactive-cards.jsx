
import { motion } from "framer-motion"
import { Card,CardContent } from "./ui/card"
import { Badge } from "./ui/badge"
export function InteractiveCards() {
  const cards = [
    {
      title: "Dashboard Analytics",
      description: "Real-time insights at your fingertips",
      image: "./Dummy.png",
      badge: "Popular",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "AI Forecasting",
      description: "Predict trends with machine learning",
      image: "./Dummy.png",
      badge: "New",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Team Collaboration",
      description: "Work together seamlessly",
      image: "./Dummy.png",
      badge: "Featured",
      color: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section id="features" className="py-20 font-poppins">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Interactive Solutions</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our suite of tools designed to elevate your workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                rotateY: 5,
                rotateX: 5,
                scale: 1.05,
              }}
              style={{ transformStyle: "preserve-3d" }}
              className="perspective-1000"
            >
              <Card className="overflow-hidden bg-background/50 backdrop-blur-md border-border/50 hover:shadow-2xl transition-all duration-500 group">
                <div className="relative">
                  <img
                    src={card.image || "/placeholder.svg"}
                    alt={card.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${card.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}
                  />
                  <Badge className="absolute top-4 right-4 bg-white/90 text-black">{card.badge}</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
