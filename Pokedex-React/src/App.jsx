import './App.css'
import './components/SearchBox/SearchBox'
import SearchBox from './components/SearchBox/SearchBox'

function App() {
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        const customUser = {
          id: 90,
          name: "Jhon Doe",
          email: "jhondoe@mail.com",
        };

        setUsers([...users, customUser]);
        console.log(users);
      });
  }, []);
  
  return (
    <div className="App">
      <SearchBox/>
    </div>
  )
}

export default App
