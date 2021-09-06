import Layout from '../components/Layout'

const Index = (props) => {
  console.log(props.sales)
 return <Layout title="Home">
    <p>Welcome to the home page</p>
  </Layout>
}

export async function getStaticProps(){
  const response = await fetch('https://nextjs-course-562c0-default-rtdb.firebaseio.com/sales.json')
  const data = await response.json()

  return{
    props:{
      sales:data
    }
  }
}

export default Index

