import React, { useState }  from 'react'
import Button from '../Button/Button';
import './Service_form.css'

function Service_form() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // do something with the form data, e.g. send it to a server

      console.log({
        title,
        description,
      });
    };

  return (
    <>

    <div className='nas_container'>
      <h1>Service form</h1>
    </div>


    <div className='form_container'>
    <form onSubmit={handleSubmit} className='nasform'>
    <div className='nasforrm_input'>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div className='nasforrm_input'>
        <label>Description</label>
        <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className='nasform_button'>
        <Button label="Submit" onClick={handleSubmit} />
      </div>
    </form>
    </div>
    </>
  )
}

export default Service_form