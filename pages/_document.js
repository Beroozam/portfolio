import Document , { Head , Main , NextScript } from 'next/document'

class MyDocument extends Document {
  render(){
    return(
      <html lang="en">
        <Head>
          <meta name="description" content="A site for my programing protfolio"/>
          <meta charset="utf-8"/>
          <meta name="robots" content="noindex ,nofollow" />
          <meta name="viewport" content="width=device-width"/>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"></link>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style global jsx>{`
          body{
            font-family: 'Roboto', sans-serif;
          }
        `}</style>
      </html>
    )
  }
}

export default MyDocument