import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Play, GitBranch, Cpu, BarChart3 } from "lucide-react"

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Workflow Engine
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Build powerful
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              {" "}
              research pipelines
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Design, execute, and monitor complex workflows with our visual pipeline builder and automated execution
            engine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <GitBranch className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Visual Pipeline Designer</h3>
                <p className="text-muted-foreground">
                  Drag-and-drop interface for building complex research workflows. Connect data sources, processing
                  steps, and outputs with intuitive visual connections.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Cpu className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Distributed Processing</h3>
                <p className="text-muted-foreground">
                  Scale your workflows across multiple nodes. Automatic load balancing and fault tolerance ensure
                  reliable execution of large-scale research tasks.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <BarChart3 className="w-5 h-5 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Real-time Monitoring</h3>
                <p className="text-muted-foreground">
                  Track workflow execution in real-time. Detailed metrics, logs, and performance analytics help optimize
                  your research processes.
                </p>
              </div>
            </div>

            <Button className="group">
              Try Workflow Builder
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="relative">
            <Card className="bg-gradient-to-br from-card to-muted/50 border-border/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Research Pipeline</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm text-muted-foreground">Running</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-primary/10 rounded-lg">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <Play className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Data Ingestion</div>
                    <div className="text-xs text-muted-foreground">Processing 1.2M documents</div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Complete
                  </Badge>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-secondary/10 rounded-lg">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
                    <Cpu className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Synthetic Generation</div>
                    <div className="text-xs text-muted-foreground">Creating training datasets</div>
                  </div>
                  <Badge className="text-xs pulse-glow">Active</Badge>
                </div>

                <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg opacity-60">
                  <div className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">Analysis & Export</div>
                    <div className="text-xs text-muted-foreground">Pending previous step</div>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    Queued
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
