
import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Router'

function App() {

  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    async function fetchAnimals() {
      const animalData = await getAnimals();
      setAnimals(animalData);
    }
  })

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
