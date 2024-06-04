import { IconeEditar, IconeExcluir } from "../Icones";

export default function TabelaUsuario() {
    return (
        <table className="w-full rounded-xl overflow-hidden">
            <thead className="text-gray-200 bg-gray-700">
                <tr>
                    <th className="p-3 text-center">Id</th>
                    <th className="p-3 text-left">Nome</th>
                    <th className="p-3 text-left">E-mail</th>
                    <th className="p-3 text-center">Usuário</th>
                    <th className="p-3 text-center">Nível Acesso</th>
                    <th className="p-3 text-center">Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="p-3 text-center w-1/6">1</td>
                    <td className="p-3 text-left w-auto">a</td>
                    <td className="p-3 text-left w-auto">b</td>
                    <td className="p-3 text-center w-auto">c</td>
                    <td className="p-3 text-center w-1/6">d</td>
                    <td className="p-3 text-center w-1/6">
                        <button className="text-green-600 rounded-full p-2 m-1 hover:bg-gray-100">{IconeEditar}</button>
                        <button className="text-red-600 rounded-full p-2 m-1 hover:bg-gray-100">{IconeExcluir}</button>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}