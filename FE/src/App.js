import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Commands from './components/Commands'
import AddCommand from './components/AddCommand'
import About from './components/About'

function App() {

  const [showAddCommand, setShowAddCommand] = useState(false)

  const[commands, setCommands] = useState([])

  useEffect(() => {
    const getCommands = async() => {
      const commandsFromServer = await fetchCommands()
      setCommands(commandsFromServer)
    }
    getCommands()
    },[])

  //Fetch Tasks
  const fetchCommands = async () => {
    const res = await fetch('https://localhost:5001/api/commands')
    const data = await res.json()
    //const commands = {commands:data}
    return data
  }

  //Add Task
  const addCommand = async (task) => {
    const res = await fetch(`https://localhost:5001/api/commands`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body:JSON.stringify(task)
    })

    const data = await res.json()

    setCommands([...commands, data])
  }

  //Delete task
  const deleteCommand = async (id) => {
    await fetch(`https://localhost:5001/api/commands/${id}`,{
      method: 'DELETE',
    })
    setCommands(commands.filter((command) => command.id !== id))
  }

  return (
    <Router>
    <div className='container'>
     <Header onAdd= {() => setShowAddCommand (!showAddCommand)} showAdd={showAddCommand} />
     <Route path='/' exact render ={(props) => (
       <>
       {showAddCommand && <AddCommand onAdd={addCommand} />}
       { commands ? (<Commands commands={commands} onDelete={deleteCommand} />) : ('No Commands in DB')}
       </>
     )} />
     <Route path='/about' component={About} />
     <Footer />
    </div>
    </Router>
  );
}

export default App;
