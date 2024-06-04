export default class Usuario {
    id: number;
    nome: string;
    email: string;
    usuario: string;
    senha: string;
    nivel_acesso: string;

    constructor(nome: string, email: string, usuario: string, senha: string, nivel_acesso: string, id: number = 0) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.usuario = usuario;
        this.senha = senha;
        this.nivel_acesso = nivel_acesso;
    }

    static vazio() {
        return new Usuario("", "", "", "", "")
    }
}