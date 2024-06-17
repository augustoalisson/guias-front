"use client" //componente será renderizado apenas no lado Cliente da aplicação

import Botao from "@/components/Botao";
import Titulo from "@/components/Titulo";
import TabelaUsuario from "@/components/Usuario/TabelaUsuario";
import Usuario from "@/core/Entidade/Usuario";
import { useEffect, useState } from "react";

export default function PaginaUsuario() {
    /*
    const usuarios = [
        new Usuario("Fernando", "fernando@gaffo", "gaffo", "aaa", 'ADMIN', 1),
        new Usuario("jose", "jose@couve", "josedascouve", "aaa", 'ADMIN', 2),
        new Usuario("Fernando2", "fernando@gaffo2", "gaffo2", "aaa", 'ADMIN', 3)
    ];
    */

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    useEffect(() => {
        async function getUsuarios() {
            const response = await fetch("http://localhost:8080/usuarios");
            const data = await response.json();
            setUsuarios(data);
        }

        getUsuarios();
    });

    function usuarioSelecionado(usuario: Usuario) {
        console.log("Selecionar", usuario.nome)
    }

    async function usuarioExcluido(usuario: Usuario) {
        await fetch(`http://localhost:8080/usuarios/${usuario.id}`, { method: "DELETE" });

        setUsuarios(
            usuarios.filter((tmpUsuario) => {
                tmpUsuario.id !== usuario.id;
            })
        )
    }

    return (
        <div>
            <Titulo texto="Cadastro de Usuário" />
            <Botao>Novo Usuário</Botao>
            <TabelaUsuario usuarios={usuarios}
                usuarioSelecionado={usuarioSelecionado}
                usuarioExcluido={usuarioExcluido} />
        </div>
    );
}