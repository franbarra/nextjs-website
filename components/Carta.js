import Layout from './Layout' 

class containerParaFotos extends React.Component {
    render() {
        <div>
            {this.props.children}
        </div>
    }
}

const containerStyle = {

    gridTemplateColumn: '50% 50%',
    gridTemplateRows: '30% 30% 30%',
    margin: 20,
}


const CartaDeFoto = () => (


    <div className={containerParaFotos} style={containerStyle}>
        <div className="card mb-3">
                <h3 className="card-header">Card header</h3>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <h6 className="card-subtitle text-muted">Support card subtitle</h6>
            </div>
            <img src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22318%22%20height%3D%22180%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20318%20180%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_158bd1d28ef%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A16pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_158bd1d28ef%22%3E%3Crect%20width%3D%22318%22%20height%3D%22180%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22129.359375%22%20y%3D%2297.35%22%3EImage%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" alt="Card image" />
            <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            <div className="card-body">
                <a href="#" className="card-link">Card link</a>
                <a href="#" className="card-link">Another link</a>
            </div>
            <div className="card-footer text-muted">
            2 days ago
            </div>
        </div>
    </div>
)

export default CartaDeFoto