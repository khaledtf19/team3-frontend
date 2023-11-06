"use client";

// import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

type OPTIONS = {
  name: string;
  category: {
    Software: string;
    Graphical: string;
  };
  sections: {
    Design: string;
    Logic: string;
    Framework: string;
    DB: string;
  };
};

type Props = {
  options: OPTIONS;
  box?: string;
  fontawesomeIcon?: string;
  list?: string;
  subList?: string;
};

export const DropdownMenu = ({
  options,
  box,
  fontawesomeIcon,
  list,
  subList,
}: Props) => {
  const [cateVal, setCateVal] = useState("Hammam");
  const handleCatVal = (val: string) => {
    setCateVal(val);
  };

  return (
    <div className="group/select-box relative z-30">
      <div
        className={`flex w-40 max-w-full cursor-pointer items-center justify-between border border-[#E9EAF0] p-2 text-xs text-gray-100 transition hover:border-[#FFDDD1] md:w-72 ${cn(
          box,
        )}`}
      >
        <p className="text-gray-500 md:text-sm">{cateVal}</p>
        <FaChevronRight
          className={`cursor-pointer text-[8px] text-gray-900 transition group-hover/select-box:rotate-90  md:text-xs ${cn(
            fontawesomeIcon,
          )}`}
        />
      </div>
      <ul
        className={`duration-400 border-border-[#E9EAF0] relative hidden w-40 max-w-full cursor-pointer border shadow-sm group-hover/select-box:block md:w-72 ${cn(
          list,
        )}`}
      >
        {Object.entries(options).map(([key, value], index) => {
          return (
            <li
              key={index}
              className="group/item p-2 text-gray-700 transition hover:bg-[#FFEEE8] hover:text-gray-900"
              onClick={() => handleCatVal(key)}
            >
              {key}
              {typeof value === "object" ? (
                <FaChevronRight className="float-right mt-1.5 text-end text-[8px] text-gray-900" />
              ) : (
                ""
              )}
              {typeof value === "object" ? (
                <ul
                  className={`absolute -right-[108px] hidden w-24 max-w-full p-1 text-xs  text-gray-700 shadow group-hover/item:block md:-right-[295px] md:w-72 ${cn(
                    subList,
                  )}`}
                >
                  {Object.values(value).map((subCat, index) => {
                    return (
                      <li
                        key={index}
                        className="p-1 text-[12px] transition hover:text-[#FF6636] md:text-sm"
                      >
                        {subCat}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
