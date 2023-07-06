import UserDetails from "./componentes/UserDetails";

function App() {

  const users = [
    {id: 1, name:'Daniela', age: 1, job:'designer', habilitado:false},
    {id: 2, name:'Luis', age: 30, job:'developer', habilitado:true},
    {id: 3, name:'Juan', age: 28, job:'quality', habilitado:false}
  ]
  return (
    <div className="App">
      <div>
      {users.map( (user) => (
        <UserDetails key={user.id} name={user.name} age={user.age} profession={user.profession}/>
      ))}
      </div>
    </div>
  );
}

export default App;
