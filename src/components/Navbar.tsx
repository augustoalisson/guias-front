"use client";

import Link from "next/link";
import Dropdown from "./Dropdown";

export interface ItemMenu {
  title: string;
  route?: string;
  children?: ItemMenu[];
}

const itensMenu: ItemMenu[] = [
  {
    title: "Home",
    route: "/",
  },
  {
    title: "Cadastros",
    children: [
      {
        title: "Pessoa",
        route: "/pessoa",
      },
      {
        title: "Prestador",
        route: "/prestador",
      },
      {
        title: "Cliente",
        route: "/cliente",
      },
      {
        title: "Plano",
        route: "/plano",
      },
      {
        title: "Procedimento",
        route: "/procedimento",
      },
      {
        title: "Status do Cliente",
        route: "/status-cliente",
      },
      {
        title: "Status da Guia",
        route: "/status-guia",
      },
      {
        title: "Usuário",
        route: "/usuario",
      },
    ],
  },
  {
    title: "Emissão de Guia",
    route: "/guia",
  },
];

export default function Navbar() {
  return (
    <header className="flex gap-10 items-center bg-zinc-200 py-4 px-2 w-full">
      <Link href="/" className="text-gray-800 font-bold text-xl">
        Guias
      </Link>
      <div className="flex gap-5 items-center text-gray-700 ml-5">
        {itensMenu.map((item, index) => {
          return item.hasOwnProperty("children") ? (
            <Dropdown key={index} item={item} />
          ) : (
            <Link key={index} className={`hover:text-gray-500`} href={item?.route || ""}>
              {item.title}
            </Link>
          );
        })}
      </div>
    </header>
  );
}
