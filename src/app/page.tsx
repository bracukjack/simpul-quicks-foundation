"use client";
import AppButton from "@/component/ButtonComponent";
import Button from "@/component/ButtonComponent";
import ChatRoom from "@/component/ChatRoomComponent";
import {
  CheckBoxIcon,
  CheckIcon,
  ReaderBookIcon,
} from "@/component/CustomIconComponents";
import DateInput from "@/component/DateInputComponent";
import Loading from "@/component/LoadingComponent";
import NavBar from "@/component/NavBarComponent";
import SearchBar from "@/component/SearchBarComponent";
import SelectInput from "@/component/SelectInputComponent";
import TextInput from "@/component/TypeBarComponent";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push("/inbox");
  }, []);
  return (
    <main className="flex h-full flex-col items-center justify-between bg-white p-24"></main>
  );
}
