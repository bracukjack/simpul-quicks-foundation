"use client";

import { use, useState } from "react";
import AppButton from "./ButtonComponent";
import {
  BookMarksIcon,
  DuplicateIcon,
  ReaderBookIcon,
  UserIcon,
} from "./CustomIconComponents";
import Link from "next/link";

const NavBar = () => {
  const [activeMenu, setActiveMenu] = useState("inbox");

  const handleMenuClick = (menuId: any) => {
    setActiveMenu(menuId);
  };

  return (
    <div className="mr-5 flex gap-x-10">
      {/* Inbox menu */}
      <div>
        {/* Use Link component for navigation */}
        <Link href="/inbox" className={activeMenu === "inbox" ? "active" : ""}>
          <div
            className={`${
              activeMenu === "inbox"
                ? "bg-PriWhite  h-fit w-fit rounded-full p-1"
                : ""
            }`}
          >
            {" "}
            <AppButton
              rounded="rounded-full"
              className={`${
                activeMenu !== "inbox"
                  ? "transform transition duration-300 hover:-translate-x-1"
                  : ""
              }`}
              startIcon={<DuplicateIcon className={`text-black`} />}
              color={activeMenu === "inbox" ? "secondary" : "primary"}
              onClick={() => handleMenuClick("inbox")}
            />
          </div>
        </Link>
      </div>

      {/* Task menu */}
      <div>
        {/* Use Link component for navigation */}
        <Link href="/task" className={activeMenu === "task" ? "active" : ""}>
          <div
            className={`${
              activeMenu === "task"
                ? "bg-PriWhite  h-fit w-fit rounded-full p-1"
                : ""
            }`}
          >
            <AppButton
              rounded="rounded-full"
              className={`${
                activeMenu !== "task"
                  ? "transform transition duration-300 hover:translate-x-1"
                  : ""
              }`}
              startIcon={<ReaderBookIcon className={`text-black`} />}
              color={activeMenu === "task" ? "secondary" : "primary"}
              onClick={() => handleMenuClick("task")}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
