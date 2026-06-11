import type { Dictionary } from "@/lib/i18n";
import { Separator } from "@/components/ui/separator";

export function Footer({ dictionary }: { dictionary: Dictionary }) {
  return (
    <footer className="bg-background">
      <Separator />
      <div className="container mx-auto max-w-7xl px-6 py-12 lg:px-8 flex flex-col items-center justify-center">
        <div className="flex justify-center mb-6">
          <div className="font-semibold text-xl tracking-tight text-foreground">Nergora</div>
        </div>
        <p className="text-center text-sm leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Nergora. {dictionary.footer.rights}
        </p>
      </div>
    </footer>
  );
}
