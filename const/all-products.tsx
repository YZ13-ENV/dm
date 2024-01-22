import { format } from "@/helpers/format"
import { TbBrandAppgallery } from "react-icons/tb";

export type Product = {
  id: string
  icon: JSX.Element
  title: string
  description: string
  link: string
}

export type ProductSection = {
  sectionId: string
  title: string
  products: Product[]
}

export type ProductsPage = ProductSection[]


const dm_app: Product = {
  id: format.generateId(6) as string,
  icon: <TbBrandAppgallery size={18} />,
  title: "DM",
  description: "Приложение для управления аккаунтом DM Family",
  link: "/home"
}
const frame_app: Product = {
  id: format.generateId(6) as string,
  icon: <TbBrandAppgallery size={18} />,
  title: "Frame",
  description: "Приложение где дизайнеры делятся работами",
  link: "https://frame.darkmaterial.space"
}
const yz13_app: Product = {
  id: format.generateId(6) as string,
  icon: <TbBrandAppgallery size={18} />,
  title: "YZ13",
  description: "Блог, где выходят анонсы и обновления",
  link: "https://yz13.darkmaterial.space"
}
const keeper_app: Product = {
  id: format.generateId(6) as string,
  icon: <TbBrandAppgallery size={18} />,
  title: "Keeper",
  description: "Приложение с заметками",
  link: "https://keeper.darkmaterial.space"
}

const apps_section: ProductSection = {
  sectionId: format.generateId(12) as string,
  title: "Приложения",
  products: [
    dm_app,
    frame_app,
    yz13_app,
    keeper_app
  ]
}

export const all_products_page: ProductsPage = [
  apps_section
]