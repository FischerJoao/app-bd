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
        email: "maria@hotmail.com",
        nome: "Maria",
        senha: "abcdef",
        ativo: true
    },
    {
        id: "3",
        email: "carlos@yahoo.com",
        nome: "Carlos",
        senha: "senha123",
        ativo: true
    },
    {
        id: "4",
        email: "ana@outlook.com",
        nome: "Ana",
        senha: "senha789",
        ativo: false
    },
    {
        id: "5",
        email: "pedro@gmail.com",
        nome: "Pedro",
        senha: "123abc",
        ativo: true
    },
];

export default usuarios;
