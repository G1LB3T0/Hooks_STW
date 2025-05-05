const {useState, useMemo} = React;

const PERSONAJES = {
    Luis: {
        nombre: 'Luis Gonzalez',
        descripcion: 'Me gusta el futbol y super fan de Toni Kross y el Real Madrid'
    },
    luffy: {
        nombre: 'Monkey D. Luffy',
        descripcion: 'Capitán de los Piratas del Sombrero de Paja. Comió la fruta Gomu Gomu, dándole poderes de goma. Su sueño es convertirse en el Rey de los Piratas.'
    },
    zoro: {
        nombre: 'Roronoa Zoro',
        descripcion: 'Espadachín de la tripulación. Especialista en el estilo de tres espadas. Su sueño es convertirse en el mejor espadachín del mundo.'
    },
    nami: {
        nombre: 'Nami',
        descripcion: 'Navegante de la tripulación. Experta en cartografía y meteorología. Su sueño es dibujar un mapa del mundo entero.'
    },
    usopp: {
        nombre: 'Usopp',
        descripcion: 'Francotirador de la tripulación. Experto en inventos y mentiras. Su sueño es convertirse en un valiente guerrero del mar.'
    },
    sanji: {
        nombre: 'Sanji',
        descripcion: 'Cocinero de la tripulación. Experto en artes marciales con las piernas. Su sueño es encontrar el All Blue, un mar legendario con todos los peces del mundo.'
    }
};

function UserSearch() {
    const [busqueda, setBusqueda] = useState('');

    const resultado = useMemo(() => {
        return Object.entries(PERSONAJES).filter(([key, personaje]) => {
            return personaje.nombre.includes(busqueda) || personaje.descripcion.includes(busqueda)
        }) 
    }, [busqueda]);

    return (
        <div className="UserSearch">
            <input 
                value={busqueda} 
                onChange={(e) => setBusqueda(e.target.value)}
                placeholder="Buscar personaje..."
            />
            <div className="resultados">
                {resultado.map(([key, personaje]) => (
                    <div key={key} className="personaje">
                        <h3>{personaje.nombre}</h3>
                        <p>{personaje.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<UserSearch />);