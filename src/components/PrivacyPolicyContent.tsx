export function PrivacyPolicyContent() {
  const currentDate = new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <section className="bg-paper-dim py-20 border-b border-stone-line">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12 border-b border-stone-line pb-8">
          <h1 className="text-4xl font-serif text-ink tracking-tight mb-4">Privacy Policy</h1>
          <p className="text-ink-soft text-sm font-mono uppercase tracking-wider">Effective Date: {currentDate}</p>
        </div>

        <div className="prose prose-slate prose-headings:font-serif prose-headings:text-ink prose-headings:font-medium prose-p:text-ink-soft prose-a:text-bronze-deep max-w-none space-y-8">
          
          <div>
            <h2 className="text-2xl mt-10 mb-4">1. Information We Collect</h2>
            <p>
              Vaelo's website currently collects information only when you actively submit it through one of our forms:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-ink-soft">
              <li><strong>Contact form</strong>: name, email address, and the message you send us.</li>
              <li><strong>Early access / signup form</strong>: name, email address, firm name (if provided), and any additional details you choose to share.</li>
            </ul>
            <p className="mt-4">
              We do not currently operate user accounts, a client portal, or any system that collects, stores, or processes your financial data, your clients' financial data, or documents. Vaelo's CA practice workspace product is in active development — when it launches with real account and data-handling features, this policy will be updated to reflect exactly what that product does, and you'll be able to review it before creating an account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">2. How Your Information Is Used</h2>
            <p>
              Form submissions are processed through <strong>Web3Forms</strong>, a third-party form-delivery service, which forwards your submission to our team's email inbox. We use this information only to respond to your inquiry or to contact you about early access to Vaelo. We do not sell, rent, or share your information with advertisers, and we do not use it for any purpose beyond what you submitted it for.
            </p>
            <p className="mt-4">
              We do not currently use WhatsApp Business API, any payment processor, or Supabase (or any backend database) on this website. If that changes, this section will be updated to name the service and explain exactly what it does with your data — before it goes live, not after.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">3. Data Retention</h2>
            <p>
              We retain form submissions only as long as needed to respond to your inquiry or maintain contact about early access, and delete them on request. You can request deletion at any time using the contact details below.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">4. Security</h2>
            <p>
              This site is served over HTTPS (TLS-encrypted in transit). Because no account data or financial data is collected on this site today, there is no database of sensitive information to secure beyond the form submissions described above, which are handled by Web3Forms under their own security practices.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">5. Your Rights (Digital Personal Data Protection Act, 2023)</h2>
            <p>
              As a data principal under India's DPDP Act, 2023, you have the right to:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-ink-soft">
              <li><strong>Access</strong> the personal data we hold about you</li>
              <li><strong>Correct</strong> inaccurate or incomplete data</li>
              <li><strong>Erase</strong> your data, subject to any legal retention requirements</li>
              <li><strong>Grievance redressal</strong> — raise a concern about how your data is handled</li>
            </ul>
          </div>

          <div className="pt-8 mt-12 border-t border-stone-line">
            <h2 className="text-2xl mb-4">6. Contact / Grievance Officer</h2>
            <p>
              For any privacy question, data request, or grievance, contact us at <strong className="font-mono font-medium text-bronze-deep">vaelo.team@gmail.com</strong>. We aim to respond within a reasonable timeframe and in line with DPDP Act requirements.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
