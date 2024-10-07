import { Usuario } from "@prisma/client";

const usuarios: Usuario[] = [
    {
        id: "1",
        email: "joao@gmail.com",
        nome: "João",
        senha: "123456",
        ativo: false
    },
    {
        id: "2",
        email: "joao@hotmail.com",
        nome: "João",
        senha: "123456",
        ativo: false
    },
];

export default usuarios;