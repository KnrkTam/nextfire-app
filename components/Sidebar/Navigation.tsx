import { useRouter } from "next/router";
import * as React from "react";
import { NavigationLink } from "./NavigationLink";

import {
  CritIcon,
  GitHubIcon,
  HomeIcon,
  LinkedInIcon,
  BookmarksIcon,
  WritingIcon,
} from "../Icons";

export function SidebarNavigation() {
  const router = useRouter();
  const sections = [
    {
      label: null,
      items: [
        {
          href: "/",
          label: "Home",
          icon: HomeIcon,
          isActive: router.asPath === "/",
          isExternal: false,
        },

        {
          href: "/bookmarks",
          label: "Bookmarks",
          icon: BookmarksIcon,
          isActive: router.asPath.indexOf("/bookmarks") >= 0,
          isExternal: false,
        },

        {
          href: "/admin",
          label: "Write Post",
          icon: CritIcon,
          isActive: router.asPath.indexOf("/admin") >= 0,
          isExternal: false,
        },
      ],
    },
    {
      label: "Me",
      items: [
        {
          href: "https://github.com/KnrkTam",
          label: "GitHub",
          icon: GitHubIcon,
          isExternal: true,
        },
        {
          href: "https://kenricktam.vercel.app/",
          label: "Resume",
          icon: WritingIcon,
          isExternal: true,
        },

        {
          href: "https://www.linkedin.com/in/kenrick-tam/",
          label: "Linkedin",
          icon: LinkedInIcon,
          isExternal: true,
        },
      ],
    },
  ];

  return (
    <div className="flex-1 px-3 py-3 space-y-1 sticky">
    {/* <div> */}
      {sections.map((section, i) => {
        return (
          <ul key={i} className="space-y-1">
            {section.label && (
              <h4
                key={i}
                className="px-2 pt-5 pb-2 text-xs font-semibold text-gray-1000 text-opacity-40 dark:text-white"
              >
                {section.label}
              </h4>
            )}
            {section.items.map((item, j) => (
              <NavigationLink key={j} link={item} />
            ))}
          </ul>
        );
      })}
    </div>
  );
}
