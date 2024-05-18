"use client";
import { LinkCard } from "@/components/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { HouseLine } from "@phosphor-icons/react";

export default function Projects() {
  return (
    <>
      <div className="mb-10">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">
                <HouseLine weight="fill" size={16} />
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Projects</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col gap-7">
        <LinkCard
          type="page"
          title="Java"
          link="/java"
          icon={"https://skillicons.dev/icons?i=java"}
        />

        <LinkCard
          type="page"
          title="Spring Boot"
          link="/java"
          icon={"https://skillicons.dev/icons?i=spring"}
        />

        <LinkCard
          type="page"
          title="TypeScript"
          link="/java"
          icon={"https://skillicons.dev/icons?i=ts"}
        />

        <LinkCard
          type="page"
          title="NodeJS"
          link="/java"
          icon={"https://skillicons.dev/icons?i=nodejs"}
        />

        <LinkCard
          type="page"
          title="Next"
          link="/java"
          icon={"https://skillicons.dev/icons?i=next"}
        />

        <LinkCard
          type="page"
          title="React"
          link="/java"
          icon={"https://skillicons.dev/icons?i=react"}
        />
      </div>
    </>
  );
}
