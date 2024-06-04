import Botao from "@/components/Botao";
import Titulo from "@/components/Titulo";
import TabelaUsuario from "@/components/Usuario/TabelaUsuario";

export default function PaginaUsuario() {
    return (
        <div>
            <Titulo texto="Cadastro de Usuário" />
            <Botao>Novo Usuário</Botao>
            <TabelaUsuario />
        </div>
    );
}