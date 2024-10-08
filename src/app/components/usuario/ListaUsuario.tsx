import usuarios from "@/app/data/constants/usuarios";
import LinhaUsuario from "./LinhaUsuario";

export default function ListaUsuario() {
    return (
        <div className="flex flex-col p-1 gap-5 ">{usuarios.map((usuario, i) => {
            return <LinhaUsuario key={usuario.id} usuario={usuario} />
        })}</div>
    )
}  