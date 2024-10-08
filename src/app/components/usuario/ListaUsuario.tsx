import usuarios from "@/app/data/constants/usuarios";
import LinhaUsuario from "./LinhaUsuario";
import { Usuario } from "@/core/model/Usuario";


export interface ListaUsuarioProps{
    onClick: (usuario: Usuario) => void;    
}


export default function ListaUsuario(props: ListaUsuarioProps) {
    return (
        <div className="flex flex-col p-1 gap-5 ">{usuarios.map((usuario, i) => {
            return <LinhaUsuario key={usuario.id} usuario={usuario} onClick={props.onClick} />
        })}</div>
    )
}  