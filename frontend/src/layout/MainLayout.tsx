import { ReactElement } from "react";
import Navigation from "./Navigation";

export default function MainLayout({ children }: { children: ReactElement }) {
  return (
    <div className="min-h-screen">
      <Navigation />
      {children}
    </div>
  );
}
