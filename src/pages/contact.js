import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';



const Contact = () => {
  const [warn, setWarn] = useState({name:false, email:false, emailValid:false, message:false});
  const handleWarn = event => {
    const key = event.target.name;
    const val = event.target.value;
    setWarn({ ...warn, [key]: (val === '') });
    if(key === 'email' && !(val === '')) setWarn({ ...warn, email:false, emailValid: (!/\S+@\S+\.\S+/.test(val)) })
  }

  return (
    <Container className='p-4'>
      <Col xs='12' md='6'>
        <h1>Contact Me</h1>
        <Form>
          <Form.Group className='mb-3' controlId='formName'>
            <Form.Label>Name</Form.Label>
            <Form.Control onBlur={handleWarn} name='name' placeholder='Your name here' />
            {warn.name && <Form.Text className='text-danger'>You must enter a name.</Form.Text>}
          </Form.Group>
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>Email Address</Form.Label>
            <Form.Control onBlur={handleWarn} type='email' name='email' placeholder='Your email here' />
            {warn.email && <Form.Text className='text-danger'>You must enter an email.</Form.Text>}
            {warn.emailValid && <Form.Text className='text-danger'>You must enter a valid email.</Form.Text>}
          </Form.Group>
          <Form.Group className='mb-3' controlId='formMessage'>
            <Form.Label>Message</Form.Label>
            <Form.Control onBlur={handleWarn} as='textarea' rows={8} name='message' placeholder='What would you like to say?' />
            {warn.message && <Form.Text className='text-danger'>You must enter a message.</Form.Text>}
          </Form.Group>
          <Button variant='primary' type='submit'>Submit</Button>
        </Form>
      </Col>
  </Container>
  );
}
export default Contact;