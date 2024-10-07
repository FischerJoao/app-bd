import usuarios from "@/app/data/constants/usuarios";
import LinhaUsuario from "./LinhaUsuario";

export default function ListaUsuario() {
    return (
        <div className="flex flex-col gap-4 ">{usuarios.map((usuario, i) => {
            return <LinhaUsuario key={usuario.id} usuario={usuario} />
        })}</div>
    )
}  