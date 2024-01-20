import { Product } from '@/const/all-products'
import Link from 'next/link'

type Props = {
  product: Product
}
const ProductCard = ({ product }: Props) => {
  return (
    <div className="w-full h-full relative p-3 flex flex-col gap-1 rounded-lg hover:bg-card cursor-pointer transition-colors">
      <Link href={product.link} className='rounded-lg absolute w-full h-full left-0 top-0'/>
      <div className="w-fit h-fit flex items-center gap-2">
        { product.icon }
        <span className="text-accent-foreground font-medium">{product.title}</span>
      </div>
      <span className="text-muted-foreground text-sm">{product.description}</span>
    </div>
  )
}

export default ProductCard