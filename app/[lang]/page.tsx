import { ContactCta } from "@/components/site/contact-cta";
import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { ProductsSection } from "@/components/site/products-section";
import { ServicesSection } from "@/components/site/services-section";
import { WhySection } from "@/components/site/why-section";
import { getDictionary, isLocale } from "@/lib/i18n";
import { notFound } from "next/navigation";

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const dictionary = getDictionary(lang);

  return (
    <>
      <Header dictionary={dictionary} locale={lang} />
      <main className="flex-1">
        <Hero dictionary={dictionary} locale={lang} />
        <ProductsSection dictionary={dictionary} />
        <ServicesSection dictionary={dictionary} />
        <WhySection dictionary={dictionary} />
        <ContactCta dictionary={dictionary} locale={lang} />
      </main>
      <Footer dictionary={dictionary} />
    </>
  );
}
