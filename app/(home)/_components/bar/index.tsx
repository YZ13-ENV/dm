"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { useState } from "react"

const Bar = () => {
  const [focused, setFocused] = useState<boolean>(false)
  const [text, setText] = useState<string>('')
  return (
    <div className={cn(
      focused ? "outline outline-offset-3 outline-primary" : "",
      "h-14 rounded-2xl pl-2 border flex items-center justify-between transition-all"
    )}>
      <Input
        value={text}
        onChange={e => setText(e.target.value)}
        onBlur={() => setFocused(false)}
        onFocus={() => setFocused(true)}
        placeholder="Поиск по работам"
        className="h-14 text-lg rounded-2xl !border-0 !outline-none !ring-0"
      />
      <div className="h-full px-1.5 flex items-center justify-end">
        {
          text.length > 2 &&
          <Button size='lg' className="text-base rounded-xl">Поиск</Button>
        }
      </div>
    </div>
  )
}

export default Bar