import React, { useState, useRef } from 'react';

const style = {
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border:'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

export default function phoneBookform({ propsAddUser })
{
    let frstName = useRef();
  let lastName = useRef();
  let phone = useRef();

  const addUser = () => {
    propsAddUser(
        frstName.current.value,
        lastName.current.value,
        phone.current.value
    );
  };


  return (
    <form onSubmit={e => { e.preventDefault() }} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        ref={frstName}
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        placeholder="Coder"
      />
      <br/>
      <label>Last name:</label>
      <br />
      <input
        ref={lastName}
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        placeholder="Byte"
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        ref={phone}
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        placeholder="8885559999"
      />
      <br/>
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
        onClick={addUser}
      />
    </form>
  )
}
