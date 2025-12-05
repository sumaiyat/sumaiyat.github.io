import { Mail, Linkedin, Github, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  return (
    <section className="px-6 py-20 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-12">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xl leading-relaxed mb-6">
              If you'd like to discuss a project or just say hi, I'm always down to chat.
            </p>
            <Button size="lg" className="group">
              <Mail className="w-4 h-4 mr-2" />
              alex.morgan@email.com
            </Button>
          </div>
          <div>
            <p className="text-muted-foreground mb-6">You can also find me on these platforms:</p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Linkedin className="w-4 h-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
              <Button variant="outline" size="icon">
                <Twitter className="w-4 h-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon">
                <Github className="w-4 h-4" />
                <span className="sr-only">Github</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
