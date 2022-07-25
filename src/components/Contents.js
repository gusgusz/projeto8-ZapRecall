import  React  from "react";
import  ReactDOM  from "react-dom";


export default function Contents() {

    
    

    const perguntas = [
        {pergunta: "O que é jsx?", resposta: "Uma extensão de linguagem do JavaScript"},
        {pergunta: " O React é __", resposta: " uma biblioteca JavaScript para construção de interfaces"},
        {pergunta: " Componentes devem iniciar com __ ", resposta: "letra maiúscula"},
        {pergunta: "Podemos colocar __ dentro do JSX", resposta: "expressões"},
        {pergunta: "O ReactDOM nos ajuda __ ", resposta: " interagindo com a DOM para colocar componentes React na mesma"},
        {pergunta: " Usamos o npm para __ ", resposta: "gerenciar os pacotes necessários e suas dependências"},
        {pergunta: " Usamos props para __ ", resposta: "passar diferentes informações para componentes "},
        {pergunta: " Usamos estado (state) para __", resposta: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
        
    ];

        function Content({pergunta = pergunta}){
            const [open, setOpen] = React.useState(true);
            return(
                <div className="contents">
                 {open ? (<div><h3>Pergunta </h3><img onClick={() => setOpen(!open)} src="./assets/img/Vector.png"></img></div>) 
                     : (<div className="open"><h4>{pergunta.pergunta}</h4><img src="./assets/img/resposta.png"></img></div>)}
                 
                 </div>

            );
        }
 
    return(
         <>
         <div className="navbar">
            <img src="assets/img/zapLogo.png"></img>
            <h2>ZapRecall</h2>
         </div>
        
        {perguntas.map((value) => (<Content pergunta={value}/>))}
        
      
            
        
        <div className="done">
        0/4 CONCLUÍDOS
        </div>
        </>
      
    );
}