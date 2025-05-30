import { useForm } from "react-hook-form";

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onTouched" });

  const onSubmit = (data) => {
    console.log("Form submitted data", data);
  };

  return (
    <div className="col-md-4 offset-md-4 mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("username", {
            required: { value: true, message: "Username is required" },
          })}
          style={{ marginBottom: "20px" }}
          className="form-control"
          type="text"
          placeholder="Enter username"
        />
        <p style={{ color: "red" }}>{errors?.username?.message}</p>
        <input
          {...register("password", {
            required: { value: true, message: "Password is required" },
          })}
          style={{ marginBottom: "20px" }}
          className="form-control"
          type="text"
          placeholder="Enter password"
        />
        <p style={{ color: "red" }}>{errors?.password?.message}</p>

        <input
          {...register("email", {
            required: { value: true, message: "Email is required" },
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email",
            },
          })}
          className="form-control"
          type="text"
          placeholder="Enter email"
        />
        <p style={{ color: "red" }}>{errors?.email?.message}</p>
        <button
          style={{ margin: " 20px 180px" }}
          className="btn btn-outline-primary"
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default ReactHookForm;
