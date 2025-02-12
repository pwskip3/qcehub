import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <Head>
        <title>QCEHub - AI Code Editor</title>
      </Head>
      <h1 className="text-4xl font-bold">Welcome to QCEHub</h1>
      <p className="text-lg mt-2">AI-powered Quantum Code Editor</p>
      <div className="mt-4">
        <Link href="/demo">
          <button className="px-6 py-2 bg-blue-500 rounded-lg text-white hover:bg-blue-700 transition">
            Try AI Code Generation
          </button>
        </Link>
      </div>
    </div>
  );
}
