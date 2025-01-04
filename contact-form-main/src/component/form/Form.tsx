import { SubmitHandler, useForm } from "react-hook-form";
import "./form.css";
import { FormData } from "./FormDataType";

interface FormProps {
  setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
}
const Form = ({setSubmit}:FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    reset
  } = useForm<FormData>();


  //handling popup when submitted
  const onSubmit: SubmitHandler<FormData> = () => {
    //shoing popup
    setSubmit(true)
    reset()
    
    //useing setTimeout for disapearing popup after 3 minutes
    setTimeout(() => {
      setSubmit(false)
    }, 2000);


  };

  const watchFields=watch()

  //when all fileds filled the button color convert to active  color
  const allFieldsFilled =
    watchFields.firstName &&
    watchFields.lastName &&
    watchFields.email &&
    watchFields.radio &&
    watchFields.message &&
    watchFields.checkbox &&
    Object.keys(errors).length === 0;

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Contact Us</h1>
      {/* section name and lastname */}
      <div className=" section-name-lastName">
          {/* section name */}
          <div className="div-name-lastname">
              <label htmlFor="firstName">First Name <span className="star">*</span></label>
              <input
                  type="text"
                  id="firstName"
                  className={`firstName ${errors.firstName ? "error-firstName" : ""}`}
                  {...register("firstName", { required: "This field is required" })}
              />
              {errors.firstName && <p className="errors">{errors.firstName?.message}</p>}
          </div>
          {/* section last name */}
          <div className="div-name-lastname">
              <label htmlFor="lastName">Last Name<span className="star">*</span></label>
              <input
                  type="text"
                  id="lastName"
                  className={`lastname ${errors.lastName ? "error-firstName" : ""}`}
                  {...register("lastName", { required: "This field is required" })}
              />
              {errors.lastName && <p className="errors">{errors.lastName.message}</p>}
          </div>
      </div>

      {/* section email */}
      <div className="feileds">
        <label htmlFor="email" className="email-label">
        Email Address<span className="star">*</span>
        </label>
        <input
          type="text"
          className={`email ${errors.email? "email-error":""}`}
          
          {...register("email", {
            required: " This field is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              message: " Please enter a valid email address",
            },
          })}
        />
         {errors.email &&<p className="errors">{errors.email.message}</p>}
      </div>


     {/* section Query Type */}
      <div className="feileds">
        <label htmlFor="quiry">Query Type<span className="star">*</span></label>
        <div className="quiry">
          <div className={`radio ${errors.radio ? "error-radio" : ""}`}>
            <input
              type="radio"
              {...register("radio", { required: "Please select a query type" })}
            />
            <p>General Enquiry</p>
          </div>
          <div className={`radio ${errors.radio ? "error-radio" : ""}`}>
            <input
              type="radio"
              {...register("radio", { required: "Please select a query type" })}
            />
            <p>Support Request</p>
          </div>
        </div>
        {errors.radio &&<p className="errors">{errors.radio.message}</p>}
      </div>

      {/* section Message */}
      <div className="message-label ">
        <label htmlFor="text">Message<span className="star">*</span></label>
        <textarea
          {...register("message", { required: "This field is required" })}
          className={`message ${errors.message? "error-message":""}`}
        ></textarea>
        {errors.message &&<p className="errors"> {errors.message.message}</p>}
      </div>

      {/* section checkbox */}
      <div >
        <div className="checkbox">
          <input
            type="checkbox"
            id="checkbox"
            {...register("checkbox", { required: "To submit this form, please consent to being contacted" })}
          />
          <p className="paragharph ">I consent to being contacted by the team<span className="star">*</span></p>
        </div>
        {errors.checkbox && <p className="errors">{errors.checkbox.message}</p>}
      </div>


      {/* submit button */}
      <button
        className={`form-submit ${allFieldsFilled ? "button-green" : "button-lightGreen"}`}
        type="submit"
        disabled={isSubmitting}>
        submit
      </button>
    </form>

  );
};

export default Form;
