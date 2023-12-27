import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 w-1/2 mx-auto">{children}</main>
    </div>
  );
}
