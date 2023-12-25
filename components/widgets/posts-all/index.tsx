import { blog } from "@/api/blog"
import PostCard from "./post-card"
import Controller from "./controller"
import { Post } from "@/types/post"

type Props = {
    category?: Post['category']
}
const AllPosts = async({ category }: Props) => {
    const { count, data, next } = await blog.getAll(category)
    if (data && data.length === 0) return (
        <div className='w-full h-full flex items-center justify-center'>
            <span>Нет опубликованных постов</span>
        </div>
    )
    return (
        <div className="w-full h-fit grid md:grid-cols-2 grid-cols-1 gap-y-16 gap-x-8 my-6 auto-rows-auto">
            {
                data && data
                .map(post => <PostCard key={'all' + '-' + post.doc_id} post={post} />)
            }
            <Controller count={count} next={next} />
        </div>
    )
}

export default AllPosts