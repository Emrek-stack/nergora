import { permanentRedirect } from "next/navigation";

import { isLocale } from "@/lib/i18n";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  permanentRedirect(`/${isLocale(lang) ? lang : "en"}/products/cashit`);
}
