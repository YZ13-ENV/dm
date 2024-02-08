import { Product } from '@/const/all-products'
import Link from 'next/link'

type Props = {
  product: Product
}
const ProductCard = ({ product }: Props) => {
  const isDisabled = product.disabled === true
  return (
    <div className={`w-full h-full relative p-3 flex flex-col gap-1 rounded-lg ${isDisabled ? 'bg-card cursor-not-allowed' : 'hover:bg-card cursor-pointer'} transition-colors`}>
      { !isDisabled && product.link && <Link href={product.link} className='rounded-lg absolute w-full h-full left-0 top-0'/> }
      <div className={`w-fit h-fit flex items-center gap-2 ${ isDisabled ? 'text-muted-foreground' : 'text-accent-foreground' }`}>
        { product.icon }
        <span className="textClassName">{product.title}</span>
      </div>
      <span className="text-muted-foreground font-light text-sm">{product.description}</span>
    </div>
  )
}

export default ProductCard