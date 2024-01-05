import { redirect } from 'next/navigation'
import { docs } from '@/helpers/docs'

const page = () => {
    return redirect(docs('fundamentals'))
}

export default page