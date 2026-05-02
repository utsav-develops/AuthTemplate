export const setThemeColor = (theme: "dark" | "light") => {
  const color = theme === "dark" ? "#0f0f11" : "#ffffff";

  let meta = document.querySelector<HTMLMetaElement>(
    'meta[name="theme-color"]',
  );

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = "theme-color";
    document.head.appendChild(meta);
  }

  meta.content = color;
};
