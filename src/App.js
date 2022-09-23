import { useState } from "react";
import "./App.css";

function App() {
  ///input into object
  const initialValues = {
    username: "",
    address: "",
    email: "",
    phone: "",
    password: "",

  };
  ///usestate
  const [formValues, setFormValues] = useState(initialValues); ///for form values
  const [formErrors, setFormErrors] = useState({}); /// for form error
  const[list,setList] = useState([]); ///to display value


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });



    //if clear to make clear
    if (formValues.username)
      formErrors.username = "";

    if (formValues.address)
      formErrors.address = "";


    if (formValues.email)
      formErrors.email = "";

    if (formValues.phone)
      formErrors.phone = "";

    if (formValues.password)
      formErrors.password = "";



  };

  const handleSubmit = (e) => {
    e.preventDefault();   // to prevent the form gets submit
    setFormErrors(Validate(formValues));
    setList((list) => [...list,formValues])
    
    console.log(formValues);
  }

  //to clear the values and error message
  const handleClick = () => {
    setFormValues({});
    setFormErrors({});
  };

  // input validation
  const Validate = (values) => {
    const errors = {};

    if (!values.username)
      errors.username = "Please enter your name!";


    if (!values.address)
      errors.address = "Please enter your address!";
    else if (values.address.length > 50)
      errors.address = "Incorrect";


    if (!values.email)
      errors.email = "Please enter your email Address!";
    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))
      errors.email = 'Invalid email address';

    if (!values.phone)
      errors.phone = "Please enter your Phone number!";
    else if (values.phone.length != 10)
      errors.phone = "Check Phone number";


    if (!values.password)
      errors.password = "Please enter your password!";

    return errors;
  }


  return (
    ///html content
    <div>
      <form onSubmit={handleSubmit} className="form-validation">
        <h1>Form Validation</h1>
        <fieldset>
          <div className="data">
            <label >Name</label>
            <input type="text" name="username" value={formValues.username} onChange={handleChange} />
            <p className="errormsg">{formErrors.username}</p>
          </div>

          <div className="data">
            <label>Address</label>
            <input type="textarea" name="address" value={formValues.address} onChange={handleChange} />
            <p className="errormsg">{formErrors.address}</p>
          </div>

          <div className="data">
            <label>Email</label>
            <input type="email" name="email" value={formValues.email} onChange={handleChange} />
            <p className="errormsg">{formErrors.email}</p>
          </div>

          <div className="data">
            <label>Phone</label>
            <input type="number" name="phone" value={formValues.phone} onChange={handleChange} />
            <p className="errormsg">{formErrors.phone}</p>
          </div>

          <div className="data">
            <label>Password</label>
            <input type="password" name="password" value={formValues.password} onChange={handleChange} maxLength={8} minLength={6} />
            <p className="errormsg">{formErrors.password}</p>
          </div>


          <div className="button">
            <input type="submit" value="Submit" name="submit" className="buttons" />
            <input type="reset" value="CLEAR" name="clear" className="clearbutton" onClick={handleClick} />
          </div>
        </fieldset>
      </form>
      {
      list.map((details) =>
       <div>
        <li type="none"> Name:{details.username}</li>
        <li type="none">Address:{details.address}</li>
        <li type="none">Email:{details.email}</li>
        <li type="none">Phone:{details.phone}</li>
        <li type="none">Password:{details.password}</li>
        
       </div>
        ) 
    }

         
       
      </div>
    );
   }
      export default App;