import { ReactNode } from "react";

import { Navbar } from "@/components/Navbar";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <div className="container lg mx-auto">{children}</div>
    </>
  );
}
