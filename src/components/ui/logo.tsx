import { useEffect, useState } from "react";
import { useTheme } from "../theme-provider";

export function Logo({ bright = false }: { bright?: boolean }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      {!bright ? (
        <>
          <img
            src={"icons/logo-light.webp"}
            className="rounded-md block dark:hidden"
          />
          <img
            src={"icons/logo-dark.webp"}
            className="rounded-md hidden dark:block"
          />
        </>
      ) : (
        <>
          <img src={"icons/logo-dark.webp"} className="rounded-md" />
        </>
      )}
    </>
  );
}
