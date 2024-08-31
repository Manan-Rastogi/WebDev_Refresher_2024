import { useForm } from "react-hook-form";
import "./App.css";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const delay = (d) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, d * 1000);
    });
  };

  const onSubmitForm = async (data) => {
    await delay(2);
    console.log(data);
    if (data.username != "Manan"){
      setError("serverErrors", {message:"Name is Invalid."})
    }
  };

  return (
    <>
      {isSubmitting && <div>Loading...</div>}
      <form
        action="post"
        className="form-react"
        onSubmit={handleSubmit(onSubmitForm)}
      >
        <input
          type="text"
          className="username"
          placeholder="username"
          {...register("username", {
            required: true,
            minLength: { value: 3, message: "Min length for username is 3." },
            maxLength: { value: 10, message: "Max length for username is 10." },
          })}
        />
        {errors.username && <span>{errors.username.message}</span>}
        <br />
        <br />
        <input
          type="password"
          className="password"
          placeholder="password"
          {...register("password", {
            required: true,
            minLength: { value: 3, message: "Min length for password is 3." },
            maxLength: { value: 10, message: "Max length for password is 10." },
          })}
        />
        {errors.password && <span>{errors.password.message}</span>}

        <br />
        <br />
        <button disabled={isSubmitting} className="formSubmit" type="submit">
          Submit
        </button>
        {errors.serverErrors && <span>{errors.serverErrors.message}</span>}               
        {/* Server Errors */}
 
      </form>
    </>
  );
}

export default App;
