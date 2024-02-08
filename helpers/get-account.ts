import { ShortUserData, user } from "api"

export const getAccount = async(id: string) => {
  const byId = await user.byId.short(id)
  const byNick = await user.byNick.short(id, false) as ShortUserData | null
  const account = byId || byNick
  return account
}