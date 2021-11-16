import React, { ReactNode } from "react";
import { Header } from "../Header";

interface Props {
  children: ReactNode;
  className?: string;
}

export const Page = ({ children, className = "" }: Props) => {
  return (
    <>
      <Header />
      <div className={`container ${className}`}>{children}</div>
    </>
  );
};
