import ProductsSection from "@/app/(all-products)/_components/products-section";
import { all_products_page } from "@/const/all-products";


const HomeProjects = () => {

    return (
        <div className="w-full h-fit border-y py-12 gap-12 flex flex-col">
            <section className="max-w-7xl mx-auto w-full px-6 flex flex-col gap-4">
                <h1 className='md:text-4xl text-2xl font-bold text-accent-foreground'>Сервисы DM</h1>
                <span className='text-base font-light text-muted-foreground'>
                    Вы можете воспользоваться приложениями без аккаунта DM Family, но для лучшего
                    пользовательского опыта, рекомендуется создать аккаунт DM Family, один аккаунт на все сервисы.
                </span>
            </section>
            <div className="max-w-7xl w-full mx-auto px-6 gap-6 h-full">
            {
                all_products_page.map(section =>
                    <ProductsSection key={section.sectionId} section={section} hideTitle />
                )
            }
            </div>
        </div>
    )
}

export default HomeProjects