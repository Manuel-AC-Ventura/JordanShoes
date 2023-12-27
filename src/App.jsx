import './App.css'
import { Nav } from './components/nav/Nav'
import { Header } from './components/header/Header'
import { Container } from './components/container/Container'

export const App = ()=>{
  return(
    <div className='bg-white text-black font-[Archivo] flex flex-col items-center'>
      <Nav/>
      <Header/>
      <Container/>
    </div>
  )
}