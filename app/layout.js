import { GeistSans } from "geist/font/sans";
import "../styles/globals.css";

export const metadata = {
  title: {
    default: "UX/UI designer & Frontend dev",
    template: "%s | N. Jean Claude",
  },

  description:
    "Hello there, I'm N. Jean Claude! I went from designer → agency owner → Passionate about the Web and graphic design,I like to collaborate with people who attach importance to aesthetics, who understand the power of simplicity and who know that a good customer experience is essential.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="author" content="Nganmedjio Jean Claude" />
      <meta
        property="og:title"
        content="UX/UI designer & Frontend dev based in Cameroon"
      />
      <meta
        name="og:description"
        content="Hello there, I'm N. Jean Claude! I went from designer → agency owner → Passionate about the Web and graphic design,I like to collaborate with people who attach importance to aesthetics, who understand the power of simplicity and who know that a good customer experience is essential."
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1715899357/qvdstxpszkesyfgwlaua.jpg"
      />
      <meta property="og:site_name" content="Medjio" />
      <meta property="og:locale" content="en" />
      <meta property="og:type" content="website" />
      <meta
        property="twitter:title"
        content="UX/UI designer & Frontend and i am accessible everywhere in
        the world"
      />
      <meta
        property="twitter:description"
        content="Hello there, I'm N. Jean Claude! I went from designer → agency owner → Passionate about the Web and graphic design,I like to collaborate with people who attach importance to aesthetics, who understand the power of simplicity and who know that a good customer experience is essential."
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1715899357/qvdstxpszkesyfgwlaua.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="keywords"
        content="Medjio, ux designer, ui designer, web developer, Next.Js, React.js, Front-end, Visual designer, JavaScript, UX.designer, Tailwind CSS, Graphic.designer, freelancer"
      />

      <meta name="twitter:author" content="@Nganmedjio_jean" />
      <meta name="twitter:site" content="@Nganmedjio_jean" />

      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
