import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Aditeya Nanda",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "aditeyananda.com",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#ffffff",      // Stark white background
          lightgray: "#f0f2f5",  // Subtle gray for borders
          gray: "#9ca3af",       // Mid-gray for secondary text/meta
          darkgray: "#4b5563",   // Darker gray for less important text
          dark: "#111827",       // Slate gray for primary text
          secondary: "#000000",  // Solid black for headings
          tertiary: "#fbda03",   // Yellow hover state
          highlight: "rgba(251, 218, 3, 0.4)", // Thick yellow highlight with opacity
          textHighlight: "#fbda03",            // Solid yellow highlight
        },
        darkMode: {
          light: "#111111",      // Deep near-black background
          lightgray: "#262626",  // Subtle dark borders
          gray: "#737373",
          darkgray: "#a3a3a3",
          dark: "#f9fafb",       // Off-white for primary text
          secondary: "#ffffff",  // Stark white for headings
          tertiary: "#fbda03",
          highlight: "rgba(251, 218, 3, 0.15)",
          textHighlight: "#fbda03",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
