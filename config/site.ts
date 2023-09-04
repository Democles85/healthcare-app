export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "NextCare",
  description: "A healthcare app designed to link your .",
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/shadcn",
    github: "https://github.com/shadcn/ui",
    register: `${process.env.NEXT_PUBLIC_SITE_URL}/register`,
    docs: "https://ui.shadcn.com",
  },
}
