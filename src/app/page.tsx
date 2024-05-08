"use client";
import AppButton from "@/component/ButtonComponent";
import Button from "@/component/ButtonComponent";
import { CheckBoxIcon, CheckIcon } from "@/component/CustomIconComponents";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-white p-24">
      <AppButton text="Button" bgColor="bg-red-400" />

      <CheckBoxIcon />
    </main>
  );
}
