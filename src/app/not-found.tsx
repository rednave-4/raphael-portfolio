import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-foreground">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found.</p>
      <Link
        href="/"
        className="mt-6 inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90 transition-opacity"
      >
        Back to home
      </Link>
    </div>
  );
}
