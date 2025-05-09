// 1. Crear el contexto
const UserContext = React.createContext();

// 2. Crear el proveedor
function UserProvider({ children }) {
  const [user, setUser] = React.useState("Invitado");

  const login = (name) => setUser(name);
  const logout = () => setUser("Invitado");

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
}

// 3. Componente que muestra el usuario
function UserInfo() {
  const { user } = React.useContext(UserContext);
  return <h2>Usuario actual: {user}</h2>;
}

// 4. Componente con acciones
function UserControls() {
  const { login, logout } = React.useContext(UserContext);
  return (
    <div>
      <button onClick={() => login("Ludwing")}>Iniciar sesión</button>
      <button onClick={logout}>Cerrar sesión</button>
    </div>
  );
}

// 5. App principal
function App() {
  return (
    <UserProvider>
      <h1>Ejemplo de Contexto con React CDN</h1>
      <UserInfo />
      <UserControls />
    </UserProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);