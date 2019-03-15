import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'


const layoutStyle = {
  margin: 0,
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    <Navbar />
    <div style={layoutStyle}>
      {props.children}
    </div>
    <Footer />
  </div>
)

export default Layout
