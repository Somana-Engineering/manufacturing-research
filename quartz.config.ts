import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Somana Manufacturing Research",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-US",
    baseUrl: "somana-engineering.github.io/manufacturing-research",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Inter",
        body: "Inter",
        code: "JetBrains Mono",
      },
      colors: {
        lightMode: {
          light: "#faf9f6",
          lightgray: "#e6e4df",
          gray: "#9e9b94",
          darkgray: "#3d3b38",
          dark: "#1a1918",
          secondary: "#2d7a68",
          tertiary: "#4a9e8a",
          highlight: "rgba(45, 122, 104, 0.08)",
          textHighlight: "#4a9e8a33",
        },
        darkMode: {
          light: "#141516",
          lightgray: "#2a2c2e",
          gray: "#6e7175",
          darkgray: "#cdc9c2",
          dark: "#ece8e1",
          secondary: "#5cc4a6",
          tertiary: "#84d4be",
          highlight: "rgba(92, 196, 166, 0.1)",
          textHighlight: "#5cc4a633",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting(),
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
      Plugin.ContentIndex(),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
