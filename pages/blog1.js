import Layout from "../components/Layout";
import Link from "next/link";



const PostLink = ({title}) => (
  <li>
    <Link href={`${title}`} >
      <a>{title}</a>
    </Link>
  </li>
)

const Blog = () => {
  return(
    <Layout title="My Blog1">
      <ul>
        <PostLink title="React-Post"/>
        <PostLink title="Angular-Post"/>
        <PostLink title="Vue-Post"/>
      </ul>
    </Layout>
  )
} 


export default Blog