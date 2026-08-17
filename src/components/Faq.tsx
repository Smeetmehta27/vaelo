export function Faq() {
  const faqs = [
    {
      question: "Is my client's data safe?",
      answer: "Absolutely. Data privacy is our highest priority. Our infrastructure is fully encrypted (at rest and in transit) and built to be DPDP Act-conscious. Client data is strictly isolated per CA account, and we never use your clients' financials to train public or shared models.",
    },
    {
      question: "What if I don't use Tally or Zoho?",
      answer: "Not a problem. While direct exports from Tally and Zoho are faster, you can submit standard manual P&L and Balance Sheet data using our structured Excel templates. We accommodate the reality of how your clients maintain their books.",
    },
    {
      question: "Can I adjust the assumptions?",
      answer: "Yes. Your professional judgment is paramount. If you disagree with a baseline growth rate, discount rate, or sector multiple based on your knowledge of the client, simply provide the adjusted assumption. We will regenerate the entire model to reflect your exact inputs.",
    },
    {
      question: "How is this different from an online valuation calculator?",
      answer: "Online calculators are generic, self-serve tools that lack depth and rigor. Vaelo provides institutional-grade modeling built specifically around the CA's workflow. We produce comprehensive, branded reports (including complex sensitivity analyses) designed to be presented as professional advisory work, not a quick web estimate.",
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-ledger-line">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-serif text-ink mb-12 border-b border-ledger-line pb-6">Common Questions</h2>
        
        <div className="space-y-10">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-ledger-line p-8 hover:bg-paper transition-colors">
              <h3 className="text-lg font-semibold text-ink mb-4">{faq.question}</h3>
              <p className="text-slate text-base leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
