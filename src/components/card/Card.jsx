

export const Card = (props)=>{
  return(
    <div className="w-full grid gap-2 cursor-pointer">
      <picture className="w-full bg-[#F3F7FF] py-5 flex items-center justify-center">
        <img className=" h-28" src={props.image} alt={props.name} />
      </picture>
      <p className="text-sm">{props.name}</p>
      <p className=" text-xs text-[#7CA2F4]">Tênis Air Jordan</p>
      <h3 className="text-sm font-semibold">{props.price}</h3>
    </div>
  )
}