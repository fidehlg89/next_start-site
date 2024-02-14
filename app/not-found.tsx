import Link from "next/link";
import { FaceFrownIcon } from "@heroicons/react/24/outline";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <FaceFrownIcon className="w-10 text-red-400" />
      <h2 className="text-xl font-semibold text-gray-600">404 Not Found</h2>
      <p className="text-gray-600">Could not find the requested page.</p>
      <Link
        href="/"
        className="mt-4 bg-green-300 font-semibold px-8 py-4 text-sm text-gray-900 transition-colors hover:bg-green-400"
      >
        HOME PAGE
      </Link>
    </main>
  );
}
