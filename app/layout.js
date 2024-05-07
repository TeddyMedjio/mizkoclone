import { GeistSans } from "geist/font/sans";

import "./globals.css";

export const metadata = {
  title: "UX/UI designer & Frontend dev in Cameroon",
  description:
    "Hello there, I'm N. Jean Claude! I went from designer → agency owner → Passionate about the Web and graphic design,I like to collaborate with people who attach importance to aesthetics, who understand the power of simplicity and who know that a good customer experience is essential.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        content="UX/UI designer & Frontend dev in Cameroon"
        property="og:title"
      />
      <meta
        content="Hello there, I'm N. Jean Claude! I went from designer → agency owner → Passionate about the Web and graphic design,I like to collaborate with people who attach importance to aesthetics, who understand the power of simplicity and who know that a good customer experience is essential."
        name="description"
      />
      <meta
        content="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1715074951/slw8hnlb0tidpevi8tra.jpg"
        property="og:image"
      />
      <meta
        content="UX/UI designer & Frontend dev in Cameroon"
        property="twitter:title"
      />
      <meta
        content="Hello there, I'm N. Jean Claude! I went from designer → agency owner → Passionate about the Web and graphic design,I like to collaborate with people who attach importance to aesthetics, who understand the power of simplicity and who know that a good customer experience is essential."
        property="twitter:description"
      />
      <meta
        content="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1715074951/slw8hnlb0tidpevi8tra.jpg"
        property="twitter:image"
      />
      <meta property="og:type" content="website" />
      <meta content="summary_large_image" name="twitter:card" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <body className={`${GeistSans.className} antialiased`}>{children}</body>
    </html>
  );
}
