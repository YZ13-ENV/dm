import { ProductSection } from "@/const/all-products"
import Product from "./product"

type Props = {
  section: ProductSection
  hideTitle?: boolean
}
const ProductsSection = ({ section, hideTitle=false }: Props) => {
  return (
    <section className="w-full h-fit flex flex-col gap-2">
      {
        !hideTitle &&
        <h2 className="text-base font-normal text-muted-foreground">{ section.title }</h2>
      }
      <div className="products-grid">
        {
          section.products.map(product => <Product key={product.id} product={product} />)
        }
      </div>
    </section>
  )
}

export default ProductsSection