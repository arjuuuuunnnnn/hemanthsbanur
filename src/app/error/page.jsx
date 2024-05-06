"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const ErrorPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-emerald-950 via-emerald-900 to-lime-900">
      <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-white mb-4">
          Error cannot 'cat resume'
        </h1>
        <p className="text-gray-300 mb-6">
          There was an error while trying to access the resume. Please try again
          later.
        </p>
        <button
          className="px-6 py-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white focus:outline-none"
          onClick={handleGoBack}
        >
          Go back
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
