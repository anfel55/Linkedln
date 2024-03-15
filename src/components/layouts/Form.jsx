import Boton from "./Boton"

const Form = () => {
    return(
        <form>
            <h1>¡Te damos la bienvenida <br/>
            a tu comunidad<br/>
            profesional!</h1>
           <p>Email o teléfono</p>
           <input type="text" />
           <p>Contraseña</p>
           <input type="text"  placeholder="Mostrar"/>
           <h4>¿Has olvidado tu Contraseña </h4>
           <Boton/>
           <hr />
           <h5>Ala hacer clic en continuar, aceptas las <span>Condiciones</span> <br/>
           <span>de uso</span>, la <span>Politica de privacidad</span> y la <span>politica de cookies</span>de Linkedln </h5>
        </form>
    )
}

export default Form