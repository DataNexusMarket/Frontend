import Image from "next/image"
import Link from "next/link"
import { FaDiscord, FaGithub } from "react-icons/fa"
import { LuBook } from "react-icons/lu"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import {
  PageHeader,
  PageHeaderCTA,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/layout/page-header"
import { CopyButton } from "@/components/shared/copy-button"
import { ExampleDemos } from "@/components/shared/example-demos"

import { Web2Integrations } from "../dashboard/upload/integrations"

export default function HomePage() {
  return (
    <div className="container relative mt-20 px-0">
      <PageHeader className="pb-8">
        <Image
          src="/logo-gradient.png"
          alt="TurboETH Logo"
          width={80}
          height={80}
          className="h-20 w-20 rounded-2xl"
        />
        <PageHeaderHeading>Data Nexus&nbsp;</PageHeaderHeading>
        <PageHeaderDescription>{siteConfig.description}</PageHeaderDescription>
        <PageHeaderCTA>
          <Link
            href={siteConfig.links.docs}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: "default" })}
          >
            <LuBook className="mr-2 h-4 w-4" />
            Docs
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ variant: "secondary" })}
          >
            <FaGithub className="mr-2 h-4 w-4" />
            Github
          </Link>
        </PageHeaderCTA>
        <PageHeaderCTA>
          <CopyButton value="pnpm create turbo-eth@latest">
            <span className="text-xs sm:text-base">
              Created with Chainlink Services
            </span>
          </CopyButton>
        </PageHeaderCTA>
      </PageHeader>
      <Web2Integrations />
    </div>
  )
}
