import { blog } from 'api'
import GridItem from '@/components/shared/grid/grid-item'
import GridTemplate from '@/components/shared/grid/grid-template'
import { CategoriesGridRatio, defaultRatio } from '@/const/categories'
import { Post } from '@/types/post'

type Props = {
  category?: Post['category']
}
const LastPosts = async({ category='all' }: Props) => {
    const posts = await blog.getLast(category)
    return (
      <div className="w-full">
        {
          posts && posts.length === 0
          ? <div className='w-full h-96 flex items-center justify-center'>
            <span>Нет закрепленных постов</span>
          </div>
          :
          <GridTemplate>
            {
              posts && posts.map((post, index) => {
                const ratio = category
                ? CategoriesGridRatio[category].split('-')
                : defaultRatio.split('-')
                const span = `span ${ratio[index]} / span ${ratio[index]}`
                return <GridItem key={post.doc_id} post={post} rowSpan={span} />
              })
            }
          </GridTemplate>
        }
      </div>
    )
}

export default LastPosts