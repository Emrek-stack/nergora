"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { languageNames, locales, localizePath, type Locale } from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();

  return (
    <div className="flex items-center rounded-lg border border-border bg-card p-0.5">
      {locales.map((item) => (
        <Link
          key={item}
          href={localizePath(pathname, item)}
          hrefLang={item}
          aria-label={languageNames[item]}
          className={
            item === locale
              ? "rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground"
              : "rounded-md px-2.5 py-1 text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          }
        >
          {item.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
