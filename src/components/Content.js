

export default function Content() {
    const perguntas = [
        {pergunta: "O que é jsx?", resposta: "Uma extensão de linguagem do JavaScript"},
        {pergunta: " O React é __", resposta: " uma biblioteca JavaScript para construção de interfaces"},
        {pergunta: " Componentes devem iniciar com __ ", resposta: "letra maiúscula"},
        {pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {pergunta: "O ReactDOM nos ajuda __ ", resposta: " interagindo com a DOM para colocar componentes React na mesma"},
        {pergunta: " Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {pergunta: " Usamos props para __ ", resposta: "passar diferentes informações para componentes "},
        {pergunta: " Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
        
    ]
    return(
         <>
         <div className="navbar">
            <img src="assets/img/zapLogo.png"></img>
            <h2>ZapRecall</h2>
         </div>
        <div className="content">
           {perguntas.map((pergunta, index) => (<><div><h3>Pergunta {index +1}</h3><img src="./assets/img/Vector.png"></img></div>
            </>))}
            
        </div>
        <div className="done">
        0/4 CONCLUÍDOS
        </div>
        </>
      
    );
}