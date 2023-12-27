

export const Header = ()=>{
  return(
    <header className="w-full h-60 max-sm:h-96 sm:h-96 bg-[url('../public/image-michael-jordan.png')] bg-cover max-sm:bg-center max-sm:">
      <nav className=" w-96 h-full ml-80 max-sm:ml-10 flex flex-col justify-center text-white">
        <p className="flex gap-2 items-center mb-3">
          <img className=" h-7" src="../public/logo.png" alt="logo" />
          <span>JordanShoes</span>
        </p>
        <p className="font-semibold my-3 max-sm:text-2xl max-sm:font-normal">A melhor loja de Jordan</p>
        <p className="max-sm:text-justify pr-10">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
      </nav>
    </header>
  )
}