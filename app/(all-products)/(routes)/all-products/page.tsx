import Header from "@/components/widgets/headers/default"
import ProductsSection from "../../_components/products-section"
import { all_products_page } from "@/const/all-products"

const page = () => {
  return (
    <>
      <Header transparent />
      <div className="w-full max-w-7xl mx-auto h-full p-6 flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-accent-foreground">Все проекты и продукты</h1>
        {
          all_products_page.map(section =>
            <ProductsSection key={section.sectionId} section={section} />
          )
        }
      </div>
    </>
  )
}

export default page