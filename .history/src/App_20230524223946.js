import {
    useState
}from "react";

const oldApp = () => {
    //const sonuc = document.getElementById("sonuc");
    //Nesneyi bu fanctionun içinde aşağıdaki şekidle almak zorundayız
    const artir = () => {
        const sonuc = document.getElementById("sonuc");
        sonuc.innerText = Number(sonuc.innerText) + 1;
    }

    const azalt = () => {
        const sonuc = document.getElementById("sonuc");
        sonuc.innerText = Number(sonuc.innerText) - 1;
    }

    return <div>
        <button onClick={azalt} style={{
            fontSize: 50
            }}>-</button>      
        <div id="sonuc" style={{
            fontSize: 50
            }}>0</div>      
        <button onClick={artir} style={{
            fontSize: 50
            }}>+</button>           
    </div>;
}



const App = () => {
    const [counter,setCounter] = useState(0);
    //Array döndürür. 0 dan gönderdiği variable kullanacağımız asıl değişken
    //1 den funcition bu vaiableden setleyebileceğimiz tek metotdur.
    //Sadece değişicek yeri yeniler.
    
    const artir = () => {
        setCounter(counter + 1);
    }

    const azalt = () => {
        setCounter(counter - 1);
    }

    return <div>
        <button onClick={azalt} style={{
            fontSize: 50
            }}>-</button>      
        <div style={{
            fontSize: 50
        }}>
            {counter}    
        </div>      
        <button onClick={artir} style={{
            fontSize: 50
            }}>+</button>           
    </div>;
}

export default App;
