"use client"
import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "@/utils/api";

import "@/styles/globals.css";
import { Button } from "@/components/atoms/Button";
import { Checkbox } from "@/components/atoms/Checkbox";
import { Input } from "@/components/atoms/Input";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp"

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/atoms/InputOTP"

export function InputOTPPattern() {
  const cells = [...Array(7).keys()]
  return (
    <InputOTP maxLength={8} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
      {cells.map((currentCell) => (
        <InputOTPGroup>
          <InputOTPSlot index={currentCell} />
        </InputOTPGroup>
      )
      )}
    </InputOTP>
  )
}


const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Button variant="default">Button</Button>
      <Checkbox id="terms1" />
      <Input type="email" placeholder="Email" />
      <InputOTPPattern />
    </main>
  );
};

export default api.withTRPC(MyApp);
