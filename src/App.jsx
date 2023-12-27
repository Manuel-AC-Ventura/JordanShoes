import './App.css'
import { Free } from './components/free/Free'
import { Header } from './components/header/Header'
import { Container } from './components/container/Container'

export const App = ()=>{
  return(
    <div className='bg-white text-black font-[Archivo] flex flex-col items-center'>
      <Free/>
      <Header/>
      <Container/>
    </div>
  )
}