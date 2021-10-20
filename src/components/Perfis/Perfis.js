import './Perfis.css'
import { useHistory } from "react-router";

export default function Perfis({perfil}) {
    const history = useHistory();
    const handleClick = () => {
        history.push(`/home`);
    }
    return (
        <>
        <div className="perfis-container-component" onClick={handleClick}>
            <img src={perfil.imagem}/>
            <h1>{perfil.titulo}</h1>
        </div>
        </>
    )
}
