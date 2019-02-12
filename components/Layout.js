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
      <title>Julieta Nogueira</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
      <link rel="stylesheet" href="../css/style.css" />
    </Head>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
  </div>
)

export default Layout