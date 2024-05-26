import { login } from "../lib/action";

const LoginForm = () => {
  const input = "p-2 rounded-md outline placeholder:text-xs outline-none";
  return (
    <form action={login}>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="text"
          className={input}
          placeholder="user@email.com"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <input
          id="password"
          type="password"
          name="password"
          className={input}
          placeholder="*********"
        />
      </div>

      <button
        type="submit"
        className="mt-4 w-full text-lg font-semibold text-white bg-teal-700 px-4 py-2 rounded-lg"
      >
        {"Login"}
      </button>
    </form>
  );
};

export default LoginForm;
