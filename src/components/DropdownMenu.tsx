"use client";

// import type { MouseEvent } from "react";
import { cn } from "@/lib/utils";
import type { Props } from "@/types/DropdownTypes";
import { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export const DropdownMenu = ({
  options,
  box,
  fontawesomeIcon,
  list,
  subList,
  icons,
}: Props) => {
  const [cateVal, setCateVal] = useState("Videos");
  const [index, setIndex] = useState(0);

  const showAndHide = (currentIndex: number): boolean => {
    return index === currentIndex;
  };

  const [showList, setShowList] = useState(false);

  const handleDropdownList = (): void => setShowList(!showList);
  const handleCatVal = (val: string) => {
    handleDropdownList();
    setCateVal(val);
  };
  return (
    <div className="group/select-box relative z-30">
      <div
        className={`flex w-40 max-w-full cursor-pointer items-center justify-between border border-[#E9EAF0] p-2 text-xs text-gray-100 transition hover:border-[#FFDDD1] md:w-72 ${cn(
          box,
        )}`}
        onClick={() => handleCatVal(cateVal)}
      >
        <p className="text-gray-500 md:text-sm">{cateVal}</p>
        <FaChevronRight
          className={`cursor-pointer text-[8px] text-gray-900 transition md:text-xs ${cn(
            fontawesomeIcon,
          )} ${showList ? "rotate-90" : ""}`}
        />
      </div>
      <ul
        className={`duration-400 border-border-[#E9EAF0] relative w-40 max-w-full cursor-pointer border shadow-sm md:w-72 ${cn(
          list,
        )} ${showList ? "block" : "hidden"}`}
      >
        {Object.entries(options).map(([key, value], index) => {
          return (
            <li
              key={index}
              className="group/item p-2 text-gray-700 transition hover:bg-[#FFEEE8] hover:text-gray-900"
              onClick={() => setIndex(index)}
            >
              <i className="mr-2 inline-block text-xs">
                {icons !== undefined ? icons[index] : ""}
              </i>
              <p className="inline-block">{key}</p>

              {typeof value === "object" ? (
                <FaChevronRight className="float-right mt-1.5 text-end text-[8px] text-gray-900" />
              ) : (
                ""
              )}
              {typeof value === "object" ? (
                <ul
                  className={`absolute -right-[108px] w-24 max-w-full p-1 text-xs text-gray-700 shadow md:-right-[295px] md:w-72 ${cn(
                    subList,
                  )} ${showAndHide(index) ? "block" : "hidden"}`}
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
