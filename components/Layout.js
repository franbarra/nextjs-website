import Navbar from './Navbar'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD',
}

const LoremIpsum = () => (

"Adipisci temporibus eos aliquam perspiciatis rerum. Et velit omnis in. Corrupti fugiat dolores enim autem qui quas exercitationem. Exercitationem architecto a consequatur cumque nesciunt. Itaque enim neque doloribus maiores expedita sapiente corporis. Expedita aut dignissimos ad quia et. Corrupti dolorem cumque voluptatem praesentium voluptas ad. Veniam non harum consectetur eos et mollitia ipsum sunt. Molestiae consequatur fugiat praesentium recusandae nemo voluptatum ad tempore. Quas quas quos aut suscipit eos velit. Dolores voluptatum consequatur corrupti labore veritatis. Porro modi quia eos commodi tenetur alias laborum officiis. Quo cum distinctio dolorum et animi molestiae. Reiciendis qui aut voluptatem. Aspernatur impedit voluptatibus quidem est optio quo et quasi. Facere dolores et maxime dolor. Dolorum nobis accusantium nam asperiores qui molestiae quae quia."

)


const Layout = (props) => (
  <div class="layoutStyle">
    <Head>
      <title>Julieta Nogueira</title>
      <link rel="stylesheet" href="https://bootswatch.com/4/lux/bootstrap.min.css" />
    </Head>
    <Navbar />
    <div className="container">
      {props.children}
    </div>
  </div>
)

export default Layout