import './App.css'
import { Search } from './pages/Search'

const colors = ['red', 'orange', 'gold', 'green', 'blue', 'indigo', 'violet'];

function App() {
  // Render a basic heading.
  const text = 'Search Engine';

  return (
    <>
      <h1>{text.split('').map((char, index) => (
        <span
          key={index}
          style={{ color: colors[index % colors.length] }}
        >
          {char}
        </span>
      ))}</h1>
      <Search />
    </>
  )
}


export default App
