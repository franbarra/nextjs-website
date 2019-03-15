import Link from 'next/link'
import Layout from '../components/Layout'
import CartaDeFoto from '../components/Carta'



const Galeria = () => (

    <Layout>
        <div className="container-fluid" style={{marginTop: 30}}>
        <div className="row align-items-center">
            <div className="col">
              <CartaDeFoto></CartaDeFoto>
            </div>
            <div className="col">
              <CartaDeFoto></CartaDeFoto>
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col">
                <CartaDeFoto></CartaDeFoto>
            </div>
            <div className="col">
                <CartaDeFoto></CartaDeFoto>
            </div>
        </div>
        <div className="row align-items-center">
            <div className="col">
                <CartaDeFoto></CartaDeFoto>
            </div>
            <div className="col">
                <CartaDeFoto></CartaDeFoto>
            </div>
        </div>
        </div>
    </Layout>
)


export default Galeria
