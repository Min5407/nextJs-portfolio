import React, { ReactNode } from "react";
import { Header } from "../Header";
export const Page = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>;
    </>
  );
};
