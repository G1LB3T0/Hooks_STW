const {useState, useEffect, useRef} = React;

function Stopwatch(){
    const [tiempo, setTiempo] = useState(0);
    const [estado, setEstado] = useState('Not Running');
    const [sesiones, setSesiones] = useState([]);
    const intervaloRef = useRef(null);

    const iniciar = () => {
        if (estado === 'Not Running') {
            intervaloRef.current = setInterval(() => {
                setTiempo(prevTiempo => prevTiempo + 1);
            }, 1000);
            setEstado('Running');
        }
    };

    const detener = () => {
        if (estado === 'Running') {
            clearInterval(intervaloRef.current);
            setEstado('Not Running');
        }
    };

    const reiniciar = () => {
        clearInterval(intervaloRef.current);
        setTiempo(0);
        setEstado('Not Running');
    };
    
    useEffect(() => {
        return () => {
            if (intervaloRef.current) {
                clearInterval(intervaloRef.current);
            }
        };
    },[]);

    return (
        <div className="stopwatch">
            <h2>Cronómetro</h2>
            <div className="tiempo">{tiempo} segundos</div>
            <div className="estado">Estado: {estado}</div>
            <div className="controles">
                <button onClick={iniciar}>Iniciar</button>
                <button onClick={detener}>Detener</button>
                <button onClick={reiniciar}>Reiniciar</button>
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Stopwatch />);