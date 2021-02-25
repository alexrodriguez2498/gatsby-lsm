module.exports = {
  //-- SITE SETTINGS -----
  author: "@lsmcompany",
  siteTitle: "Lsm Company",
  siteShortTitle: "Lsm.", // Used as logo text in header, footer, and splash screen
  siteDescription:
    "The best effective software solutions for your business, always at your call!",
  siteUrl: "https://lsmcompany.com",
  siteLanguage: "en_US",
  siteIcon: "content/favicon.png", // Relative to gatsby-config file
  seoTitleSuffix: "Lsm Company", // SEO title syntax will be e.g. "Imprint - {seoTitleSuffix}"

  // -- THEME SETTINGS -----
  colors: {
    lightTheme: {
      primary: "#000000",
      secondary: "#CDF3E1",
      tertiary: "#F2F2F2",
      text: "#000000",
      subtext: "#555555",
      background: "#FFFFFF",
      card: "#FFFFFF",
      scrollBar: "rgba(0, 0, 0, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
    darkTheme: {
      primary: "#FAFAFA",
      secondary: "#2A2926",
      tertiary: "#252525",
      text: "rgba(255, 255, 255, 0.87)",
      subtext: "#AAAAAA",
      background: "#121212",
      card: "#1C1C1C",
      scrollBar: "rgba(255, 255, 255, 0.5)",
      boxShadow: "rgba(0, 0, 0, 0.16)",
      boxShadowHover: "rgba(0, 0, 0, 0.32)",
    },
  },
  fonts: {
    primary: "Roboto, Arial, sans-serif",
  },

  //-- SOCIAL MEDIA SETTINGS -----
  // There are icons available for the following platforms:
  // Medium, GitHub, LinkedIn, XING, Behance
  socialMedia: [
    {
      name: "Xing",
      url: "https://www.xing.com/profile/Konstantin_Muenster",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/konstantin-muenster/",
    },
    {
      name: "Medium",
      url: "https://medium.com/@konstantin.muenster",
    },
    {
      name: "Github",
      url: "https://github.com/konstantinmuenster",
    },
    {
        name: "Behance",
        url: "https://www.behance.net/konstanmnster"
    },
  ],

  //-- NAVIGATION SETTINGS -----
  navLinks: {
    menu: [
      {
        name: "Productos",
        url: "/#productos",
      },
      {
        name: "Paquetes",
        url: "/#paquetes",
      },
      {
        name: "Projectos",
        url: "/#projectos",
      },
    ],
    button: {
      name: "Contactanos",
      url: "/#contactanos",
    },
  },
  footerLinks: [
    {
      name: "Privacy",
      url: "/privacy",
    },
    {
      name: "Imprint",
      url: "/imprint",
    },
  ],
}
