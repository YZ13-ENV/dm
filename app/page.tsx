import { redirect } from "next/navigation";

type Props = {
  searchParams: {
    token?: string
  }
}
export default function Home({ searchParams }: Props) {
  const token = searchParams.token
  return redirect(`/home${token ? `?token=${token}` : ''}`)
}
