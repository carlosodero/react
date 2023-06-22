import './App.css';

function App() {
  const myArray = [
    { id: 'id1', name: 'Carlos', age: 18, color: 'white' },
    { id: 'id2', name: 'Diego', age: 17, color: 'purple' },
    { id: 'id3', name: 'Marta', age: 19, color: 'green' },
    { id: 'id4', name: 'Hugo', age: 99, color: 'yellow' },
    { id: 'id5', name: 'Vanessa', age: 2, color: 'pink' }
  ];

  return (
    <>
      <div className='read-the-docs'>
        <h2>Esto es REACT</h2>
        <div>Hola soy {myArray[0].name} y tengo {myArray[0].age} años.</div><br></br>
        <div>{myArray.map(item => <div key={item.id} style={{ color: item.color }} className={item.age % 2 === 0 ? 'color-red' : 'color-blue'}>Hola, soy {item.name} y tengo {item.age} años.</div>)}</div>
        <div>La media de edad es:
          {
            myArray.reduce((acum, myItem) => acum + myItem.age, 0) / myArray.length
          }
        </div>
      </div>

    </>
  );
}

export default App;
