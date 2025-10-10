import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Database, Brain, Workflow, FileSearch, Code, Zap } from "lucide-react"

const features = [
  {
    icon: Database,
    title: "Synthetic Dataset Generation",
    description:
      "Create high-quality synthetic datasets for training and testing. Generate realistic data that preserves statistical properties while ensuring factuality.",
    badge: "AI-Powered",
    color: "text-primary",
  },
  {
    icon: Brain,
    title: "Private-knowledge Research",
    description:
      "Deep research workflows that leverage internal knowledge bases. Automate literature reviews and extract insights from vast document collections.",
    badge: "Research",
    color: "text-secondary",
  },
  {
    icon: FileSearch,
    title: "Documentation Search",
    description:
      "Intelligent search across technical documentations. Hybrid semantic search with context understanding and code snippet extraction.",
    badge: "Smart Search",
    color: "text-chart-4",
  },
  {
    icon: Code,
    title: "Developer-First Design",
    description:
      "Built with developers in mind. Comprehensive CLI tools with popular development environments.",
    badge: "Dev Tools",
    color: "text-chart-2",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-muted/30 max-w-7xl mx-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Platform Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Everything you need for
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}
              research and developement
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our comprehensive suite of tools helps researchers and developers to tackle complex challenges with agentic workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-12 h-12 rounded-lg bg-background flex items-center justify-center group-hover:scale-110 transition-transform ${feature.color}`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
