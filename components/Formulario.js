import Link from 'next/link'


const Formulario = () => (

<div className="container" style={{marginTop: 20}}>
    <form>
    <fieldset>
        <legend>Enviame tu consulta</legend>
        <div className="form-group row">
            <label for="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-10">
            <input type="text" readonly="" className="form-control-plaintext" id="staticEmail" value="email@example.com" />
        </div>
        </div>
        <div className="form-group">
            <label className="col-form-label" for="inputDefault">Nombre</label>
            <input type="text" className="form-control" placeholder="Ingresar nombre" id="inputDefault" />
        </div>
        <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingresar e-mail" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div className="form-group">
            <label className="col-form-label" for="inputDefault">Asunto</label>
            <input type="text" className="form-control" id="inputDefault" />
        </div>
        <div class="form-group">
            <label for="exampleTextarea">Dejame tu mensaje</label>
            <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
        </div>
            <button type="submit" className="btn btn-primary">Submit</button>
    </fieldset>
    </form>
</div>
)

export default Formulario
