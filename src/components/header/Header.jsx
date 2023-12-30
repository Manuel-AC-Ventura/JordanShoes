import michaelJordanImage from "/image-michael-jordan.png"

export const Header = ()=>{
  const style = {
    backgroundImage: `url(${michaelJordanImage})`
  }
  return(
    <header style={style} className="w-full h-80 bg-center bg-cover text-white flex items-center max-sm:pl-5 max-sm:h-96 max-sm:bg-cover md:pl-20 lg:pl-60">
      <nav className=" w-96 flex gap-3 flex-col justify-center">
        <p className="flex gap-2 items-center">
          <img className="h-4" src="logo.svg" alt="logo" />
          <span>JordanShoes</span>
        </p>
        <p className="text-lg font-semibold">A melhor loja de Jordan</p>
        <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
      </nav>
    </header>
  )
}