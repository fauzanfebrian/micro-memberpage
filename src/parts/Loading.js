import React from "react";

export default function Loading() {
  return (
    <section className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl text-gray-900 mt-12 animate-pulse">
        Wait a minute
      </h1>
    </section>
  );
}
