import Layout from './Layout'
import Link from 'next/link'

const Footer = () => (

    <div className="container">
    <hr className="featurette-divider" />
    <footer className="container">
        <p className="float-right">
            <a href="#">Back to top</a>
        </p>
        <p>&copy; 2019 Francisco Barraguirre <Link href="https://github.com/franbarra"><a target="_blank"><i class="fab fa-github"></i></a></Link>
        </p>
    </footer>
    </div>
)

export default Footer
