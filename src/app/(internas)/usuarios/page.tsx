'use client'
import Pagina from "@/app/components/template/Pagina";
import Titulo from "@/app/components/template/Titulo";
import FormularioUsuario from "@/app/components/usuario/FormularioUsuario";
import ListaUsuario from "@/app/components/usuario/ListaUsuario";
import Backend from "@/backend";
import { Usuario } from "@/core/model/Usuario";
import { IconUser } from "@tabler/icons-react";
import { useState } from "react";

export default function Page() {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [usuario, setUsuario] = useState<Usuario | null>(null);

    function salvar() {
        if (!usuario) return;
        Backend.usuarios.salvar(usuario);
    }

    // Função para lidar com as mudanças no formulário
    function handleUsuarioChange(usuarioParcial: Partial<Usuario>) {
        setUsuario((prevUsuario) => ({
            ...prevUsuario,
            ...usuarioParcial,
        }) as Usuario);
    }

    return (
        <Pagina className="flex flex-col gap-10">
            <Titulo icone={IconUser} principal="Usuários" secundario="Cadastro de Usuários" />
            {usuario ? (
                <FormularioUsuario 
                    usuario={usuario} 
                    onChange={handleUsuarioChange}
                    salvar={salvar}
                    cancelar={() => setUsuario(null)} 
                />
            ) : (
                <ListaUsuario onClick={setUsuario} />
            )}
        </Pagina>
    );
}
