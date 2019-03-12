import Navbar from './Navbar'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}


const Layout = (props) => (
  <div class="layoutStyle">
    <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Francisco Barraguirre" />
        <title>Julieta Nogueira</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootswatch/4.3.1/lux/bootstrap.min.css" />
    </Head>
    <Navbar />
    <div className="container-fluid">
      {props.children}
    </div>
  </div>
)

export default Layout
