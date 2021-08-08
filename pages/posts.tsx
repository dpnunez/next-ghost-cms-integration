import { api } from "../services/ghost"

interface PostType {
	title: string,
	html: string
}

const posts = ({ posts }) => {
	console.log(posts)
	
	return (
		<ul>
			{posts.map(post => (
				<li key={post.title}>
					<h1>{post.title}</h1>
					<div dangerouslySetInnerHTML={{__html: post.html}}></div>
				</li>
			))}
		</ul>
	)
}

export async function getStaticProps() {
  const posts = await api.posts.browse({
		limit: 'all'
	})

  if (!posts) {
    return {
      notFound: true,
    }
  }

  return {
    props: { posts }
  }
}

export default posts