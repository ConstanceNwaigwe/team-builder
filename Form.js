
import React from 'react';

export default function Forms(props){

    const { values, update, submit } = props;

    const onChange = evt => {
        
        const inputName = evt.target.name;
        const inputValue = evt.target.value;
        update(inputName, inputValue);

    }
    
    const onSubmit = evt => {

        evt.preventDefault();
        submit();
    }
    
    return (
        <form className='form container' onSubmit={onSubmit}>
          <div className='form-group inputs'>
            
            <label htmlFor="username">Username
                  <input type="text" name="username" value={values.username} onChange={onChange} placeholder="Enter username" />
            </label>
    
            <label>Email
              <input type="email" name="email" value={values.email} onChange={onChange} placeholder="Enter email" />
            </label>
    
            
            <label>Role
              <select name="role" value={values.role} onChange={onChange} >
                <option value="">-- select your role --</option>
                <option value="student">Student</option>
                <option value="instructor">Instructor</option>
                <option value="graduate">Graduate</option>
              </select>
            </label>
    
            <div className='submit'>
              <button>submit</button>
            </div>
          </div>
        </form>
    )

}