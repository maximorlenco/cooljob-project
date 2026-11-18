import './App.css'
import cooljobLogo from './assets/icons/cooljob-logo.png'

const vacansies = [ 
  {id:1, title: "manger", icon: cooljobLogo},
  {id:2, title: "developer", icon: cooljobLogo}
]
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <img src={cooljobLogo} className="logo" alt="logo" />
    </div>
  )
}

export default App
