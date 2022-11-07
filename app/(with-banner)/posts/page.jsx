
import { ListOfPosts } from './ListOfPosts'

// Server-side rendering
export default async function PostPage ({ params }) {
  return (
    <section>
      <ListOfPosts />
    </section>
  )
}
