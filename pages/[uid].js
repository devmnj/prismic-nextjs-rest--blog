/* eslint-disable @next/next/no-img-element */
 
import * as prismicH from '@prismicio/helpers'
import { PrismicRichText } from '@prismicio/react'
import { PrismicImage } from '@prismicio/react'
import { createClient } from '../prismicio'
import { SliceZone } from "@prismicio/react";
import HeadingSlice from '../slices/HeadingSlice'
import ParagraphSlice from '../slices/ParagraphSlice'
import CodeSlice from '../slices/CodeSlice';
export async function getStaticPaths() {
const client = createClient()

  const pages = await client.getAllByType('post_type')
  const paths=  pages.map((page) => prismicH.asLink(page))
  console.log(paths);
  return {
    paths:paths,
    fallback: false,
  }
}

export async function getStaticProps({ params, previewData }) {
  const client = createClient({ previewData })

  const page = await client.getByUID('post_type', params.uid)
  console.log(page);
  return {
    props: {
      page,
    },
  }
}

const Page = ({ page, navigation, settings }) => {
  return  (
    <div className="   dark:bg-gray-800 max-w-6xl px-6 py-16 mx-auto space-y-12">
        {/* {JSON.stringify(page.data.body)} */}
        <article className="  flex-col space-y-8 dark:bg-gray-800 dark:text-gray-50">
            <div className="space-y-6">
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                 {prismicH.asText(page.data.title)}
                </h1>
                <div>
                    <PrismicRichText field={page.data.post_excerpt}/>
                </div>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-800">
                    <div className="flex items-center md:space-x-2">
                        <img
                            src="https://source.unsplash.com/random/?face&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                            className="w-12 h-12 border rounded-md dark:bg-gray-500 dark:border-gray-700"
                            />
                        <p className="text-sm">
                            {  "Devmnj"} •  {prismicH.asDate(page.last_Publication_Date)?.toDateString()}
                        </p>
                    </div>
                    <p className="flex-shrink-0 mt-3 text-sm md:mt-0">
                     {/* {rtime} min read • 1,570 views */}
                    </p>
                </div>
            </div>
            <div className="place-content-center flex">
 

                    <PrismicImage className="rounded"  field={page?.data?.featured_img_link}  /> 

            </div>
            <div className="" id="article">

                <SliceZone slices={page.data.body} components={{
                     heading_slice: HeadingSlice,
                     paragraph_slice:ParagraphSlice,
                     code_slice:CodeSlice
                    }
                      } />

            </div>
        </article>
        <div>
            <div className="flex flex-wrap py-6 space-x-2 border-t border-dashed dark:border-gray-400">
                {/* <!-- <Tag name={props.post.tag} /> --> */}
            </div>
            <div className="space-y-2 text-white">
                <h4 className="text-lg  font-semibold">Comments</h4>

                {/* <!-- <PostComment comment={props.post.userComments[0].body} /> --> */}
            </div>
            <div className="space-y-2 mt-3 text-white">
                <h4 className="text-lg  font-semibold">Related posts</h4>
                {/* <!-- <RelatedPosts tag={props.post.tag} /> --> */}
            </div>
        </div>
    </div>
  )
}

export default Page


 