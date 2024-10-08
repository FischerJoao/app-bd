import { Usuario } from "@/core/model/Usuario";
import { PrismaClient } from "@prisma/client/extension";

export default class RepositorioUsuario {
    private static db: PrismaClient = new PrismaClient();
    

    static async obterTodos(usuario: any):Promise<Usuario>{
        return await this.db.usuario.findMany();
    }

    static async salvar(usuario: Usuario): Promise<Usuario>{
        return await this.db.usuariio.upsert({
            where: {id: usuario.id},
            update: usuario,
            create: usuario
        })
    }
    static async obterPorId(id: string):Promise<Usuario>{
        return await this.db.usuario.findUnique({where: {id}});
    }

}

//classe que acessa o banco de dados
//classe cria com letra maiuscula