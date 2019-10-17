import React from 'react';

const Form = (props) => {
    return(
       <form onSubmit={props.get} > 
          <input type='text' placeholder='City...' name='city' /> <br/>
          <input type='text' placeholder='Country...' name='country' /> <br />
          <input type='submit' value='show' />
       </form>
    )
}

export default Form;