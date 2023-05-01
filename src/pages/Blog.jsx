import React, { useContext } from 'react'
import BlogCard from '../components/BlogCard'
import { Context } from '../context/BlogContext'

function Blog() {
  const post = useContext(Context)
  return (
    <div className='w-[100%] h-screen flex flex-wrap justify-center gap-10 mt-40'>
        {
          post.map((p)=>{
            return <BlogCard title={p.title} description={p.description} author={p.author} url={p.url} publishedAt={p.publishedAt} key={p.id} />
          })
        }
    </div>
  )
}

export default Blog