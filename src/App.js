import React ,{
    Component,
    useState
}from "react";

/*
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
}  */

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }

    artir = () => {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    azalt = () => {
        this.setState({
            counter: this.state.counter - 1
        })
    }

    callEsra = () => {
        alert("Merhabaaaaaaa");
    }
    
    render() {
        return <div>
            <button
                onClick={this.callEsra}
                style={{
                    border: "2px solid #444",
                    fontFamily: "monospace",
                    backgroundColor: "#444",
                    padding: "15px 20px",
                    borderRadius: 8,
                    marginRight: 20,
                    color: "#00c2a9",
                    outline: "none",
                }}
            >
                Merhaba Esra
            </button>
            <button
                onClick={this.callEsra}
                className="button-outline"
                style={{
                    backgroundColor: "transparent",
                    fontFamily: "monospace",
                    borderColor: "#444",
                    borderStyle: "solid",
                    padding: "15px 20px",
                    borderRadius: 8,
                    color: "#444",
                    marginRight: 20,
                    outline: "none",
                    borderWidth: 2,
                }}
            >
                Merhaba Esra
                {
                    this.state.counter > 2 ? " X" : null
                }
            </button>
            <button onClick={this.azalt} style={{
                fontSize: 50
                }}>-</button>      
            <div style={{
                fontSize: 50
            }}>
                {this.state.counter}    
            </div>      
            <button onClick={this.artir} style={{
                fontSize: 50
                }}>+</button>           
        </div>;
        
    }
}

export default App;

//render => componet sınıfından gelir
//class da return olmadığı için render function sayesinde
//return edilir.
