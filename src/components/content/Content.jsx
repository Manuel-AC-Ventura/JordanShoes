import { Card } from "../card/Card"
import images from "../../assets/images.json"

export const Content = ()=>{
  return(
    <div className="grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-sm:gap-5 mt-10 place-items-center">
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