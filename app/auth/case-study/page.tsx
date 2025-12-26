'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Inter } from "next/font/google";
import Link from 'next/link';

const inter = Inter({ subsets: ["latin"] });

function PasswordForm() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const returnUrl = searchParams.get('returnUrl') || '/featured/design-system';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch('/api/verify-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        router.push(returnUrl);
        router.refresh(); // Refresh to update middleware state
      } else {
        setError(data.error || 'Incorrect password');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-8 bg-[#040B16] border border-white/10 rounded-2xl shadow-2xl backdrop-blur-sm">
      <div className="text-center">
        <h1 className={`${inter.className} text-3xl font-bold text-white mb-2`}>
          Protected Content
        </h1>
        <p className="text-neutral-400">
          Please enter the password to view this case study.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="appearance-none relative block w-full px-4 py-3 border border-white/10 placeholder-neutral-500 text-white bg-white/5 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent sm:text-sm transition-all"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <div className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded-lg border border-red-900/50">
            {error}
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isLoading}
            className={`group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-black bg-white hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-all ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Verifying...' : 'Access Case Study'}
          </button>
        </div>
      </form>
      
      <div className="text-center">
        <Link href="/" className="text-sm text-neutral-500 hover:text-white transition-colors">
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  );
}

export default function CaseStudyAuth() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#02060C] px-4">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <PasswordForm />
      </Suspense>
    </div>
  );
}

