import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>Hi, I am <strong>Joy</strong>. I have built this website using NextJS.</p>
        <p>I am learning to write code so that I may be able to help create technology that solves problems I care about.</p>
        <p>You can connect with me on{' '}
        <a href="https://twitter.com/jcat7414">Twitter</a>.</p>
        <p>
          (This is a sample website. I have followed the{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial.</a>)
        </p>
      </section>
    </Layout>
  )
}
