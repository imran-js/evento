import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

type props = {
  PrevPath: string;
  NextPath: string;
};

const btnStyles = `className="text-white flex items-center gap-x-2 px-5 py-3 bg-white/5 rounded-md opacity-75 hover:opacity-100 text-sm transition "`;

function PaginationControls({ PrevPath, NextPath }: props) {
  return (
    <section className="flex w-full justify-between">
      {PrevPath ? (
        <Link className={btnStyles} href={PrevPath}>
          <ArrowLeftIcon />
          Back
        </Link>
      ) : (
        <div />
      )}
      {NextPath ? (
        <Link className={btnStyles} href={NextPath}>
          Next
          <ArrowRightIcon />
        </Link>
      ) : null}
    </section>
  );
}

export default PaginationControls;
