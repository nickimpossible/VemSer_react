import Header from "../components/Header";

import "./Contact.css"

function Contact() {
    return (
        <>
            <Header />
            <div className="contact-container">
                <h1>Contato</h1>
                <form>
                    <p>Nome:</p>
                    <input type="text" name='name' />
                    <p>Assunto:</p>
                    <input type="text" assunto='assunto' />
                    <p>Digite a mensagem:</p>
                    <textarea name="mensagem" cols="30" rows="10" />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </>
    )
}
export default Contact;