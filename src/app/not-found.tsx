import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex-grow flex items-center justify-center bg-paper border-b border-ledger-line py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-8">
        <div>
          <h1 className="text-6xl font-serif text-ink tracking-tight mb-2">404</h1>
          <div className="h-px w-16 bg-corporate-blue mx-auto mb-6"></div>
          <h2 className="text-2xl font-serif text-ink mb-4">Page Not Found</h2>
          <p className="text-base font-mono text-slate mb-8">
            The page you are looking for does not exist or has been moved.
          </p>
        </div>
        <div>
          <Link
            href="/"
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-sm font-medium rounded-sm text-paper bg-corporate-blue hover:bg-corporate-blue/90 hover:-translate-y-[1px] hover:shadow-sm transition-all duration-200"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </main>
  );
}
