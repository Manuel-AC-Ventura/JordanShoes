import { Card } from "../card/Card"
import images from "../../../public/images.json"

export const Contents = ()=>{
  return(
    <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-7 max-sm:gap-5 mt-10 place-items-center">
      {images.map((item, index) => (
        <Card 
          key={index}
          name={item.name}
          image={item.image}
          price={item.price}
        />
      ))}
    </div>
  )
}