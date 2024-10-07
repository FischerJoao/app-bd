import { Usuario } from "@/core/model/Usuario"

export interface LinhaUsuarioProps{
 usuario: Usuario   
}
export default function LinhaUsuario(props: LinhaUsuarioProps){
    return (   
<div className="flex gap-2 p-2">
    <span>{props.usuario.nome}</span>
</div>
     )
}