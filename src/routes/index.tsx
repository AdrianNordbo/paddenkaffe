import { createFileRoute } from "@tanstack/react-router";

import { useReveal } from "@/hooks/use-reveal";
import photoOven from "@/assets/photo-oven.json";
import photoPizzas from "@/assets/photo-pizzas.json";
import photoCutting from "@/assets/photo-cutting.json";
import paddenPizza from "@/assets/padden-pizza.png.asset.json";
import frogChef from "@/assets/frog-chef.json";
import frogWine from "@/assets/frog-wine.json";
import frogIcecream from "@/assets/frog-icecream.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Padden Kaffe – Kaffe og vedfyrt pizza i Bergen" },
      {
        name: "description",
        content:
          "Padden Kaffe på Mannsverk i Bergen: nybrygget kaffe og vedfyrt pizza i nabolaget. Se meny, åpningstider og finn veien til oss.",
      },
      { property: "og:title", content: "Padden Kaffe – Kaffe og vedfyrt pizza i Bergen" },
      {
        property: "og:description",
        content:
          "Nabolagets kaffebar og vedfyrte pizzeria på Mannsverk 2, Bergen. Meny, åpningstider og veibeskrivelse.",
      },
    ],
  }),
  component: Index,
});

const ADDRESS = "Mannsverk 2, 5094 Bergen";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const openingHours = [
  { day: "Mandag", hours: "Stengt", closed: true },
  { day: "Tirsdag", hours: "11–17" },
  { day: "Onsdag", hours: "11–17" },
  { day: "Torsdag", hours: "11–22" },
  { day: "Fredag", hours: "11–21" },
  { day: "Lørdag", hours: "11–21" },
  { day: "Søndag", hours: "11–17" },
];

const coffeeMenu = [
  { name: "Filterkaffe", desc: "Dagens brygg, alltid ferskt", price: "39" },
  { name: "Americano", desc: "Dobbel espresso og varmt vann", price: "45" },
  { name: "Cortado", desc: "Espresso med litt melk", price: "49" },
  { name: "Flat white", desc: "Fyldig og silkemyk", price: "55" },
  { name: "Cappuccino", desc: "Klassikeren, med skum", price: "55" },
  { name: "Iskaffe", desc: "Kald og frisk, perfekt på benken ute", price: "59" },
];

const pizzaMenu = [
  { name: "Margherita", desc: "", price: "225" },
  { name: "Bufo Skinke", desc: "", price: "235" },
  { name: "Grønne Padde", desc: "", price: "245" },
  { name: "Paddens Picante", desc: "", price: "255" },
  { name: "Paddemyrens Spekeskinke", desc: "", price: "260" },
  { name: "Bufo Bianco", desc: "", price: "265" },
];

const drinksMenu = [
  { name: "Naturvin, glass", desc: "Roterende utvalg fra små produsenter", price: "125" },
  { name: "Øl fra fat", desc: "Lokalt bryggeri", price: "99" },
  { name: "Softis", desc: "Padden sin favoritt", price: "45" },
];

function Index() {
  useReveal();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <Menu />
        <Gallery />
        <Visit />
      </main>
      <SiteFooter />
    </div>
  );
}

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="container-pk flex items-center justify-between py-3">
        <a href="#topp" className="font-display text-lg font-extrabold tracking-tight text-primary">
          Padden Kaffe
        </a>
        <nav className="hidden gap-6 text-sm font-medium sm:flex">
          <a className="hover:text-accent" href="#historien">
            Historien
          </a>
          <a className="hover:text-accent" href="#meny">
            Meny
          </a>
          <a className="hover:text-accent" href="#galleri">
            Galleri
          </a>
          <a className="hover:text-accent" href="#besok">
            Besøk oss
          </a>
        </nav>
        <a
          href="#besok"
          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 sm:text-sm"
        >
          Åpningstider
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="topp" className="bg-background py-14 sm:py-20">
      <div className="container-pk grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Mannsverk · Bergen
          </p>
          <h1 className="text-5xl leading-[0.95] sm:text-7xl">Padden Kaffe</h1>
          <p className="mt-5 max-w-md text-xl text-muted-foreground">
            Kaffe og vedfyrt pizza i nabolaget.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">
              ★ 4,7 av 5 · 13 anmeldelser på Google
            </span>
            <span className="rounded-full border border-border px-4 py-2 text-sm font-medium">
              100–200 kr per person
            </span>
          </div>
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="#meny"
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
            >
              Se menyen
            </a>
            <a
              href="#besok"
              className="rounded-full border border-primary px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Åpningstider
            </a>
          </div>
        </div>

        <figure className="overflow-hidden rounded-3xl border border-border bg-secondary">
          <img
            src={photoOven.url}
            alt="Ansatt med pizzaspade henter vedfyrt pizza ut av ovnen på Padden Kaffe"
            width={523}
            height={653}
            className="mx-auto h-auto w-full max-w-[523px] object-contain"
          />
        </figure>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section id="historien" className="bg-secondary py-20 sm:py-28">
      <div className="container-pk grid items-center gap-12 md:grid-cols-2">
        <div data-reveal className="reveal">
          <h2 className="text-4xl sm:text-5xl">Padden holder til på hjørnet</h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            Vi er et lite nabolagssted på Mannsverk. Om morgenen lukter det nytrukket kaffe, om
            ettermiddagen tar vedovnen over. Ingen store planer — bare deig som får hvile lenge nok,
            råvarer vi liker, og folk som stikker innom fordi det er hjemme rundt hjørnet.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Padden selv er sjefen på kjøkkenet. Han har bart, forkle og sterke meninger om
            skorpe. Resten av oss gjør stort sett som han sier.
          </p>
        </div>
        <div data-reveal className="reveal rounded-3xl bg-background p-6 sm:p-10">
          <img
            src={frogChef.url}
            alt="Illustrasjon av Padden som kokk foran en vedfyrt pizzaovn"
            className="mx-auto w-full max-w-sm"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

function MenuList({ title, items }: { title: string; items: typeof coffeeMenu }) {
  return (
    <div data-reveal className="reveal">
      <h3 className="text-2xl">{title}</h3>
      <ul className="mt-6 space-y-5">
        {items.map((item) => (
          <li key={item.name} className="flex items-baseline gap-4">
            <div className="min-w-0">
              <p className="font-semibold">{item.name}</p>
              {item.desc ? <p className="text-sm text-muted-foreground">{item.desc}</p> : null}
            </div>
            <span
              className="h-px flex-1 self-center border-b border-dashed border-border"
              aria-hidden="true"
            />
            <span className="font-display text-lg font-bold">{item.price},-</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Menu() {
  return (
    <section id="meny" className="bg-background py-20 sm:py-28">
      <div className="container-pk">
        <h2 data-reveal className="reveal text-4xl sm:text-5xl">
          Meny
        </h2>
        <p data-reveal className="reveal mt-3 max-w-lg text-muted-foreground">
          Kaffe hele dagen. Pizza torsdag og fredag fra kl. 15, lørdag og søndag fra kl. 13.
        </p>

        <div className="mt-14 grid gap-14 md:grid-cols-2">
          <MenuList title="Kaffe" items={coffeeMenu} />
          <figure
            data-reveal
            className="reveal overflow-hidden rounded-3xl border border-border bg-secondary"
          >
            <img
              src={paddenPizza.url}
              alt="Padden Pizza meny: Margherita, Bufo Skinke, Grønne Padde, Paddens Picante, Paddemyrens Spekeskinke og Bufo Bianco, med froskekokken ved pizzaovnen"
              className="mx-auto h-auto w-full max-w-[480px] object-contain"
              loading="lazy"
            />
          </figure>
        </div>

        <div className="my-16 flex flex-col items-center gap-6 border-y border-border py-12 text-center">
          <img
            src={frogWine.url}
            alt="Illustrasjon av to padder som skåler med vin på en benk"
            className="w-full max-w-md"
            loading="lazy"
          />
          <p className="max-w-md font-display text-xl">
            Og et glass til pizzaen? Det ordner Padden og kompisen hans.
          </p>
        </div>

        <div className="max-w-xl">
          <MenuList title="Vin, øl og søtt" items={drinksMenu} />
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const shots = [
    { src: photoCutting.url, alt: "Pizza med squash og ruccola deles opp med pizzahjul" },
    { src: photoPizzas.url, alt: "To ferdigstekte pizzaer på trefjøl i kjøkkenet" },
    { src: photoOven.url, alt: "Ansatt i grønt Padden Kaffe-forkle ved pizzaovnen" },
  ];

  return (
    <section id="galleri" className="bg-secondary py-20 sm:py-28">
      <div className="container-pk">
        <h2 data-reveal className="reveal text-4xl sm:text-5xl">
          Fra kjøkkenet
        </h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shots.map((shot) => (
            <figure
              key={shot.src}
              data-reveal
              className="reveal overflow-hidden rounded-3xl bg-background"
            >
              <img
                src={shot.src}
                alt={shot.alt}
                loading="lazy"
                className="mx-auto h-auto w-full max-w-[584px] object-contain"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="besok" className="bg-background py-20 sm:py-28">
      <div className="container-pk">
        <h2 data-reveal className="reveal text-4xl sm:text-5xl">
          Besøk oss
        </h2>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div data-reveal className="reveal space-y-8">
            <div>
              <h3 className="text-xl">Adresse</h3>
              <p className="mt-2 text-lg text-muted-foreground">{ADDRESS}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                ★ 4,7 av 5 (13 anmeldelser) · Prisnivå 100–200 kr per person
              </p>
            </div>

            <div>
              <h3 className="text-xl">Åpningstider</h3>
              <dl className="mt-4 divide-y divide-border overflow-hidden rounded-2xl bg-card">
                {openingHours.map((row) => (
                  <div key={row.day} className="flex items-center justify-between px-5 py-3">
                    <dt className="font-medium">{row.day}</dt>
                    <dd
                      className={
                        row.closed ? "text-muted-foreground" : "font-display text-lg font-bold"
                      }
                    >
                      {row.hours}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <h3 className="text-xl">Følg oss</h3>
              <a
                href="https://www.instagram.com/paddenkaffe/"
                target="_blank"
                rel="noreferrer noopener"
                className="mt-3 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                @paddenkaffe på Instagram
              </a>
            </div>
          </div>

          <div data-reveal className="reveal overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Kart til Padden Kaffe, Mannsverk 2, 5094 Bergen"
              src={MAPS_EMBED}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full lg:h-full lg:min-h-[520px]"
            />
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-5 text-center">
          <img
            src={frogIcecream.url}
            alt="Illustrasjon av Padden som spiser softis"
            className="w-48 sm:w-56"
            loading="lazy"
          />
          <p className="max-w-sm font-display text-xl">
            Kom innom og heng litt. Padden tar med softis.
          </p>
        </div>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="bg-primary py-12 text-primary-foreground">
      <div className="container-pk flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-2xl font-extrabold">Padden Kaffe</p>
          <p className="mt-1 text-sm text-primary-foreground/80">{ADDRESS}</p>
        </div>
        <div className="flex flex-col gap-1 text-sm text-primary-foreground/80 sm:text-right">
          <a
            className="hover:text-primary-foreground"
            href="https://www.instagram.com/paddenkaffe/"
            target="_blank"
            rel="noreferrer noopener"
          >
            Instagram @paddenkaffe
          </a>
          <span>Tir–søn · Mandag stengt</span>
          <span>© {new Date().getFullYear()} Padden Kaffe</span>
        </div>
      </div>
    </footer>
  );
}
