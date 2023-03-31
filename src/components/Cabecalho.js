import LoginAcess from '../utils/LoginAcess';
import { Link } from 'react-router-dom';
import '../styles/Cabecalho.css'



function Cabecalho(props) {

    return (
        <>
            <div className='cabecalho'>
                <div className='cabecalhoAg'>
                    <h1>{props.titulo}</h1>
                </div>
                <div className='menuSuperior'>
                    <ul class="nav justify-content-end">
                        <li class="nav-item">
                            <a class="nav-link active">
                                <Link to={'/inicio'}>Olá, {LoginAcess.nome}</Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <Link to={'/minhaConta'}>Minha conta </Link>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link">
                                <Link to={'/'}>Sair </Link>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )

}

export default Cabecalho;