import { RouterProvider } from 'react-router-dom'
import './App.css'
import { router } from './Router'
//import { useEffect, useMemo, useState } from 'react';
//import { Animals } from './components/Animals';
//import { IAnimal } from './models/IAnimal';
//import { getAnimals } from './services/animalService';

function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
