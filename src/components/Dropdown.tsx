"use client";

import Link from "next/link";
import { useState } from "react";
import { ItemMenu } from "./Navbar";

interface Props {
  item: ItemMenu;
}

export default function Dropdown(props: Props) {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuItems = item?.children ? item.children : [];

  const toggle = () => {
    setIsOpen((old) => !old);
  };

  const transClass = isOpen ? "flex" : "hidden";

  return (
    <>
      <div className="relative">
        <button className="hover:text-blue-400" onClick={toggle}>
          {item.title}
        </button>
        <div className={`absolute top-8 z-30 w-[250px] min-h-[300px] flex flex-col py-4 bg-zinc-400 rounded-md ${transClass}`}>
          {menuItems.map((menuItem, index) => {
            return (
              <Link key={index} className={`hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1`} href={menuItem?.route || ""} onClick={toggle}>
                {menuItem.title}
              </Link>
            );
          })}
        </div>
      </div>
      {isOpen ? <div className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40" onClick={toggle}></div> : null}
    </>
  );
}
