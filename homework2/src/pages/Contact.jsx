function Contact() {
    return (
        <div>
            <h1>Contact Me</h1>
            <form>
                <label >
                    <strong>Nome:</strong>
                    <input type="text" name='name' />
                    <strong>Assunto:</strong>
                    <input type="text" assunto='assunto' />
                    <strong>Digite a mensagem:</strong>
                    <textarea name="mensagem" cols="30" rows="10" />
                </label>
            </form>
        </div>
    )
}
export default Contact;