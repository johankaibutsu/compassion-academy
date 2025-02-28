import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="mx-auto max-w-2xl py-2 pt-16 sm:pt-10 lg:py-24">
      <div className="text-center">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-300 md:text-4xl">
          Compassion Academy moodle portal
        </h1>
        <Link
          href={"https://google.com"}
          className="hover:scale-110 hover:underline"
        >
          click here
        </Link>
      </div>
    </div>
  );
}