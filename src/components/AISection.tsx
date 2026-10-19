import { Bot, FileSearch, Headphones, CheckCircle2, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

// To add a shipped project: set status to "shipped" and fill in `link` (live demo or GitHub).
const aiWork = [
  {
    title: "AI Trainer, LinkedIn (Contract)",
    description:
      "Evaluated and improved AI model responses on product management topics, including scaling, lifecycle transitions, feasibility and technical planning.",
    stack: ["Model evaluation", "Response quality", "Product expertise"],
    icon: Bot,
    status: "shipped",
    link: "",
  },
  {
    title: "Policy & SOP Q&A Assistant",
    description:
      "A RAG app that answers questions over a set of operating documents and cites its sources, built in TypeScript with an LLM API and vector search.",
    stack: ["TypeScript", "RAG", "Embeddings", "Vector DB"],
    icon: FileSearch,
    status: "next",
    link: "",
  },
  {
    title: "Support Triage Agent",
    description:
      "An agent that reads a support ticket, looks up account data through tools, and drafts a reply for human review, with tests that measure its accuracy.",
    stack: ["TypeScript", "Tool use", "Agents", "Evals"],
    icon: Headphones,
    status: "next",
    link: "",
  },
];

export const AISection = () => {
  return (
    <section id="ai" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium mb-4">Building with AI</p>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              From Specs to <span className="text-gradient">Shipping</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I'm building hands on with LLMs, RAG and agents, using business problems I know well
              from payments, integrations and operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {aiWork.map((item) => {
              const shipped = item.status === "shipped";
              const Wrapper = item.link ? "a" : "div";
              return (
                <Wrapper
                  key={item.title}
                  {...(item.link ? { href: item.link, target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={cn(
                    "group p-6 rounded-2xl border bg-card transition-all duration-500 flex flex-col",
                    shipped ? "border-border hover:shadow-glow hover:-translate-y-1" : "border-dashed border-border"
                  )}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-primary/10 text-primary">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span
                      className={cn(
                        "inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-mono border",
                        shipped
                          ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-500"
                          : "bg-secondary border-border text-muted-foreground"
                      )}
                    >
                      {shipped ? <CheckCircle2 className="w-3 h-3" /> : <Clock className="w-3 h-3" />}
                      {shipped ? "Completed" : "Up next"}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{item.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded-md text-xs font-mono bg-secondary text-muted-foreground">
                        {s}
                      </span>
                    ))}
                  </div>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
