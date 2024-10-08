import { Usuario } from "@/core/model/Usuario";
import InputTexto from "../shared/InputTexto";

export interface FormularioUsuarioProps {
    usuario: Partial<Usuario>
    onChange: (usuario:Partial<Usuario>) => void
    salvar:() => void
    cancelar:() => void
}

export default function FormularioUsuario(props: FormularioUsuarioProps) {
    return (
        <div className="flex flex-col gap-5">
            <InputTexto label="Nome" type="text" value={props.usuario.nome} onChange={e =>{
                props.onChange?.({...props.usuario, nome: e.target.value})
            }} />

            <InputTexto label="E-mail" value={props.usuario.email} onChange={e =>{
                props.onChange?.({...props.usuario, email: e.target.value})
            }} />
            <InputTexto label="Senha" type="password" value={props.usuario.senha} onChange={e =>{
                props.onChange?.({...props.usuario, senha: e.target.value})
            }} />
            <div className="flex gap-3 justify-center p-3">
                <button className="bg-blue-500 hover:bg-zinc-800 rounded-md p-3" onClick={props.salvar}>Salvar</button>
                <button className="hover:bg-zinc-800 rounded-md p-3"onClick={props.cancelar}>Cancelar</button>
            </div>


        </div>
    )
}