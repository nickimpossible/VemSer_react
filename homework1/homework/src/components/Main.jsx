import triforceLogo from "../images/triforce.jpg";

function Main() {
    return (
        <main className="container">
            <h1>Estamos aprendendo HTML e Css com o melhor professor de todos</h1>
            <ul>
                <li>
                    <img src={triforceLogo} alt="Simbolo triforce da franquia legend of zelda" width="100" />
                    <span>triforce 1</span>
                </li>
                <li>
                    <img src={triforceLogo} alt="Simbolo triforce da franquia legend of zelda" width="100" />
                    <span>triforce 2</span>
                </li>
                <li>
                    <img src={triforceLogo} alt="Simbolo triforce da franquia legend of zelda" width="100" />
                    <span>triforce 3</span>
                </li>
            </ul>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam magnam enim sapiente, eius velit ipsam nihil quod. Numquam nesciunt assumenda molestias veniam temporibus voluptate maxime quisquam quos? Maxime labore ipsa quas, amet velit ducimus voluptates veritatis dignissimos deleniti, nesciunt, nemo nisi fugit recusandae ex assumenda dolor quidem eius laudantium. Consequatur.</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo ad exercitationem voluptates repellat, obcaecati tempore dolores veniam veritatis fuga corporis! Cupiditate praesentium deserunt sapiente, quisquam doloremque ex vitae voluptatem aspernatur fugit aliquid nihil ducimus autem debitis, quo eius nesciunt iste mollitia ratione! Sed pariatur aspernatur rem, nisi velit reiciendis, atque labore aut nam, consectetur mollitia nihil ullam ipsa cum modi? Tempora eveniet incidunt voluptate beatae? Molestias libero esse blanditiis quisquam.</p>
        </main>
    );
}
export default Main;