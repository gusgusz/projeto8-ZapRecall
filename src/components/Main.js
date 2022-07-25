import  React  from "react";
import Content from "./Content.js"




export default function Main() {
    
  const [initial, setInitial] = React.useState(true);
    
   
    return(
        <>
        <div className="main">
        {initial ? (
            <div className="initial">
                <img src="assets/img/zapLogo.png"></img>
                <h1>ZapRecall</h1>
                <button onClick={() => setInitial(!initial)}>Iniciar Recall!</button>
            </div>
      ) : (<Content />)
        }
        </div>
        </>
    );
} 

 