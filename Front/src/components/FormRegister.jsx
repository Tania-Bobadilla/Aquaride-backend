import { Button, Col, Row } from "react-bootstrap"

const FormRegister = () => {
    return (
        <form className="form-register">
            <Row>
                <Col className='mb-3'>
                    <label htmlFor="name">
                        <strong>Nombre</strong>
                    </label>
                    <input
                        type="text"
                        placeholder='Nombre'
                        autoComplete='off'
                        name='name'
                        className='form-control rounded-1'
                    // onChange={}
                    />
                </Col>
                <Col className='mb-3'>
                    <label htmlFor="lastname">
                        <strong>Apellido</strong>
                    </label>
                    <input
                        type="text"
                        placeholder='Apellido'
                        autoComplete='off'
                        name='lastname'
                        className='form-control rounded-1'
                    // onChange={}
                    />
                </Col>
            </Row>
            <Col className='mb-3'>
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
            </Col>
            <Col className='mb-3'>
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
            </Col>
            <Button type='submit'>Registrarse</Button>
        </form >
    )
}

export default FormRegister