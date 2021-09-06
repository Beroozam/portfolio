import Layout from '../components/Layout'

const Index = (props) => (
  <Layout title="Home">
    <p>Welcome to the home page</p>
    <ul>
    {
      props.sales.map(sale => {
        return (
          <li key={sale.id}>
            <h1>{sale.username}</h1>
            <p>{sale.volume}</p>
          </li>
        )
      })
    }
  </ul>
  </Layout>
)

export async function getStaticProps() {


    const response = await fetch('https://nextjs-course-562c0-default-rtdb.firebaseio.com/sales.json')
    const data = await response.json()

    const transformedSales = []

    for(const key in data){
      transformedSales.push({id:key , username: data[key].username , volume: data[key].volume})
    }

    return {
      props:{
        sales: transformedSales
      }
    }

}

export default Index

