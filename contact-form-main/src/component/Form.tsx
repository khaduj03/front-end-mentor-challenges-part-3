import { SubmitHandler, useForm } from "react-hook-form";
import "./form.css"

type FormData={
    firstName:string;
    lastName:string;
    email:string;
    radio:boolean;
    message:string;
    checkbox:boolean
    onSubmit:()=>void;

}
const Form = () => {
    const {register,handleSubmit, formState:{errors , isSubmitting}}=useForm<FormData>()

    const onSubmit:SubmitHandler<FormData>=(data)=>{
        console.log(data)
    }
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
    <h1>Contact Us</h1>
    <div className="section__firstname__lastname">
    <div>
      <label htmlFor="firstName">firstName</label>
      <input type="text" id="firstName" className="form-firstName" placeholder="enter firstName..." {...register("firstName" , {required:"name is required"})} />
      {errors.firstName && (<p className="errors">{errors.firstName?.message}</p>)}
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text"  id="lastName" className="form-lastName" {...register("lastName" , {required:"last name is requred"})} />
        {errors.lastName&&(<p  className="errors">{errors.lastName.message}</p>)}
      </div>
    </div>
    <div>
        <label htmlFor="email" className="email">Email Adress</label>
        <input type="text"  id="email" {...register("email",{required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              message: "Email is invalid",
            }},)} />
        {errors.email && (<p  className="errors">{errors.email.message}</p>)}
      </div>

      <div>
      <label htmlFor="quiry">Quiery Type</label>
      <div className="quiry">
        <div  className={errors.radio?"error":"General"}>
            <input type="radio" value="General Engauiry"  {...register("radio",{required:"reqired"})} />
            <p>General Engauiry</p>
        </div>
        <div className="General">
            <input type="radio" {...register("radio",{required:"reqired"})} />
            <p>General Engauiry</p>
        </div>
        
      </div>
      {errors.radio&&(<p  className="errors">{errors.radio.message}</p>)}
      </div>
      <div className="message">
        <label htmlFor="text">Text</label>
        <textarea {...register("message",{required:"this filed is required"})} id="message"></textarea>
        {errors.message&&(<p  className="errors">{errors.message.message}</p>)}
      </div>
      <div>
        <div className="checkbox">
        <input type="checkbox" id="checkbox" {...register("checkbox",{required:"this required"})} />
        <p>I consent to being contacted by the team</p>
        </div>
        {errors.checkbox&&(<p  className="errors">{errors.checkbox.message}</p>)}
      </div>
    <button className="form-submit" type="submit" disabled={isSubmitting} style={isSubmitting?{backgroundColor:"gray"}:{backgroundColor:"blue"}}>submit</button>
    </form>
  )
}

export default Form
