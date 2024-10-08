import { Usuario } from "@/core/model/Usuario";
import Image from 'next/image';

export interface LinhaUsuarioProps {
    usuario: Usuario;
    onClick: (usuario: Usuario) => void;
}

export default function LinhaUsuario(props: LinhaUsuarioProps) {
    return (
        <div className="flex gap-5 bg-zinc-900 gap-2 items-center p-4 rounded-md cursor-pointer hover:bg-zinc-800"
        onClick={() => props.onClick(props.usuario)}>
            <Image
                src="http://source.unsplash.com/random/50x50?avatar"
                alt="avatar"
                width={50}
                height={50}
                className="rounded-full"
            />
            <div className="flex flex-col">
                <span>{props.usuario.nome}</span>
                <span className="text-sm text-zinc-400">{props.usuario.email}</span>
            </div>
        </div>
    );
}
