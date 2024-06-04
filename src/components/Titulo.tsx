interface TituloProps {
    texto: string;
}

export default function Titulo(props: TituloProps) {
    return (
        <div>
            <h1 className="text-4x1 mt-2 font-bold">{props.texto}</h1>
            <div className="w-full h-1 bg-gray-300 my-3"></div>
        </div>
    );
}