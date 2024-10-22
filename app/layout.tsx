import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";
import NavLeft from "../components/NavLeft";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://medjio.me"),
  keywords: [
    "cameroun frontend dev, frontend developpeur",
    "cameroun graphic designer",
    "frontend dev",
    "Nextjs",
    "Reactjs",
    "web developer",
    "developpeur web",
    "photoshop, flyers, site internet, site ecommerce",
    "freelance",
  ],
  title: {
    default: "UX/UI designer & Frontend dev",
    template: "%s | N. Jean Claude",
  },
  openGraph: {
    description:
      "Bonjour, je m'appelle N. Jean Claude ! Je suis passé de designer → Passionné par le Web et le graphisme, j'aime collaborer avec des gens qui attachent de l'importance à l'esthétique, qui comprennent le pouvoir de la simplicité et qui savent qu'une bonne expérience client est essentielle.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <meta name="author" content="Nganmedjio Jean Claude" />
      {/* <!-- HTML Meta Tags --> */}
      <title>
        UX/UI designer & Frontend and i am accessible everywhere in the world
      </title>
      <meta
        name="description"
        content="UX/UI designer & Frontend and i am accessible everywhere in the world"
      />

      {/* <!-- Facebook Meta Tags --> */}
      <meta property="og:url" content="https://medjio.me" />
      <meta property="og:type" content="website" />
      <meta
        property="og:title"
        content="UX/UI designer & Frontend and i am accessible everywhere in the world"
      />
      <meta
        property="og:description"
        content="UX/UI designer & Frontend and i am accessible everywhere in the world"
      />
      <meta
        property="og:image"
        content="https://opengraph.b-cdn.net/production/images/8de4980a-58dd-4905-b1b3-a2803eb0df84.jpg?token=ys4YGJV7wRsN84L6b_bZL965Hkzisr6dMxkSDgWtA3A&height=630&width=1200&expires=33263780076"
      />

      {/* <!-- Twitter Meta Tags --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="medjio.me" />
      <meta property="twitter:url" content="https://medjio.me" />
      <meta
        name="twitter:title"
        content="UX/UI designer & Frontend and i am accessible everywhere in the world"
      />
      <meta
        name="twitter:description"
        content="UX/UI designer & Frontend and i am accessible everywhere in the world"
      />
      <meta
        name="twitter:image"
        content="https://opengraph.b-cdn.net/production/images/8de4980a-58dd-4905-b1b3-a2803eb0df84.jpg?token=ys4YGJV7wRsN84L6b_bZL965Hkzisr6dMxkSDgWtA3A&height=630&width=1200&expires=33263780076"
      />

      {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
      <body className={`${GeistSans.className} antialiased flex `}>
        <NavLeft />
        <div className="w-full overflow-x-hidden">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
