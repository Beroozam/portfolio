// import React , { useEffect , useState } from 'react'
import image from '/static/javascrip-logo.png'
import Image from 'next/image'
import Layout from '../components/Layout'
import Error from './404'

const About = (props) => {
  const { user , statusCode } = props

  if(statusCode){
    return <Error status={statusCode}/>
  }

  return(
    <Layout title="About">
      <p>{user.name}</p>
      <img src={user.avatar_url} alt={user.login} width="200px"/>
    </Layout>
  )
}

About.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/reedbarger')
  const statusCode = res.status > 200 ? res.status : false
  const json = await res.json()
  return { user: json , statusCode}
}

export default About