import Layout from '../components/Layout'
import '../styles/globals.css'
import Link from 'next/link'
import { PrismicPreview } from '@prismicio/next'
import { PrismicProvider } from '@prismicio/react'
import { repositoryName ,client} from '.././prismicio'


function MyApp({ Component, pageProps }) {
  return (
    <PrismicProvider
       client={client}
      
    >
  <PrismicPreview repositoryName={repositoryName}>
  <Layout>
    <Component {...pageProps} />
  </Layout></PrismicPreview>
  </PrismicProvider>
  )
}

export default MyApp
