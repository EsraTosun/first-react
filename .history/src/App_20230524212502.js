const App = () => {
    //Nesneyi bu fanctionun içinde aşağıdaki şekidle almak zorundayız
    //Değişkenler içinde tanımlı olmak zorunda
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

export default App;
