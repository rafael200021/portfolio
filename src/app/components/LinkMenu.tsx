import Link from "next/link";
import React from "react";

export default function LinkMenu({
  children,
  rota,
}: {
  children?: React.ReactNode;
  rota: string;
}) {
  return (
    <Link
      href={rota}
      className="hover:font-bold hover:scale-105 text-neutral-900 dark:text-white hover:text-purple-500 duration-300"
    >
      {children}
    </Link>
  );
}
