const UserDetails = ({ name, age, profession}) => {
  return (
    <div>
      <h1>Seção 3</h1>
      <ul >
        <li>Nome:{name}</li>
        <li>Idade:{age}</li>
        <li>Profissão:{profession}</li>
        {age >= 18? (<p>pode tirar</p>): (<span> NAaaaaO PODE</span>)}
      </ul>
    </div>
  )
}

export default UserDetails;