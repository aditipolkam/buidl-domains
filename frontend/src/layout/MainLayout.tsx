import { ReactElement } from "react";
import Navigation from "./Navigation";

export default function MainLayout({ children }: { children: ReactElement }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1 pt-40 overflow-x-hidden">{children}</main>
    </div>
  );
}
