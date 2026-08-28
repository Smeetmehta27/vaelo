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
            <p className="text-lg leading-relaxed mb-6">
              Vaelo ("we", "our", or "us") provides institutional-grade financial analysis tools exclusively for Chartered Accountants (CAs) and financial professionals. Because you entrust us with sensitive client financial data, our privacy principles are simple: <strong>we collect only what is necessary to generate your reports, we protect it rigorously, and we never use your clients' data to train public AI models.</strong>
            </p>
            <p>
              This Privacy Policy explains how we collect, use, and protect your information, and how we comply with the Digital Personal Data Protection (DPDP) Act of India.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">1. What Data We Collect</h2>
            <p>To provide our services, we collect the following types of information:</p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-ink-soft">
              <li><strong>Account Information:</strong> Your name, firm name, email address, and billing details.</li>
              <li><strong>WhatsApp Contact Information:</strong> The verified phone number you provide to receive your generated reports via the WhatsApp Business API.</li>
              <li><strong>Client Financial Data:</strong> The raw financial data you submit for analysis. This includes Tally or Zoho exports, manual Profit & Loss statements, Balance Sheets, and specific transaction assumptions needed to generate CMA, Financial Health, or Feasibility reports.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">2. How We Use Your Data</h2>
            <p>Your data is used strictly to deliver the service you requested. We use the information to:</p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-ink-soft">
              <li>Ingest and structure financial data to generate deterministic financial models.</li>
              <li>Make the live financial models and optional white-labeled PDF exports available securely within your workspace dashboard.</li>
              <li>Provide customer support and respond to your inquiries.</li>
            </ul>
            <p className="mt-4 font-medium text-ink bg-paper p-4 border border-stone-line rounded-sm">
              We do not sell your data. We do not share your clients' financial data with unauthorized third parties. We strictly do not use your proprietary financial submissions to train external, shared, or public AI models.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">3. Data Storage, Security & Hosting</h2>
            <p>
              We implement robust security measures to protect your data against unauthorized access or disclosure:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-ink-soft">
              <li><strong>Encryption:</strong> All data is encrypted at rest and in transit using industry-standard protocols (TLS/SSL).</li>
              <li><strong>Isolation:</strong> Client data is logically isolated between individual CA accounts. You cannot access another practice's data, and they cannot access yours.</li>
              <li><strong>Data Residency:</strong> Our primary databases and hosting infrastructure are located in secure, India-based data centers to comply with local data sovereignty preferences.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">4. Third-Party Services</h2>
            <p>
              We utilize select, trusted third-party infrastructure providers to deliver our service. These providers are bound by strict data processing agreements:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-ink-soft">
              <li><strong>Meta (WhatsApp Business API):</strong> Used exclusively to deliver your completed reports and critical notifications securely to your registered WhatsApp number.</li>
              <li><strong>Supabase & Deno Deploy:</strong> Used for secure database hosting, authentication, application logic (Edge Functions), and encrypted file storage of your generated PDF reports.</li>
              <li><strong>Payment Processors:</strong> We use secure, compliant payment gateways (e.g., Razorpay/Stripe) to process invoice payments. We do not store your credit card numbers on our servers.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">5. Data Retention & Deletion</h2>
            <p>
              We retain your account information and generated reports for as long as your account is active, allowing you to access historical models. 
            </p>
            <p className="mt-2">
              If you delete a client profile or close your Vaelo account, the associated raw financial data and generated reports are permanently deleted from our active databases within 30 days. You may request immediate deletion of specific client data at any time after a report is finalized.
            </p>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">6. Your Rights Under the DPDP Act</h2>
            <p>
              In compliance with the Digital Personal Data Protection (DPDP) Act of India, you (and by extension, your clients) hold the following rights regarding personal data:
            </p>
            <ul className="list-disc pl-5 space-y-2 mt-4 text-ink-soft">
              <li><strong>Right to Access:</strong> You can request a summary of the personal data we hold about you.</li>
              <li><strong>Right to Correction:</strong> You can request that we correct any inaccurate or incomplete data.</li>
              <li><strong>Right to Erasure:</strong> You can request the deletion of your personal data when it is no longer necessary for the purpose it was collected.</li>
              <li><strong>Right to Grievance Redressal:</strong> You have the right to register a complaint regarding data processing.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl mt-10 mb-4">7. Updates to This Policy</h2>
            <p>
              We may update this Privacy Policy periodically to reflect changes in our practices or regulatory requirements. We will notify you of any material changes by sending an alert to your registered WhatsApp number or email address, or by placing a prominent notice on our website prior to the change becoming effective.
            </p>
          </div>

          <div className="pt-8 mt-12 border-t border-stone-line">
            <h2 className="text-2xl mb-4">8. Contact Information</h2>
            <p>
              If you have any questions about this Privacy Policy, your data rights, or our security practices, please contact our Data Protection/Privacy Officer at:
            </p>
            <p className="mt-4 font-mono font-medium text-bronze-deep">
              vaelo.team@gmail.com
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              (We will update this to privacy@vaelo.co.in once the custom domain email is fully provisioned.)
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
