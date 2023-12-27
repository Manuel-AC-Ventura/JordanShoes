import { Contents } from "../contents/Contents"

export const Container = ()=>{
  return(
    <main className="w-4/5 max-sm:w-11/12 h-full flex flex-col gap-4 my-14 items-center">
      <h1 className="font-semibold">Os melhores em só lugar</h1>
      <p className=" w-5/12 max-sm:w-11/12 px-4 text-center">A marca Jordan na JordanShoes é a escolha certa para os amantes de sneakers que buscam estilo e conforto.</p>
      <Contents/>
    </main>
  )
}