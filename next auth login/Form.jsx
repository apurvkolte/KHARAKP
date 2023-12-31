import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
// import { getError } from "@/utils/error";
// import { toast } from "react-toastify";
import { useRouter } from "next/router";

import { toast } from 'react-toastify'

const Form = () => {
  const { data: session } = useSession();
  console.log("session", session);
  const router = useRouter();
  const { redirect } = router.query;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [pre, setPre] = useState('');

  useEffect(() => {
    if (session?.user) {
      router.push(redirect || "/");
    }
  }, [router, session, redirect]);


  const submitHandler = async (e) => {
    e.preventDefault();

    // setLoading(true);

    const result = await signIn('credentials', {
      redirect: false,
      email,
      password
    })

    // setLoading(false)

    if (result.error) {
      toast.error(result.error);
    } else {
      window.location.href = '/'
    }

  }


  return (
    <form onSubmit={submitHandler}>
      <div className="heading text-center">
        <h3>Login to your account</h3>
        <p className="text-center">
          Dont have an account?{" "}
          <Link href="/profile">
            <a className="text-thm">Sign Up!</a>
          </Link>
        </p>
      </div>
      {/* End .heading */}

      <div className="input-group mb-2 mr-sm-2">
        <input
          type="text"
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="User Name Or Email"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-user"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="input-group form-group">
        <input
          type="password"
          className="form-control"
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Password"
        />
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="flaticon-password"></i>
          </div>
        </div>
      </div>
      {/* End .input-group */}

      <div className="form-group form-check custom-checkbox mb-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="remeberMe"
        />
        <label
          className="form-check-label form-check-label"
          htmlFor="remeberMe"
        >
          Remember me
        </label>

        <a className="btn-fpswd float-end" href="#">
          Forgot password?
        </a>
      </div>
      {/* End .form-group */}

      <button type="submit" className="btn btn-log w-100 btn-thm">
        Log In
      </button>
      {/* login button */}

      <div className="divide">
        <span className="lf_divider">Or</span>
        <hr />
      </div>
      {/* devider */}

      <div className="row mt25">
        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn-block color-white bgc-fb mb0 w-100"
          >
            <i className="fa fa-facebook float-start mt5"></i> Facebook
          </button>
        </div>
        {/* End .col */}

        <div className="col-lg-6">
          <button
            type="submit"
            className="btn btn2 btn-block color-white bgc-gogle mb0 w-100"
          >
            <i className="fa fa-google float-start mt5"></i> Google
          </button>
        </div>
        {/* End .col */}
      </div>
      {/* more signin options */}
    </form>
  )
}

export default Form;
