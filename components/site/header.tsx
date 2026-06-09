import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { ThemeToggle } from "@/components/site/theme-toggle";
import type { Dictionary, Locale } from "@/lib/i18n";

export function Header({
  dictionary,
  locale,
}: {
  dictionary: Dictionary;
  locale: Locale;
}) {
  const { header } = dictionary;

  return (
    <header className="border-b border-border/80 bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link href={`/${locale}`} className="flex items-center gap-3">
          <Image
            src="/brand/nergora-logo.svg"
            alt="Nergora"
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />

          <div>
            <div className="font-semibold">Nergora</div>
            <div className="text-xs text-muted-foreground">
              {header.tagline}
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <Link href={`/${locale}/services`}>{header.nav.services}</Link>
            <Link href={`/${locale}/products/cashit`}>
              {header.nav.products}
            </Link>
            <Link href={`/${locale}/about`}>{header.nav.about}</Link>
            <Link href={`/${locale}/blog`}>{header.nav.blog}</Link>
            <Link href={`/${locale}/contact`}>{header.nav.contact}</Link>
          </nav>
          <LanguageSwitcher locale={locale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
