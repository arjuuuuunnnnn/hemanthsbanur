"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const ErrorPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[#121212]">
      <h1 className="text-3xl font-bold text-zinc-300 mb-4">
        Cannot
        <strong className="font-mono font-extrabold text-emerald-800"> &apos;cat resume&apos;</strong>
      </h1>
      <p className="font-mono text-zinc-300 mb-6">
        Building one
      </p>
      <button
        className="px-6 py-3 w-auto rounded-lg mr-4 bg-transparent border border-emerald-800 border-[3px] text-zinc-300 font-mono"
        onClick={handleGoBack}
      >
        Go back
      </button>
    </section>
  );
};

export default ErrorPage;
