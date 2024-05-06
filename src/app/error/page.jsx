"use client";

import React from "react";
import { useRouter } from "next/navigation";

export const ErrorPage = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-zinc-300 mb-4">
          <strong className="font-extrabold">Error!!</strong>cannot <strong className="font-extrabold text-emerald-800">cat resume</strong>
        </h1>
        <p className="text-gray-300 mb-6">
          There was an error while trying to access the resume. Please try again
          later.
        </p>
        <button
          className="px-6 py-3 w-full sm:w-fit rounded-lg mr-4 bg transparent border border-emerald-800 border-[3px] text-zinc-300"
          onClick={handleGoBack}
        >
          Go back
        </button>
      </div>
    </section>
  );
};

export default ErrorPage;
