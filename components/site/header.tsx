import Image from "next/image";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/site/language-switcher";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
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
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href={`/${locale}`} className="flex items-center gap-3 transition-opacity hover:opacity-80">
          <Image
            src="/brand/nergora-logo.svg"
            alt="Nergora"
            width={36}
            height={36}
            priority
            className="h-9 w-9"
          />

          <div className="hidden sm:block">
            <div className="font-semibold leading-tight text-foreground">Nergora</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-widest font-medium">
              {header.tagline}
            </div>
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Navigation */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={`/${locale}/services`} className={navigationMenuTriggerStyle()}>
                      {header.nav.services}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={`/${locale}/products/cashit`} className={navigationMenuTriggerStyle()}>
                      {header.nav.products}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={`/${locale}/about`} className={navigationMenuTriggerStyle()}>
                      {header.nav.about}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={`/${locale}/blog`} className={navigationMenuTriggerStyle()}>
                      {header.nav.blog}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href={`/${locale}/contact`} className={navigationMenuTriggerStyle()}>
                      {header.nav.contact}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="flex items-center gap-2 border-l border-border/40 pl-4 md:pl-6">
            <LanguageSwitcher locale={locale} />
            <ThemeToggle />
            
            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] sm:w-[350px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 pt-10">
                  <Link href={`/${locale}`} className="flex items-center gap-3 mb-4">
                    <Image
                      src="/brand/nergora-logo.svg"
                      alt="Nergora"
                      width={32}
                      height={32}
                      className="h-8 w-8"
                    />
                    <div className="font-semibold text-lg text-foreground">Nergora</div>
                  </Link>
                  <nav className="flex flex-col gap-2">
                    <Button variant="ghost" className="justify-start text-base" asChild>
                      <Link href={`/${locale}/services`}>{header.nav.services}</Link>
                    </Button>
                    <Button variant="ghost" className="justify-start text-base" asChild>
                      <Link href={`/${locale}/products/cashit`}>{header.nav.products}</Link>
                    </Button>
                    <Button variant="ghost" className="justify-start text-base" asChild>
                      <Link href={`/${locale}/about`}>{header.nav.about}</Link>
                    </Button>
                    <Button variant="ghost" className="justify-start text-base" asChild>
                      <Link href={`/${locale}/blog`}>{header.nav.blog}</Link>
                    </Button>
                    <Button variant="ghost" className="justify-start text-base" asChild>
                      <Link href={`/${locale}/contact`}>{header.nav.contact}</Link>
                    </Button>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
