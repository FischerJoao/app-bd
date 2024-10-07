import { IconHome } from "@tabler/icons-react";
import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemProps {
  icone: ElementType;
  texto: string;
  url: string;
}

function MenuItem({ icone: Icon, texto, url }: MenuItemProps) {
  return (
    <Link href={url} className="flex gap-2 px-4 py-2 hover:bg-zinc-800">
      <div className="flex items-center gap-2">
        <Icon size={24} stroke={1} />
        <span>{texto}</span>
      </div>
    </Link>
  );
}

export default MenuItem;
