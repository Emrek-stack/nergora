export const locales = ["en", "tr", "nl"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const languageNames: Record<Locale, string> = {
  en: "English",
  tr: "Türkçe",
  nl: "Nederlands",
};

export const dictionaries = {
  en: {
    metadata: {
      title: "Nergora",
      description: "Enterprise software platforms for scalable SaaS.",
    },
    header: {
      tagline: "Enterprise Software",
      nav: {
        services: "Services",
        products: "Products",
        about: "About",
        blog: "Blog",
        contact: "Contact",
      },
    },
    footer: {
      rights: "All rights reserved.",
    },
    home: {
      hero: {
        location: "Amsterdam • Istanbul",
        title: "Enterprise software",
        titleAccent: "built for scalable SaaS.",
        description:
          "Nergora builds modern software platforms for identity, automation, remote operations and multi-tenant SaaS solutions.",
        primaryCta: "Explore Products",
        secondaryCta: "Contact Us",
        consoleTitle: "nergora platform console",
        consoleItems: [
          ["Tenant provisioning", "Live"],
          ["Identity & permissions", "Secured"],
          ["Remote operations", "Connected"],
          ["Audit pipeline", "Ready"],
        ],
      },
      products: {
        eyebrow: "Products",
        title: "Platform products for serious software teams.",
        description:
          "Nergora focuses on infrastructure-grade software: SaaS foundations, identity systems and remote operations.",
        items: [
          {
            name: "Minima Platform",
            description:
              "A modular foundation for building multi-tenant SaaS products with identity, permissions and extensibility.",
          },
          {
            name: "Minima Identity",
            description:
              "Secure authentication, authorization and tenant-aware access control for enterprise software.",
          },
          {
            name: "Minima Remote",
            description:
              "Remote operations infrastructure for support teams, IT providers and managed service businesses.",
          },
        ],
      },
      services: {
        eyebrow: "Services",
        title: "We design and build software foundations.",
        description:
          "From SaaS architecture to identity infrastructure, Nergora helps teams build scalable, secure and maintainable software systems.",
        items: [
          "SaaS architecture & platform engineering",
          "Multi-tenant application development",
          "Identity, authorization and permission systems",
          "Remote support and operations platforms",
          "Custom enterprise software development",
          "Technical audits and modernization",
        ],
      },
      why: {
        eyebrow: "Why Nergora",
        title: "Built for companies that need more than a website.",
        items: [
          {
            title: "SaaS-first mindset",
            text: "We build platforms with tenants, permissions, identity, modules and operations in mind from day one.",
          },
          {
            title: "Enterprise-grade architecture",
            text: "Clean boundaries, extensible modules, auditability and long-term maintainability are part of the foundation.",
          },
          {
            title: "European operating model",
            text: "Nergora is designed to serve modern software teams across Türkiye and Europe.",
          },
        ],
      },
      contactCta: {
        eyebrow: "Start building with Nergora",
        title: "Need a scalable SaaS platform or custom enterprise software?",
        description:
          "Let’s talk about your architecture, product roadmap or internal software platform.",
        cta: "Contact Nergora",
      },
    },
    servicesPage: {
      hero: {
        eyebrow: "Services",
        title: "Enterprise software support, DevOps and custom development.",
        description:
          "Nergora helps companies build, operate and modernize critical software systems - from internal enterprise platforms to multi-tenant SaaS products.",
        primaryCta: "Talk to Nergora",
        secondaryCta: "View Products",
      },
      services: [
        {
          title: "Enterprise System Support",
          description:
            "Long-term technical support for critical business systems, internal platforms and production software.",
          points: [
            "Production issue analysis",
            "Performance investigation",
            "Legacy system stabilization",
            "Architecture review",
            "Technical documentation",
          ],
        },
        {
          title: "DevOps & Cloud Operations",
          description:
            "Infrastructure, deployment and operational support for modern software teams.",
          points: [
            "CI/CD pipeline setup",
            "Docker and containerization",
            "Linux server operations",
            "Monitoring and logging",
            "Release automation",
          ],
        },
        {
          title: "Custom Software Development",
          description:
            "Design and development of business-critical web applications, APIs and SaaS products.",
          points: [
            ".NET and ASP.NET Core applications",
            "React and Next.js frontends",
            "Multi-tenant SaaS platforms",
            "Internal business tools",
            "API integrations",
          ],
        },
        {
          title: "Platform Engineering",
          description:
            "Software foundations for companies that need scalable, maintainable and extensible systems.",
          points: [
            "Identity and permission systems",
            "Modular application architecture",
            "Background jobs and automation",
            "Audit and activity tracking",
            "Developer tooling",
          ],
        },
      ],
      engagement: {
        eyebrow: "Engagement model",
        title: "Support model for serious companies.",
        description:
          "We work as a technical partner for companies that need reliable engineering capacity, production support and architecture-level ownership.",
        items: [
          "Monthly enterprise support retainers",
          "Project-based custom software delivery",
          "Architecture and technical audit engagements",
          "DevOps and production operations support",
        ],
      },
      industries: {
        eyebrow: "Industries",
        title:
          "Built for operational, industrial and software-driven companies.",
        items: [
          "Manufacturing",
          "Industrial operations",
          "Logistics",
          "B2B SaaS",
          "Technical service companies",
          "Enterprise IT teams",
        ],
      },
      cta: {
        eyebrow: "Need technical ownership?",
        title: "Let’s discuss your system, infrastructure or product roadmap.",
        description:
          "Nergora can support your team with enterprise software development, DevOps, production operations and platform architecture.",
        cta: "Contact Nergora",
      },
      techStack: {
        eyebrow: "Technologies",
        title: "Modern DevOps & Cloud Native Ecosystem",
        description:
          "We provide comprehensive system administration, Kubernetes management, CI/CD automation, GitOps, and DevSecOps services using industry-standard tools.",
      },
    },
    contactPage: {
      hero: {
        eyebrow: "Contact",
        title: "Let’s build serious software together.",
        description:
          "Talk to Nergora about SaaS platforms, identity systems, remote operations, enterprise software or technical architecture.",
      },
      reach: {
        title: "Reach us",
        description:
          "Send a message and we’ll get back to you with a focused, technical response.",
        emailLabel: "Email",
        turkeyPhoneLabel: "Türkiye Phone",
        europePhoneLabel: "Europe Phone",
        locationsLabel: "Locations",
        locations: "Amsterdam • Istanbul • Alaplı",
      },
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "you@company.com",
        message: "Message",
        messagePlaceholder: "Tell us what you want to build.",
        submit: "Send Message",
      },
      locations: {
        eyebrow: "Locations",
        openInMaps: "Open in Google Maps",
        offices: [
          {
            city: "Amsterdam",
            label: "European Operations",
            description:
              "For European partnerships, SaaS products and international business development.",
            address: "Reguliersbreestraat 42-C, 1017 CN Amsterdam, The Netherlands",
            mapQuery:
              "Reguliersbreestraat 42-C, 1017 CN Amsterdam, The Netherlands",
          },
          {
            city: "Istanbul",
            label: "Business & Delivery",
            description:
              "For enterprise software projects, product delivery and customer relationships.",
            address:
              "Kuştepe Mahallesi, Mecidiyeköy Yolu Caddesi, No:12, Trump Towers Kule 2, Kat 10, Şişli / İstanbul",
            mapQuery:
              "Kuştepe Mahallesi, Mecidiyeköy Yolu Caddesi, No:12, Trump Towers Kule 2, Kat 10, Şişli İstanbul",
          },
          {
            city: "Alaplı",
            label: "Engineering Base",
            description:
              "Where focused engineering, platform development and product research happen.",
            address: "Alaplı Merkez, Zonguldak, Türkiye",
            mapQuery: "Alaplı Merkez Zonguldak Türkiye",
          },
        ],
      },
    },
  },
  tr: {
    metadata: {
      title: "Nergora",
      description: "Ölçeklenebilir SaaS için kurumsal yazılım platformları.",
    },
    header: {
      tagline: "Kurumsal Yazılım",
      nav: {
        services: "Hizmetler",
        products: "Ürünler",
        about: "Hakkımızda",
        blog: "Blog",
        contact: "İletişim",
      },
    },
    footer: {
      rights: "Tüm hakları saklıdır.",
    },
    home: {
      hero: {
        location: "Amsterdam • Istanbul",
        title: "Kurumsal yazılım",
        titleAccent: "ölçeklenebilir SaaS için.",
        description:
          "Nergora; kimlik, otomasyon, uzaktan operasyon ve çok kiracılı SaaS çözümleri için modern yazılım platformları geliştirir.",
        primaryCta: "Ürünleri İncele",
        secondaryCta: "İletişime Geç",
        consoleTitle: "nergora platform konsolu",
        consoleItems: [
          ["Tenant kurulumu", "Canlı"],
          ["Kimlik ve yetkiler", "Güvende"],
          ["Uzaktan operasyon", "Bağlı"],
          ["Denetim hattı", "Hazır"],
        ],
      },
      products: {
        eyebrow: "Ürünler",
        title: "Ciddi yazılım ekipleri için platform ürünleri.",
        description:
          "Nergora; SaaS temelleri, kimlik sistemleri ve uzaktan operasyon gibi altyapı seviyesinde yazılımlara odaklanır.",
        items: [
          {
            name: "Minima Platform",
            description:
              "Kimlik, yetki ve genişletilebilirlik özellikleriyle çok kiracılı SaaS ürünleri geliştirmek için modüler temel.",
          },
          {
            name: "Minima Identity",
            description:
              "Kurumsal yazılımlar için güvenli kimlik doğrulama, yetkilendirme ve tenant farkındalıklı erişim kontrolü.",
          },
          {
            name: "Minima Remote",
            description:
              "Destek ekipleri, BT sağlayıcıları ve yönetilen hizmet şirketleri için uzaktan operasyon altyapısı.",
          },
        ],
      },
      services: {
        eyebrow: "Hizmetler",
        title: "Yazılım temellerini tasarlar ve geliştiririz.",
        description:
          "SaaS mimarisinden kimlik altyapısına kadar Nergora, ekiplerin ölçeklenebilir, güvenli ve sürdürülebilir sistemler kurmasına yardımcı olur.",
        items: [
          "SaaS mimarisi ve platform mühendisliği",
          "Çok kiracılı uygulama geliştirme",
          "Kimlik, yetkilendirme ve izin sistemleri",
          "Uzaktan destek ve operasyon platformları",
          "Özel kurumsal yazılım geliştirme",
          "Teknik denetim ve modernizasyon",
        ],
      },
      why: {
        eyebrow: "Neden Nergora",
        title: "Bir web sitesinden fazlasına ihtiyaç duyan şirketler için.",
        items: [
          {
            title: "SaaS odaklı yaklaşım",
            text: "Platformları ilk günden tenant, yetki, kimlik, modül ve operasyon ihtiyaçlarını düşünerek kurarız.",
          },
          {
            title: "Kurumsal mimari",
            text: "Temiz sınırlar, genişletilebilir modüller, denetlenebilirlik ve uzun vadeli bakım kolaylığı temelin parçasıdır.",
          },
          {
            title: "Avrupa çalışma modeli",
            text: "Nergora, Türkiye ve Avrupa’daki modern yazılım ekiplerine hizmet etmek için tasarlanmıştır.",
          },
        ],
      },
      contactCta: {
        eyebrow: "Nergora ile geliştirmeye başlayın",
        title:
          "Ölçeklenebilir bir SaaS platformuna veya özel kurumsal yazılıma mı ihtiyacınız var?",
        description:
          "Mimariniz, ürün yol haritanız veya iç yazılım platformunuz hakkında konuşalım.",
        cta: "Nergora ile İletişime Geç",
      },
    },
    servicesPage: {
      hero: {
        eyebrow: "Hizmetler",
        title: "Kurumsal yazılım desteği, DevOps ve özel geliştirme.",
        description:
          "Nergora, şirketlerin iç kurumsal platformlardan çok kiracılı SaaS ürünlerine kadar kritik yazılım sistemlerini geliştirmesine, işletmesine ve modernize etmesine yardımcı olur.",
        primaryCta: "Nergora ile Konuş",
        secondaryCta: "Ürünleri Gör",
      },
      services: [
        {
          title: "Kurumsal Sistem Desteği",
          description:
            "Kritik iş sistemleri, iç platformlar ve üretim yazılımları için uzun vadeli teknik destek.",
          points: [
            "Üretim sorun analizi",
            "Performans incelemesi",
            "Eski sistem stabilizasyonu",
            "Mimari değerlendirme",
            "Teknik dokümantasyon",
          ],
        },
        {
          title: "DevOps ve Bulut Operasyonları",
          description:
            "Modern yazılım ekipleri için altyapı, dağıtım ve operasyon desteği.",
          points: [
            "CI/CD pipeline kurulumu",
            "Docker ve konteynerleştirme",
            "Linux sunucu operasyonları",
            "İzleme ve loglama",
            "Yayın otomasyonu",
          ],
        },
        {
          title: "Özel Yazılım Geliştirme",
          description:
            "İş açısından kritik web uygulamaları, API’ler ve SaaS ürünlerinin tasarımı ve geliştirilmesi.",
          points: [
            ".NET ve ASP.NET Core uygulamaları",
            "React ve Next.js frontendleri",
            "Çok kiracılı SaaS platformları",
            "İç iş araçları",
            "API entegrasyonları",
          ],
        },
        {
          title: "Platform Mühendisliği",
          description:
            "Ölçeklenebilir, sürdürülebilir ve genişletilebilir sistemlere ihtiyaç duyan şirketler için yazılım temelleri.",
          points: [
            "Kimlik ve yetki sistemleri",
            "Modüler uygulama mimarisi",
            "Arka plan işleri ve otomasyon",
            "Denetim ve aktivite takibi",
            "Geliştirici araçları",
          ],
        },
      ],
      engagement: {
        eyebrow: "Çalışma modeli",
        title: "Ciddi şirketler için destek modeli.",
        description:
          "Güvenilir mühendislik kapasitesi, üretim desteği ve mimari seviyede sahiplik isteyen şirketler için teknik ortak olarak çalışırız.",
        items: [
          "Aylık kurumsal destek anlaşmaları",
          "Proje bazlı özel yazılım teslimi",
          "Mimari ve teknik denetim çalışmaları",
          "DevOps ve üretim operasyon desteği",
        ],
      },
      industries: {
        eyebrow: "Sektörler",
        title: "Operasyonel, endüstriyel ve yazılım odaklı şirketler için.",
        items: [
          "Üretim",
          "Endüstriyel operasyonlar",
          "Lojistik",
          "B2B SaaS",
          "Teknik servis şirketleri",
          "Kurumsal BT ekipleri",
        ],
      },
      cta: {
        eyebrow: "Teknik sahipliğe mi ihtiyacınız var?",
        title:
          "Sisteminizi, altyapınızı veya ürün yol haritanızı konuşalım.",
        description:
          "Nergora; kurumsal yazılım geliştirme, DevOps, üretim operasyonları ve platform mimarisiyle ekibinizi destekleyebilir.",
        cta: "Nergora ile İletişime Geç",
      },
      techStack: {
        eyebrow: "Teknolojiler",
        title: "Modern DevOps ve Cloud Native Ekosistemi",
        description:
          "Endüstri standardı araçları kullanarak kapsamlı sistem yönetimi, Kubernetes yönetimi, CI/CD otomasyonu, GitOps ve DevSecOps hizmetleri ile destek veriyoruz.",
      },
    },
    contactPage: {
      hero: {
        eyebrow: "İletişim",
        title: "Ciddi yazılımları birlikte geliştirelim.",
        description:
          "SaaS platformları, kimlik sistemleri, uzaktan operasyon, kurumsal yazılım veya teknik mimari için Nergora ile konuşun.",
      },
      reach: {
        title: "Bize ulaşın",
        description:
          "Mesaj gönderin; size odaklı ve teknik bir yanıtla geri dönelim.",
        emailLabel: "E-posta",
        turkeyPhoneLabel: "Türkiye Telefonu",
        europePhoneLabel: "Avrupa Telefonu",
        locationsLabel: "Lokasyonlar",
        locations: "Amsterdam • Istanbul • Alaplı",
      },
      form: {
        name: "İsim",
        namePlaceholder: "Adınız",
        email: "E-posta",
        emailPlaceholder: "siz@sirket.com",
        message: "Mesaj",
        messagePlaceholder: "Ne geliştirmek istediğinizi anlatın.",
        submit: "Mesaj Gönder",
      },
      locations: {
        eyebrow: "Lokasyonlar",
        openInMaps: "Google Maps’te aç",
        offices: [
          {
            city: "Amsterdam",
            label: "Avrupa Operasyonları",
            description:
              "Avrupa iş ortaklıkları, SaaS ürünleri ve uluslararası iş geliştirme için.",
            address: "Reguliersbreestraat 42-C, 1017 CN Amsterdam, The Netherlands",
            mapQuery:
              "Reguliersbreestraat 42-C, 1017 CN Amsterdam, The Netherlands",
          },
          {
            city: "Istanbul",
            label: "İş ve Teslimat",
            description:
              "Kurumsal yazılım projeleri, ürün teslimi ve müşteri ilişkileri için.",
            address:
              "Kuştepe Mahallesi, Mecidiyeköy Yolu Caddesi, No:12, Trump Towers Kule 2, Kat 10, Şişli / İstanbul",
            mapQuery:
              "Kuştepe Mahallesi, Mecidiyeköy Yolu Caddesi, No:12, Trump Towers Kule 2, Kat 10, Şişli İstanbul",
          },
          {
            city: "Alaplı",
            label: "Mühendislik Üssü",
            description:
              "Odaklı mühendislik, platform geliştirme ve ürün araştırmasının yürütüldüğü yer.",
            address: "Alaplı Merkez, Zonguldak, Türkiye",
            mapQuery: "Alaplı Merkez Zonguldak Türkiye",
          },
        ],
      },
    },
  },
  nl: {
    metadata: {
      title: "Nergora",
      description: "Enterprise softwareplatforms voor schaalbare SaaS.",
    },
    header: {
      tagline: "Enterprise Software",
      nav: {
        services: "Diensten",
        products: "Producten",
        about: "Over ons",
        blog: "Blog",
        contact: "Contact",
      },
    },
    footer: {
      rights: "Alle rechten voorbehouden.",
    },
    home: {
      hero: {
        location: "Amsterdam • Istanbul",
        title: "Enterprise software",
        titleAccent: "voor schaalbare SaaS.",
        description:
          "Nergora bouwt moderne softwareplatforms voor identity, automatisering, remote operations en multi-tenant SaaS-oplossingen.",
        primaryCta: "Bekijk producten",
        secondaryCta: "Neem contact op",
        consoleTitle: "nergora platform console",
        consoleItems: [
          ["Tenant provisioning", "Live"],
          ["Identity & permissions", "Beveiligd"],
          ["Remote operations", "Verbonden"],
          ["Audit pipeline", "Gereed"],
        ],
      },
      products: {
        eyebrow: "Producten",
        title: "Platformproducten voor serieuze softwareteams.",
        description:
          "Nergora richt zich op infrastructuurwaardige software: SaaS-fundamenten, identity-systemen en remote operations.",
        items: [
          {
            name: "Minima Platform",
            description:
              "Een modulaire basis voor multi-tenant SaaS-producten met identity, permissions en uitbreidbaarheid.",
          },
          {
            name: "Minima Identity",
            description:
              "Veilige authenticatie, autorisatie en tenant-bewuste toegangscontrole voor enterprise software.",
          },
          {
            name: "Minima Remote",
            description:
              "Remote operations-infrastructuur voor supportteams, IT-dienstverleners en managed service-bedrijven.",
          },
        ],
      },
      services: {
        eyebrow: "Diensten",
        title: "We ontwerpen en bouwen softwarefundamenten.",
        description:
          "Van SaaS-architectuur tot identity-infrastructuur helpt Nergora teams schaalbare, veilige en onderhoudbare systemen te bouwen.",
        items: [
          "SaaS-architectuur en platform engineering",
          "Multi-tenant applicatieontwikkeling",
          "Identity-, autorisatie- en permissiesystemen",
          "Remote support- en operationsplatformen",
          "Maatwerk enterprise softwareontwikkeling",
          "Technische audits en modernisering",
        ],
      },
      why: {
        eyebrow: "Waarom Nergora",
        title: "Gebouwd voor bedrijven die meer nodig hebben dan een website.",
        items: [
          {
            title: "SaaS-first mindset",
            text: "We bouwen platformen vanaf dag een met tenants, permissions, identity, modules en operations in gedachten.",
          },
          {
            title: "Enterprise-grade architectuur",
            text: "Heldere grenzen, uitbreidbare modules, auditability en langdurige onderhoudbaarheid horen bij de basis.",
          },
          {
            title: "Europees werkmodel",
            text: "Nergora is ontworpen voor moderne softwareteams in Türkiye en Europa.",
          },
        ],
      },
      contactCta: {
        eyebrow: "Start met bouwen met Nergora",
        title: "Een schaalbaar SaaS-platform of maatwerk enterprise software nodig?",
        description:
          "Laten we praten over je architectuur, productroadmap of interne softwareplatform.",
        cta: "Neem contact op met Nergora",
      },
    },
    servicesPage: {
      hero: {
        eyebrow: "Diensten",
        title: "Enterprise softwaresupport, DevOps en maatwerkontwikkeling.",
        description:
          "Nergora helpt bedrijven kritieke softwaresystemen te bouwen, beheren en moderniseren - van interne enterprise platformen tot multi-tenant SaaS-producten.",
        primaryCta: "Praat met Nergora",
        secondaryCta: "Bekijk producten",
      },
      services: [
        {
          title: "Enterprise System Support",
          description:
            "Langdurige technische ondersteuning voor kritieke bedrijfssystemen, interne platformen en productiesoftware.",
          points: [
            "Analyse van productie-issues",
            "Performance-onderzoek",
            "Stabilisatie van legacy-systemen",
            "Architectuurreview",
            "Technische documentatie",
          ],
        },
        {
          title: "DevOps & Cloud Operations",
          description:
            "Infrastructuur-, deployment- en operationele ondersteuning voor moderne softwareteams.",
          points: [
            "CI/CD pipeline setup",
            "Docker en containerisatie",
            "Linux server operations",
            "Monitoring en logging",
            "Release-automatisering",
          ],
        },
        {
          title: "Maatwerk Softwareontwikkeling",
          description:
            "Ontwerp en ontwikkeling van bedrijfskritische webapplicaties, API’s en SaaS-producten.",
          points: [
            ".NET en ASP.NET Core applicaties",
            "React en Next.js frontends",
            "Multi-tenant SaaS-platformen",
            "Interne business tools",
            "API-integraties",
          ],
        },
        {
          title: "Platform Engineering",
          description:
            "Softwarefundamenten voor bedrijven die schaalbare, onderhoudbare en uitbreidbare systemen nodig hebben.",
          points: [
            "Identity- en permissiesystemen",
            "Modulaire applicatiearchitectuur",
            "Background jobs en automatisering",
            "Audit- en activity tracking",
            "Developer tooling",
          ],
        },
      ],
      engagement: {
        eyebrow: "Samenwerkingsmodel",
        title: "Supportmodel voor serieuze bedrijven.",
        description:
          "We werken als technische partner voor bedrijven die betrouwbare engineeringcapaciteit, productiesupport en architectuurverantwoordelijkheid nodig hebben.",
        items: [
          "Maandelijkse enterprise support retainers",
          "Projectmatige maatwerksoftwarelevering",
          "Architectuur- en technische audittrajecten",
          "DevOps- en productieoperationssupport",
        ],
      },
      industries: {
        eyebrow: "Sectoren",
        title: "Gebouwd voor operationele, industriële en softwaregedreven bedrijven.",
        items: [
          "Manufacturing",
          "Industrial operations",
          "Logistiek",
          "B2B SaaS",
          "Technische servicebedrijven",
          "Enterprise IT-teams",
        ],
      },
      cta: {
        eyebrow: "Technisch eigenaarschap nodig?",
        title: "Laten we je systeem, infrastructuur of productroadmap bespreken.",
        description:
          "Nergora kan je team ondersteunen met enterprise softwareontwikkeling, DevOps, productieoperations en platformarchitectuur.",
        cta: "Neem contact op met Nergora",
      },
      techStack: {
        eyebrow: "Technologieën",
        title: "Modern DevOps & Cloud Native Ecosysteem",
        description:
          "Wij bieden uitgebreid systeembeheer, Kubernetes-management, CI/CD-automatisering, GitOps en DevSecOps-diensten met behulp van industriestandaard tools.",
      },
    },
    contactPage: {
      hero: {
        eyebrow: "Contact",
        title: "Laten we samen serieuze software bouwen.",
        description:
          "Praat met Nergora over SaaS-platformen, identity-systemen, remote operations, enterprise software of technische architectuur.",
      },
      reach: {
        title: "Bereik ons",
        description:
          "Stuur een bericht en we reageren met een gerichte, technische reactie.",
        emailLabel: "E-mail",
        turkeyPhoneLabel: "Telefoon Türkiye",
        europePhoneLabel: "Telefoon Europa",
        locationsLabel: "Locaties",
        locations: "Amsterdam • Istanbul • Alaplı",
      },
      form: {
        name: "Naam",
        namePlaceholder: "Je naam",
        email: "E-mail",
        emailPlaceholder: "jij@bedrijf.com",
        message: "Bericht",
        messagePlaceholder: "Vertel ons wat je wilt bouwen.",
        submit: "Bericht versturen",
      },
      locations: {
        eyebrow: "Locaties",
        openInMaps: "Openen in Google Maps",
        offices: [
          {
            city: "Amsterdam",
            label: "Europese Operaties",
            description:
              "Voor Europese partnerships, SaaS-producten en internationale business development.",
            address: "Reguliersbreestraat 42-C, 1017 CN Amsterdam, The Netherlands",
            mapQuery:
              "Reguliersbreestraat 42-C, 1017 CN Amsterdam, The Netherlands",
          },
          {
            city: "Istanbul",
            label: "Business & Delivery",
            description:
              "Voor enterprise softwareprojecten, productlevering en klantrelaties.",
            address:
              "Kuştepe Mahallesi, Mecidiyeköy Yolu Caddesi, No:12, Trump Towers Kule 2, Kat 10, Şişli / İstanbul",
            mapQuery:
              "Kuştepe Mahallesi, Mecidiyeköy Yolu Caddesi, No:12, Trump Towers Kule 2, Kat 10, Şişli İstanbul",
          },
          {
            city: "Alaplı",
            label: "Engineering Base",
            description:
              "Waar gefocuste engineering, platformontwikkeling en productonderzoek plaatsvinden.",
            address: "Alaplı Merkez, Zonguldak, Türkiye",
            mapQuery: "Alaplı Merkez Zonguldak Türkiye",
          },
        ],
      },
    },
  },
} as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function localizePath(pathname: string, locale: Locale) {
  const segments = pathname.split("/");
  const [, maybeLocale, ...rest] = segments;

  if (maybeLocale && isLocale(maybeLocale)) {
    return `/${[locale, ...rest].join("/")}`;
  }

  return `/${locale}${pathname === "/" ? "" : pathname}`;
}
