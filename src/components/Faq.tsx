export function Faq() {
  const faqs = [
    {
      question: "Is my client's data safe?",
      answer: "Absolutely. Data privacy is our highest priority. Our infrastructure is fully encrypted (at rest and in transit) and built to be DPDP Act-conscious. Client data is strictly isolated per CA account, and we never use your clients' financials to train public or shared models.",
    },
    {
      question: "How do I bring my clients' data into Vaelo?",
      answer: "You can seamlessly upload standard P&L and Balance Sheet data using our structured Excel templates directly into the workspace. We accommodate the reality of how your clients maintain their books.",
    },
    {
      question: "Can I adjust the assumptions?",
      answer: "Yes. Your professional judgment is paramount. The platform provides pre-set rigorous scenario testing — allowing you to easily compare Base, Downside, and Severe scenarios without the need for manual, error-prone spreadsheet adjustments.",
    },
    {
      question: "How is this different from an online financial calculator?",
      answer: "Online calculators are generic, self-serve tools that lack depth and rigor. Vaelo provides institutional-grade modeling built specifically around the CA's workflow. We provide a comprehensive, continuous workspace designed for professional advisory, complete with complex sensitivity analyses and custom branding.",
    },
    {
      question: "Can my clients see this too?",
      answer: "Yes, if you choose. You can share a secure, tokenized timeline with clients showing document receipts, logged notices, and finalized milestones. You remain in complete control over the analytical data — it's a streamlined status feed, not a complex report viewer.",
    }
  ];

  return (
    <section className="bg-paper-dim py-24 border-b border-stone-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 border-b border-stone-line pb-6">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-bronze"></span>
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-bronze-deep font-medium">FAQ</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-serif font-[560] text-ink">Common Questions</h2>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-stone-line bg-paper rounded-[20px] p-8">
              <h3 className="text-xl font-serif font-[560] text-ink mb-3">{faq.question}</h3>
              <p className="font-sans text-ink-soft text-sm leading-[1.65]">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
