"use client"
import { useRouter } from "next/navigation"
import Bar from "../../bar"

const SearchWrapper = () => {
  const { prefetch, push } = useRouter()
  const goTo = (text: string) => {
    const query = text
      .toLowerCase()
      .replaceAll(' ', '-')
      .replaceAll('--', '-')
    const link = `https://frame.darkmaterial.space/search/${query}/popular`
    prefetch(link)
    push(link)
  }
  return (
    <>
      <Bar onQuery={goTo} />
    </>
  )
}

export default SearchWrapper