import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { ROOT } from "constant/pathName";
import classNames from "classNames";

export const Header = () => {
  const { pathname } = useRouter();

  return (
    <nav>
      <Link href="/" passHref>
        <span className="nav-logo">MIN&#39;S WEB</span>
      </Link>
      <Link href="/blog">
        <a
          className={classNames("nav-blog", {
            active: ROOT.BLOG === pathname,
          })}
        >
          BLOG
        </a>
      </Link>
    </nav>
  );
};
