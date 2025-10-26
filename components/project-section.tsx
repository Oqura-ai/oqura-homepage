import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, Users, Star, GitFork, MessageSquare, ExternalLink } from "lucide-react"

const stats = [
  { icon: Star, label: "GitHub Stars", value: "12.4k", color: "text-yellow-500" },
  { icon: GitFork, label: "Forks", value: "2.1k", color: "text-blue-500" },
  { icon: Users, label: "Contributors", value: "340+", color: "text-green-500" },
  { icon: MessageSquare, label: "Discussions", value: "890", color: "text-purple-500" },
]

const repositories = [
  {
    name: "deepdoc",
    description: "Terminal based deep research agent for report generation on local file resources",
    language: "Python",
    link: "https://github.com/Oqura-ai/deepdoc",
    image: "https://opengraph.githubassets.com/1/Oqura-ai/deepdoc",
    color: "bg-blue-500",
  },
  {
    name: "local-datagen-cli",
    description: "Synthetic dataset generation workflow using local file resources for finetuning LLMs",
    language: "Python",
    link: "https://github.com/Oqura-ai/local-datagen-cli",
    image: "https://opengraph.githubassets.com/1/Oqura-ai/local-datagen-cli",
    color: "bg-blue-500",
  },
  {
    name: "deepresearch-datagen-cli",
    description: "Using deep research workflow to generate datasets for finetuning LLMs",
    language: "Python",
    link: "https://github.com/Oqura-ai/deepresearch-datagen-cli",
    image: "https://opengraph.githubassets.com/1/Oqura-ai/deepresearch-datagen-cli",
    color: "bg-blue-600",
  },
  {
    name: "optim-rag",
    description: "The rag pipeline for optimizing dynamic data editing.",
    language: "Typescript",
    link: "https://github.com/Oqura-ai/optim-rag",
    image: "https://opengraph.githubassets.com/1/Oqura-ai/optim-rag",
    color: "bg-blue-500",
  },
  {
    name: "datazard.ai",
    description: "Web-based dataset generation for finetuning llms",
    language: "Typescript",
    link: "https://github.com/Oqura-ai/datazard.ai",
    image: "https://opengraph.githubassets.com/1/Oqura-ai/datazard.ai",
    color: "bg-blue-500",
  },
  {
    name: "doc-sailor",
    description: "Browser extension for automated navigation through technical web documentations",
    language: "Python",
    link: "https://github.com/Oqura-ai/docsailor",
    image: "https://opengraph.githubassets.com/1/Oqura-ai/doc-sailor",
    color: "bg-blue-500",
  },
]

export function ProjectSection() {
  return (
    <section id="community" className="pb-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            projects
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-balance">
            Our
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"> Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Join with us contributing to the future of open source research and development tools.
          </p>
        </div>

        {/* GitHub Stats */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="pt-6">
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-lg bg-background flex items-center justify-center ${stat.color}`}
                >
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div> */}

        {/* Repository Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {repositories.map((repo, index) => (
            // <Card
            //   key={index}
            //   className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/50"
            // >
            //   <CardHeader>
            //     <div className="flex items-center justify-between">
            //       <CardTitle className="text-lg group-hover:text-primary transition-colors">{repo.name}</CardTitle>
            //       <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity">
            //         <ExternalLink className="w-4 h-4" />
            //       </Button>
            //     </div>
            //   </CardHeader>
            //   <CardContent>
            //     <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{repo.description}</p>
            //     <div className="flex items-center justify-between">
            //       <div className="flex items-center space-x-2">
            //         <div className={`w-3 h-3 rounded-full ${repo.color}`}></div>
            //         <span className="text-sm text-muted-foreground">{repo.language}</span>
            //       </div>
            //       <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            //         <Star className="w-4 h-4" />
            //         <span>{repo.stars}</span>
            //       </div>
            //     </div>
            //   </CardContent>
            // </Card>
            <a href={repo.link} target="_blank">
              <img src={repo.image}
                  alt="GitHub Repo Banner" 
                  className="max-w-[100%] rounded-2xl" />
            </a>

          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://github.com/Oqura-ai" target="_blank" className="flex justify-center pulse-glow bg-primary items-center group p-3 rounded-xl text-black">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* <Button size="lg" variant="outline">
              Join Community
            </Button> */}
          </div>
        </div>
      </div>
    </section>
  )
}
