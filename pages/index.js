
import HomeContainer from "../components/HomeContainer"
import StickyPost from "../components/StickyPost"
import * as prismic from '@prismicio/client'
import { useAllPrismicDocumentsByType } from '@prismicio/react'
import PostCard from "../components/PostCard"
import * as prismicH from '@prismicio/helpers'
import { createClient } from '../prismicio'
import { useState, useEffect } from 'react'
import { PrismicRichText } from '@prismicio/react'

import { PrismicImage } from '@prismicio/react'
export async function getStaticProps({ previewData }) {
  const client = createClient({ previewData })
  // const page = prismic.predicate.at('post_type.sticky_podt', 'false')

  const res = await client.getAllByType('post_type');
  const sticky = res?.filter((p) => p.data.sticky_post == true)
   const pages = res?.filter((p) => p.data.sticky_post == false)
  return {
    props: {
      sticky,pages
    },
  }
}

export default function Home({ pages, sticky }) {
  const [stickyPost, setstickyPost] = useState(null)
  useEffect(() => {

    setstickyPost(sticky[0] ?? null)
  }, [sticky])

 
  const [posts, setPost] = useState(null)
  useEffect(() => {

    setPost(pages ?? null)
  }, [pages])

  return (

    <HomeContainer >
       {/* Sticky Post  */}      
      
        <a
          rel="noopener noreferrer"
          href={`/${stickyPost?.uid || "404"}`}
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >        <PrismicImage  className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" field={stickyPost?.data?.featured_img_link} widths={[400, 800, 1600]} /> 
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              <PrismicRichText field={stickyPost?.data?.title} />
            </h3>
            <span className="text-xs dark:text-gray-400">
              {prismicH.asDate(stickyPost?.first_publication_date)?.toDateString()}
            </span>
            <summary>
              <PrismicRichText field={stickyPost?.data?.post_excerpt} />{" "}
            </summary>
          </div>
        </a>
      

      {/* Post Grid */}
      {/* {JSON.stringify(page[0])} */}
     <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {' '}
            {posts && posts.map((doc)=>(
              <span key={doc.id}> 
              <PostCard title={doc?.data?.title} summary={doc?.data?.post_excerpt} pubDate={doc?.first_publication_date} slug={doc?.uid} thumb={doc?.data?.featured_img_link} />
              </span>
            )) }

      </div>
    </HomeContainer>

  )
}
