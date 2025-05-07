const {useState, useCallback, useMemo} = React;

function Cartas(){
    const [randomNumber, setRandomNumber] = useState(0);
    const [counter, setCounter] = useState(0);

    const createRandom = useCallback(
      () => {
        const nuevonumero = Math.floor(Math.random() * 100);
        setRandomNumber(nuevonumero);
      },
      []
    );


    const addCounter = () => {
        setCounter(counter + 1);
    }

    return(
        <div>
            <p>El numero es: {randomNumber}</p>
            <p>El contador es: {counter}</p>
            <ButtonOptimizado Funcion_generadora={createRandom} />
            <ButtonNormal contadorfunc={addCounter} />
        </div>
    )
}

const ButtonOptimizado = React.memo(function ButtonOptimizado({ Funcion_generadora }) {
    console.log('me rendericé de nuevo soy el optimizado');
    return <button onClick={Funcion_generadora}>Generar número</button>;
});

const ButtonNormal = React.memo(function ButtonNormal({contadorfunc}){
    console.log('Me renderize de nuevo soy el normal :(')
    return(
        <button onClick={contadorfunc}>Aumentar Contador</button>
    )
});//le puse memo para probar si realmente funciona callback




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Cartas />);