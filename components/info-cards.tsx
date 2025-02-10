"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const cards = [
  {
    title: "Our Mission",
    content:
      "At Limpiar, we aim to provide exceptional cleaning services that foster healthier, cleaner environments. We focus on quality, attention to detail, and sustainability to inspire positivity in every space we touch.",
  },
  {
    title: "Our Event",
    content:
      "Join us for our upcoming event to celebrate cleanliness and community. It's a great opportunity to connect, learn, and be part of something impactful. Stay tuned for more info!",
  },
  {
    title: "Get involved",
    content:
      "Everyone can contribute to a cleaner world. Whether through volunteering, spreading the word, or supporting our mission, your involvement matters. Join us today and make a difference!",
  },
]

export function InfoCards() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-gray-600 text-center">{card.content}</p>
                </CardContent>
                <CardFooter className="justify-center">
                  <Button variant="default" className="bg-blue-900 hover:bg-blue-800">
                    More Info
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

