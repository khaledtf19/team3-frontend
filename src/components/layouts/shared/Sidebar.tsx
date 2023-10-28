"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  AiOutlineCreditCard,
  AiOutlineHome,
  AiOutlineMessage,
} from "react-icons/ai";
import { GoSignOut, GoStack } from "react-icons/go";
import {
  IoAddCircleOutline,
  IoSettingsOutline,
  IoStatsChart,
} from "react-icons/io5";

export const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Tab") {
        e.preventDefault();
        setSidebar(true);
        console.log(sidebar);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setSidebar(false);
        console.log(sidebar);
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [sidebar]);

  const activeRoute = (path: string): boolean => {
    return pathname === path;
  };

  return (
    <div
      className={`side-bar fixed top-0 z-20 h-screen w-60 bg-gray-900 ${
        sidebar ? "left-0" : "-left-60"
      } transition-all duration-1000`}
    >
      {/* <ShowAndHide /> */}
      <div className="logo border-b border-white/20 p-4 text-center">
        <h6>LMS website</h6>
      </div>
      <div className="container h-4/5">
        <ul className="py-5 text-white/40 ">
          <li className="w-full">
            <Link
              href="/"
              className={`mb-2 block w-full p-2 pl-4 transition hover:bg-orange-500 hover:text-white ${
                activeRoute("/") ? "bg-orange-500 text-white" : ""
              }`}
            >
              <AiOutlineHome className="mb-1 mr-3 inline-block" />
              Home
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/dashboard"
              className={`mb-2 block w-full p-2 pl-4 transition hover:bg-orange-500 hover:text-white ${
                activeRoute("/dashboard") ? "bg-orange-500 text-white" : ""
              }`}
            >
              <IoStatsChart className="mb-1 mr-3 inline-block" />
              Dashboard
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/create-new-course"
              className={`mb-2 block w-full p-2 pl-4 transition hover:bg-orange-500 hover:text-white ${
                activeRoute("/create-new-course")
                  ? "bg-orange-500 text-white"
                  : ""
              }`}
            >
              <IoAddCircleOutline className="mb-1 mr-3 inline-block" />
              Create new course
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/my-courses"
              className={`mb-2 block w-full p-2 pl-4 transition hover:bg-orange-500 hover:text-white ${
                activeRoute("/my-courses") ? "bg-orange-500 text-white" : ""
              }`}
            >
              <GoStack className="mb-1 mr-3 inline-block" />
              My Courses
            </Link>
          </li>
          <li className="w-full">
            <Link
              href="/earning"
              className={`mb-2 block w-full p-2 pl-4 transition hover:bg-orange-500 hover:text-white ${
                activeRoute("/earning") ? "bg-orange-500 text-white" : ""
              }`}
            >
              <AiOutlineCreditCard className="mb-1 mr-3 inline-block" />
              Earning
            </Link>
          </li>
          <li className="relative w-full">
            <Link
              href="/message"
              className={`mb-2 block w-full p-2 pl-4 transition hover:bg-orange-500 hover:text-white ${
                activeRoute("/message") ? "bg-orange-500 text-white" : ""
              }`}
            >
              <AiOutlineMessage className="mb-1 mr-3 inline-block" />
              Message
            </Link>
            <p className="notification absolute right-5 top-1/4 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
              99+
            </p>
          </li>
          <li className="w-full">
            <Link
              href="/settings"
              className={`mb-2 block w-full p-2 pl-4 transition hover:bg-orange-500 hover:text-white ${
                activeRoute("/settings") ? "bg-orange-500 text-white" : ""
              }`}
            >
              <IoSettingsOutline className="mb-1 mr-3 inline-block" />
              Settings
            </Link>
          </li>
        </ul>
      </div>
      <Link
        href=""
        className="block w-full p-2 px-5 text-white/20 hover:bg-orange-500 hover:text-white"
      >
        <GoSignOut className="mb-1 mr-3 inline-block" />
        Sign out
      </Link>
    </div>
  );
};
