interface BotaoProps {
    children: any;
    className?: string;
    onClick?: () => void;
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={props.onClick} className={`p-4 rounded-x1 bg-green-700 hover:bg-green-600 text-white mb-3 ${props.className}`}>
            {props.children}
        </button>
    );
}