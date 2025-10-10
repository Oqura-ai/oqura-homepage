import { Github, Twitter, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import logo from "@/assets/logo.png"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center items-center">
          {/* Brand */}
          <div className="space-y-4 flex flex-col justify-center items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-none rounded-lg flex items-center justify-center">
                <Image src={logo} alt="Oqura.ai" />
              </div>
              <span className="text-lg font-bold">Oqura.ai</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Advanced research and development tools for the modern developer. Built with ❤️.
            </p>
            <div className="flex space-x-2">
              <a target="_blank" href="http://www.github.com/Oqura-ai">
                <Button variant="ghost" size="sm">
                  <Github className="w-4 h-4" />
                </Button>
              </a>
              <Button variant="ghost" size="sm">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>

{/* 
          <div>
            <h3 className="font-semibold mb-4">Tools</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Synthetic Data Generator
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Research Workflows
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation Search
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Workflow Builder
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Examples
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Tutorials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  GitHub Discussions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Discord Server
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Contributing Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div> */}
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Oqura.ai . Released under the MIT License.</p>
        </div>
      </div>
    </footer>
  )
}
