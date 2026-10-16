import './Greetings.css'

function Greetings({nome, mensagens = "Seja bem-vindo(a)!"}) {
    return (
        <div className="greetings">
            <span className="greeting__eyebrow">React - primeiros Passos</span>
            <h1>{nome}, {mensagens}</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad repellendus sint quibusdam ratione ducimus? Aspernatur vel provident earum ducimus fugit tempore numquam dolores, eos sed beatae aliquam rerum fuga cupiditate!</p>
        </div>
    );

}

export default Greetings;