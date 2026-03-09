import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      "X": "https://twitter.com/aditeyananda",
      "LinkedIn": "https://www.linkedin.com/in/aditeya-nanda/",
      "Email": "mailto:aditeyananda@gmail.com"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ArticleTitle(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.ContentMeta(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    Component.ConditionalRender({
      component: Component.TagList(),
      condition: (page) => page.fileData.slug !== "index",
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "", // Remove title text
      folderDefaultState: "collapsed", // Keep folders collapsed by default on reload
      useSavedState: true, // Don't persist collapse state
      sortFn: (a, b) => {
        const order = ["Explainers", "System Design", "About"];
        const aIndex = order.findIndex(x => a.displayName.includes(x));
        const bIndex = order.findIndex(x => b.displayName.includes(x));

        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;

        return a.displayName.localeCompare(b.displayName);
      },
    }),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      title: "", // Remove title text
      folderDefaultState: "collapsed", // Keep folders collapsed by default on reload
      useSavedState: true, // Don't persist collapse state
      sortFn: (a, b) => {
        const order = ["Explainers", "System Design", "About"];
        const aIndex = order.findIndex(x => a.displayName.includes(x));
        const bIndex = order.findIndex(x => b.displayName.includes(x));

        if (aIndex !== -1 && bIndex !== -1) return aIndex - bIndex;
        if (aIndex !== -1) return -1;
        return a.displayName.localeCompare(b.displayName);
      },
    }),
  ],
  right: [],
}
