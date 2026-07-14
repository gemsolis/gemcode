import { Oswald, Poppins, Covered_By_Your_Grace } from "next/font/google";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const scriptAccent = Covered_By_Your_Grace({
  variable: "--font-covered-by-your-grace",
  subsets: ["latin"],
  weight: "400",
});

export default function AuthorityAgencyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${oswald.variable} ${poppins.variable} ${scriptAccent.variable} font-authority-body`}
    >
      {children}
    </div>
  );
}
