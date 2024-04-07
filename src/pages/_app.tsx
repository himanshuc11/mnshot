import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { Button } from "@/components/atoms/Button";
import { Checkbox } from "@/components/atoms/Checkbox";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Button variant="default">Button</Button>
      <Checkbox id="terms1" />
    </main>
  );
};

export default api.withTRPC(MyApp);
