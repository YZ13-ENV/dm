import { Post, blog } from "api"
import PostCard from "./post-card"

type Props = {
    category?: Post['category']
}
const AllPosts = async ({ category = 'all' }: Props) => {
    const { data } = await blog.getAll(category)
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
        </div>
    )
}

export default AllPosts