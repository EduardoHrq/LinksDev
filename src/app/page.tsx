"use client";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Code,
  GithubLogo,
  LinkedinLogo,
  ReadCvLogo,
} from "@phosphor-icons/react";
import { Separator } from "../components/separator";
import { LinkCard } from "../components/link";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-7">
        <LinkCard
          type="link"
          title="ORCID"
          link="https://orcid.org/0009-0007-7639-6098"
          icon={"https://orcid.org/assets/vectors/orcid.logo.icon.svg"}
        />

        <LinkCard
          type="link"
          title="Portifolio"
          link="https://eduardohrq-portifoliodev.vercel.app"
          icon={<Briefcase size={32} weight="fill" />}
        />

        <LinkCard
          type="page"
          title="Projetos"
          link="/projects"
          icon={<Code size={32} weight="fill" />}
        />
      </div>
    </>
  );
}
