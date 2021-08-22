import Layout from "../components/Layout"

function custom404({ status }){
  return(
    <Layout title="Error!!!">
      <p>
        {
          status ? `Could not load your user data: Status code ${status}`
          : `Couldnt get that page, sorry!`
        }
      </p>
    </Layout>
  )
}

export default custom404