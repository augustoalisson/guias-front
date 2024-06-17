"use cliente" //componente será renderizado apenas no lado Cliente da aplicação

import Usuario from "@/core/Entidade/Usuario";
import { IconeEditar, IconeExcluir } from "../Icones";

interface TabelaProps {
    usuarios: Usuario[];
    usuarioSelecionado?: (usuario: Usuario) => void;
    usuarioExcluido?: (usuario: Usuario) => void;
}

export default function TabelaUsuario(props: TabelaProps) {
    function cabecalho() {
        return (<tr>
            <th className="p-3 text-center">Id</th>
            <th className="p-3 text-left">Nome</th>
            <th className="p-3 text-left">E-mail</th>
            <th className="p-3 text-center">Usuário</th>
            <th className="p-3 text-center">Nível Acesso</th>
            <th className="p-3 text-center">Ações</th>
        </tr>);
    }

    function acoes(usuario: Usuario) {
        return (<td className="p-3 text-center w-1/6">
            {props.usuarioSelecionado ? (<button onClick={() => props.usuarioSelecionado?.(usuario)} className="text-green-600 rounded-full p-2 m-1 hover:bg-gray-100">{IconeEditar}</button>) : (false)}
            {props.usuarioExcluido ? (<button onClick={() => props.usuarioExcluido?.(usuario)} className="text-red-600 rounded-full p-2 m-1 hover:bg-gray-100">{IconeExcluir}</button>) : (false)}
        </td>);
    }

    function dados() {
        return props.usuarios.map((usuario, index) => {
            return (<tr key={usuario.id}>
                <td className="p-3 text-center w-1/6">{usuario.id}</td>
                <td className="p-3 text-left w-auto">{usuario.nome}</td>
                <td className="p-3 text-left w-auto">{usuario.email}</td>
                <td className="p-3 text-center w-auto">{usuario.usuario}</td>
                <td className="p-3 text-center w-1/6">{usuario.nivel_acesso}</td>
                {acoes(usuario)}
            </tr>);

        });
    }

    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="text-gray-200 bg-gray-700">{cabecalho()}</thead>
            <tbody>{dados()}</tbody>
        </table>
    );
}