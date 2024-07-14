import "./App.css";
import { SubmitHandler, useForm } from "react-hook-form";

type FormFields = {
  name: string;
  email: string;
  password: string;
};

function App() {

  const {register, handleSubmit}=useForm<FormFields>();


  const onsubmit: SubmitHandler<FormFields>=(data)=>{

  }


  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onsubmit)}>
          <input
          {...register("name")}
            type="text"
            name="name"
            id="name"
            placeholder="Input your name"
          />
          <input
            type="email"
            {...register("email")}
            name="email"
            id="email"
            placeholder="Input the email"
          />
          <input
            type="password"
            {...register("password")}
            name="password"
            id="password"
            placeholder="Input your password"
          />
          <button type="submit">Submit button</button>
        </form>
      </div>
    </>
  );
}

export default App;
