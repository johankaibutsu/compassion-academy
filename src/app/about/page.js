"use client"
import React, { useEffect } from 'react'
import AboutCard from '@/components/About/AboutCard'

// ==================== About Page ====================
export default function Page() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  }, [])

  // ==================== Return ====================
  return (
    <div className="relative isolate px-2 min-h-screen">
      <div className="mx-auto max-w-4xl py-2 pt-8 lg:py-24">
        <div className="text-center">
          <h1 className="text-lg sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl">
            “Aspires to be a pre-eminent deemed school of national standing
            in education and innovation”.
          </h1>
          <p className="mt-6 text-md sm:text-xl text-gray-600 dark:text-gray-300 font-medium">
            Compassion Academy is committed to providing a nurturing environment
            where students can grow academically, socially, and emotionally
            while developing a strong sense of empathy and compassion.
          </p>
        </div>
      </div>
      <AboutCard />
    </div>
  );
}

// ============================================================================