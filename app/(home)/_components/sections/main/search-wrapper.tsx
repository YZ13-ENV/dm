import { useState } from "react"

const SearchWrapper = () => {
  const [text, setText] = useState<string>('')
  /*
        const query = text
        .toLowerCase()
        .replaceAll(' ', '-')
        .replaceAll('--', '-')
  */
  return (
    <div>SearchWrapper</div>
  )
}

export default SearchWrapper