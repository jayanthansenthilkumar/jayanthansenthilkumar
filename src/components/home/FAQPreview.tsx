import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { ArrowRight, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Do you train models on our proprietary data?",
    answer: "No. We deploy isolated, single-tenant environments for every enterprise client. Your data remains entirely within your control and is never used to train our base models or any models for other clients."
  },
  {
    question: "How long does a typical implementation take?",
    answer: "Our pre-packaged solutions (like our RAG platform or Document Processing) can be deployed in as little as 2 weeks. Custom architectures and fine-tuned models typically take 6-12 weeks from discovery to production deployment."
  },
  {
    question: "Do you offer on-premise deployments?",
    answer: "Yes. For clients with strict compliance requirements (defense, healthcare, finance), we offer fully air-gapped on-premise deployments or deployments within your own private cloud (VPC)."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer hybrid pricing depending on the engagement. API products are consumption-based, while custom enterprise deployments typically involve a one-time engineering fee followed by an annual licensing and maintenance contract."
  }
];

export function FAQPreview() {
  return (
    <section className="py-24 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-4">
              <HelpCircle className="w-5 h-5 text-blue-600" />
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight font-serif italic">FAQ</h2>
            </div>
            <p className="text-gray-600 text-sm font-mono mb-8">
              Everything you need to know about our technology, security posture, and deployment models.
            </p>
            <Link to="/contact">
              <Button variant="outline" className="rounded-sm font-mono text-xs border-gray-300 bg-white text-gray-700 shadow-sm hover:bg-gray-50">
                View All FAQs <ArrowRight className="ml-2 w-3 h-3" />
              </Button>
            </Link>
          </div>
          
          <div className="lg:col-span-8">
            <div className="border border-gray-200 rounded-sm bg-white shadow-sm overflow-hidden">
              <div className="px-4 py-3 bg-gray-50 border-b border-gray-200 flex gap-2">
                <span className="text-[10px] font-mono text-gray-500 font-semibold">austral.config.json</span>
              </div>
              <Accordion className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-gray-100 px-6 last:border-0">
                    <AccordionTrigger className="text-left text-sm font-bold text-gray-900 font-serif hover:text-blue-600 hover:no-underline py-5">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600 text-xs font-mono leading-relaxed pb-6">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
