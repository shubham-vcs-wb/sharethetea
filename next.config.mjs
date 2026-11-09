import nextra from "nextra";

const withNextra = nextra({
    theme: "nextra-theme-docs",
    themeConfig: "./theme.config.jsx",
});

// Static export so Netlify can serve the "out" folder with no server.
export default withNextra({
    output: "export",
    images: { unoptimized: true },
});
