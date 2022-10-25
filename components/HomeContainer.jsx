import React from "react";

export default function HomeContainer({ children }) {
  return (
    <section>
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        {children}
      </div>
    </section>
  );
}
