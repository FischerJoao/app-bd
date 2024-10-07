import { IconHome, IconUser } from "@tabler/icons-react";
import Link from "next/link"; // Importando o componente Link do Next.js
import MenuItem from "./MenuItem";



export interface MenuProps {
    children: any
}



export default function Menu() {
    return (
        <aside className=" menu w-72 bg-zinc-900 h-screen">
            <nav className="flex flex-col gap-2 py-7">
                <MenuItem icone={IconHome} texto="Início" url="/" />
                <MenuItem icone={IconUser} texto="Cadastro Usuário" url="/usuarios" />
            </nav>
        </aside>
    );
}
