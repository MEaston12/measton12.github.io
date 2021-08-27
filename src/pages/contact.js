import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [modal, setModal] = useState({show:false, success:false});
  const blankForm = {name:'', email:'', message:''};
  const [form, setForm] = useState(blankForm);
  const blankWarn = {name:false, email:false, emailValid:false, message:false};
  const [warn, setWarn] = useState(blankWarn);

  const validate = (key, val) => {
    //Function is designed to handle all validation checks, will take in a key val pair
    //  and output an object with either update:false or update:true if warn needs updating
    const newWarn = { ...warn, [key]: (val === '') };
    if(key === 'email' && !(val === '')) {
      newWarn.emailValid = (!/\S+@\S+\.\S+/.test(val));
    } else {
      newWarn.emailValid = false;
    }

    for(let val of Object.values(newWarn)) {
      if(val !== warn[key]) return {update:true, newWarn:newWarn};
    }
    return {update:false, newWarn:newWarn};
  }

  const validateFullForm = () => {
    //This would be horrendously inefficient with lots of fields but thankfully we have 3 (for now)
    //  Should parse through all fields and automatically validate all of them, then return a needs object
    const newWarn = { ...blankWarn };
    const warnArr = [];
    for(let [key, val] of Object.entries(form)){
      const needs = validate(key, val);
      if(needs.update) warnArr.push(needs.newWarn);
    }
    if(!warnArr.length) return {update:false};
    for(let warn of warnArr) {
      for(let [key, val] of Object.entries(warn)) {
        if(val) newWarn[key] = true;
      }
    }
    return {update: !!warnArr.length, newWarn:newWarn};
  }

  const handleClose = () => setModal({show:false, success:false});
  const handleBlur = event => {
    const key = event.target.name;
    const val = event.target.value;
    const needs = validate(key, val);
    if(needs.update) setWarn(needs.newWarn);
  }
  const handleChange = event => {
    const key = event.target.name;
    const val = event.target.value;
    setForm({ ...form, [key]: val});
  }

  const sendEmail = async event => {
    event.preventDefault();
    
    const needs = validateFullForm();
    if(needs.update){
      setWarn(needs.newWarn);
      return;
    }
    try {
      await emailjs.sendForm('service_jxmlk6d', 'template_wnvndnk', event.target, 'user_6SxU302jNZeP2lHic0bys');
      setModal({show:true, success:true});
      setForm(blankForm);
    } catch(err) {
      console.error(err.text);
      setModal({show:true, success:false});
    }
  }

  return (<>
    <Col xs='12' md='6'>
      <h1>Contact Me</h1>
      <Form onSubmit={sendEmail}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>Name</Form.Label>
          <Form.Control onBlur={handleBlur} onChange={handleChange} value={form.name} name='name' placeholder='Your name here' />
          {warn.name && <Form.Text className='text-danger'>You must enter a name.</Form.Text>}
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control onBlur={handleBlur} onChange={handleChange} value={form.email} type='email' name='email' placeholder='Your email here' />
          {warn.email && <Form.Text className='text-danger'>You must enter an email.</Form.Text>}
          {warn.emailValid && <Form.Text className='text-danger'>You must enter a valid email.</Form.Text>}
        </Form.Group>
        <Form.Group className='mb-3' controlId='formMessage'>
          <Form.Label>Message</Form.Label>
          <Form.Control onBlur={handleBlur} onChange={handleChange} value={form.message} as='textarea' rows={8} name='message' placeholder='What would you like to say?' />
          {warn.message && <Form.Text className='text-danger'>You must enter a message.</Form.Text>}
        </Form.Group>
        <Button variant='primary' type='submit'>Submit</Button>
        <Modal show={modal.show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Email Submittal</Modal.Title>
          </Modal.Header>
          {modal.success
            ? <Modal.Body>Email submitted!  I'll get back to you as soon as I see it!</Modal.Body>
            : <Modal.Body>Sorry, there was a problem with the email process.  Feel free to contact me directly at <a href='mailto:eastonmalcolm@gmail.com'>eastonmalcolm@gmail.com</a></Modal.Body>}
        </Modal>
      </Form>
    </Col>
  </>);
}
export default Contact;