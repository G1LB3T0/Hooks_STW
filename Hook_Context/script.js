const {useState, useContext, createContext, useRef} = React;

const ThemeContext = createContext();


function ThemeProvider({ children }){
    const [theme, setTheme] = useState('blanco');
    const [bodyTheme, setBody] = useState('oscurobody')
    
    const TemaBlanc = (tema) => setTheme(tema);
    const TemaBody = (tema) => setBody(tema);    

    return(
        <ThemeContext.Provider value={{ theme, TemaBlanc, TemaBody, bodyTheme }}>
            {children}
        </ThemeContext.Provider>    
    )
}


function ThemeCard(){
    const { theme, TemaBlanc, TemaBody, bodyTheme} = useContext(ThemeContext);

    const contador = useRef(0);

    const toggle = () => {
        if (contador.current == 0){
            contador.current = 1;
            TemaBlanc('oscuro');
            TemaBody('blancobody');
        }else{
            contador.current = 0;
            TemaBlanc('blanco');
            TemaBody('oscurobody');
        }
    }
    
    return (
        <div className={bodyTheme}>
            <div className={theme}>
                <button onClick={toggle}>
                    Toggle
                </button>
            </div>
        </div>  
    );    
}



function App (){
    return(
        <ThemeProvider> 
            <h1>Theme Changer</h1>
            <ThemeCard />
        </ThemeProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
