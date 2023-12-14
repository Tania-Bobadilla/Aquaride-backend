import { Button } from "react-bootstrap"

const FormLogin = () => {
  return (
    <form className="form-register">
            <div className='mb-3'>
                <label htmlFor="email">
                    <strong>Email</strong>
                </label>
                <input
                    type="email"
                    placeholder='Email'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-1'
                    // onChange={}
                />
            </div>
            <div className='mb-3'>
                <label htmlFor="password">
                    <strong>Contraseña</strong>
                </label>
                <input
                    type="password"
                    placeholder='Contraseña'
                    name='password'
                    className='form-control rounded-1'
                    // onChange={}
                />
            </div>
            <Button type='submit'>Iniciar Sesión</Button>
        </form >
  )
}

export default FormLogin