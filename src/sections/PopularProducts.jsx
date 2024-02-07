import PopularProductCard from '../components/PopularProductCard'
import { products } from '../constants'

const PopularProducts = () => {
  return (
      <section id="products"
      className="max-container max-sm:m-12"
      >
        <div className=" flex flex-col justify-start gap-5">
            <h2 className=' text-4xl font-palanquin font-bold'>Our <span className=' text-coral-red'>Popular</span> Products</h2>
            
            <p className='lg:max-w-lg mt-2 font-montserrat'>"Experience top-notch quality and style with every pair. Indulge in the perfect blend of comfort, exquisite design, and unbeatable value. Discover the epitome of luxury for your feet."</p>
        </div>

        <div className=' mt-16 grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14'>
          {products.map((product)=>(
            <PopularProductCard key={product.name} {...product}/>
          ))}

        </div>

      </section>
      
  )
}

export default PopularProducts
