import "./App.css";
import { useForm } from "react-hook-form";
function App() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
        reset();
    };
    // console.log(watch());
    // console.log(errors.name)
    return (
        <div className="container pt-5">
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-3">
                    <h1 className="text-center pt-3 text-secondary">Example Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label className="col-form-label">Name:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name && "invalid"}`}
                                {...register("name", { required: "Please enter the product name" })}
                                onKeyUp={() => {
                                    trigger("name");
                                }}
                            />
                            {errors.name && (
                                <small className="text-danger">{errors.name.message}</small>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Age:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.age && "invalid"}`}
                                {...register("age", {
                                    required: "Age is Required",
                                    min: {
                                        value: 13,
                                        message: "Minimum Required age is 13",
                                    },
                                    max: {
                                        value: 65,
                                        message: "Maximum allowed age is 65",
                                    },
                                    pattern: {
                                        value: /^[0-9]*$/,
                                        message: "Only numbers are allowed",
                                    },

                                })}
                                onKeyUp={() => {
                                    trigger("age");
                                }}
                            />
                            {errors.age && (
                                <small className="text-danger">{errors.age.message}</small>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Email:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.email && "invalid"}`}
                                {...register("email", {
                                    required: "Email is Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Invalid email address",
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger("email");
                                }}
                            />
                            {errors.email && (
                                <small className="text-danger">{errors.email.message}</small>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Phone:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.phone && "invalid"}`}
                                {...register("phone", {
                                    required: "Phone is Required",

                                    //  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
//									for indian mobile no ^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){9}\d$
// /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/  //best all
// /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}$/g exact 10 digit number


                                    pattern: {
                                        value: /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/,
                                        message: "Invalid mobile no",
                                    },
                                    maxLength: {
                                        value: 15,
                                        message: "Invalid mobile no",
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger("phone");
                                }}
                            />
                            {errors.phone && (
                                <small className="text-danger">{errors.phone.message}</small>
                            )}
                        </div>
                        <div className="form-group">
                            <label className="col-form-label">Message:</label>
                            <textarea rows="6"
                                className={`form-control ${errors.message && "invalid"}`}
                                {...register("message", {
                                    required: "Message is Required",
                                    minLength: {
                                        value: 10,
                                        message: "Minimum Required length is 10",
                                    },
                                    maxLength: {
                                        value: 50,
                                        message: "Maximum allowed length is 50 ",
                                    }
                                })}
                                onKeyUp={() => {
                                    trigger("message");
                                }}
                            ></textarea>
                            {errors.message && (
                                <small className="text-danger">{errors.message.message}</small>
                            )}
                        </div>
						
						 <div className="form-group">
                                    <label htmlFor="expired_field">Expiry Date</label>
                                    <input
                                        type="date"
                                        id="expired_field"
                                        className="form-control"
                                        value={lastDate}
                                        onChange={(e) => setLastDate(e.target.value)}
                                        min={new Date().toISOString().split('T')[0]}
                                        required
                                    />
                                </div>
								
                        <input
                            type="submit"
                            className="btn btn-primary my-3"
                            value="Send message"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
}

export default App;


for update
{
        ...register("email", {
            required: "Email is Required",
            value: true,
            pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
            }
        })
    }
								reiored
