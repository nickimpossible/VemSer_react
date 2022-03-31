import Header from "../components/Header";
import Footer from "../components/Footer";
import logo from "../images/404.jpg";

function NotFound() {
    return (
        <>
            <Header />
            <div>
                <h1>Pagina não encontrada</h1>
                <img src={logo} alt="Gato se escondendo em baixo de papeis com a legenda 404 Not Found" />
            </div>
            <Footer />
        </>
    )
}
export default NotFound;