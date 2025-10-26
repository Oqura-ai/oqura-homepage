"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"
import { MetallicShape } from "@/components/metallic-shape"

export function HeroSection() {
  return (
    <section className="relative py-60 flex items-center justify-center overflow-hidden">
      <MetallicShape />

      {/* Background Effects */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6 text-sm font-medium">
            {/* <Sparkles className="w-4 h-4 mr-2" /> */}
            Oqura.ai
          </Badge>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Open Source
            </span>
            <span> Tools</span>
            <br />
            for Smarter{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              AI
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            Oqura.ai is an AI-first research and development lab focused on accelerating developers with state-of-art AI
            tools.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="/#community">
              <Button size="lg" className="pulse-glow group">
                Explore Tools
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
