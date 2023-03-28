import Toast from 'react-bootstrap/Toast';
import '../styles/MensagemChat.css';
import ToastContainer from 'react-bootstrap/ToastContainer';

function MensagemChat(props) {

    return (
        <div
            aria-live="polite"
            aria-atomic="true"
            className="bg-ligth position-relative"
            style={{ minHeight: '80px' }}
        >
            <ToastContainer className="msgChat" position={props.posicao}>
                <Toast> 
                    <Toast.Header closeButton={false}>
                        <img
                            src="holder.js/20x20?text=%20"
                            className=""
                            alt=""
                        />
                        <strong className="me-auto">{props.nome}</strong>
                        <small>{props.tempo}</small>
                    </Toast.Header>
                    <Toast.Body>{props.mensagem}</Toast.Body>
                </Toast>
            </ToastContainer>
        </div>
    );
}

export default MensagemChat;