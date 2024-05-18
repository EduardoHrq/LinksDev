import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react";
import Link from "next/link";

interface LinkProps {
  type: "link" | "page";
  title: string;
  icon: React.ReactNode | string;
  link: string;
}

export function LinkCard({ type, title, icon, link }: LinkProps) {
    return (
      <Link
        href={link.toString()}
        target={`${type == 'link' ? '_blank' : ''}`}
        className="relative bg-zinc-500 bg-opacity-20 flex items-center justify-center py-5
          rounded-xl ring ring-zinc-500 px-[2rem] md:ring-0 md:bg-opacity-10 md:hover:ring
          transition-all group duration-500"
      >
        {typeof icon == "string" ? (
          <img
            src={icon.toString()}
            alt=""
            className="size-[2rem] absolute left-[1rem]"
          />
        ) : (
          <span className="absolute left-[1rem]">{icon}</span>
        )}

        <p className="text-center">{title}</p>

        {type == "link" ? (
          <ArrowUpRight
            size={32}
            weight="bold"
            className="absolute right-[1rem] md:opacity-0 group-hover:opacity-100 transition-all
            duration-200 md:scale-[.2] origin-bottom-left group-hover:scale-100"
          />
        ) : (
          <ArrowRight
            size={32}
            weight="bold"
            className="absolute right-[1rem] md:opacity-0 group-hover:opacity-100 transition-all
            duration-200 md:scale-[.2] origin-left group-hover:scale-100"
          />
        )}
      </Link>
    );
}
