import { useForm } from "react-hook-form";
import { countries } from "countries-list";

function App() {
    const { register, handleSubmit, formState: { errors }, reset, trigger } = useForm();
    const countriesList = Object.values(countries);

    //   useEffect(() => {
    //       trigger();
    //   }, [trigger]);

    //for update form use required property or onKeyUp
    //for regitraion useform reuired & oninvalid
    const submitHandler = (data) => {
        console.log(data);
        reset();
    };

    //for file
    const onChange = (event) => {
        const file = event.target.files;
        setFile(file);

        if (event.target.name === "file") {
            if (file.length === 0) {
                window.alert("Please select a product image");
                return false;
            }
            for (let i = 0; i < file.length; i++) {
                if (file[i].type !== "image/png" && file[i].type !== "image/jpg" && file[i].type !== "image/jpeg") {
                    window.alert("File does not support. You must use .png or .jpg ");
                    return false;
                }
                if (file[i].size > 5000000) {
                    window.alert("Please upload a image smaller than 5 MB");
                    return false;
                }
            }
        }

        const files = Array.from(event.target.files);
        setImagesPreview([]);
        setImages([]);

        files.forEach((file) => {
            const reader = new FileReader();
            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview((oldArray) => [...oldArray, reader.result]);
                    setImages((oldArray) => [...oldArray, reader.result]);
                }
            };
            reader.readAsDataURL(file);
        });
    };

    //check password
    function check() {
        const password = document.querySelector('input[name=password]');
        const confirm = document.querySelector('input[name=confirm]');
        if (confirm.value === password.value) {
            confirm.setCustomValidity('');
        } else {
            confirm.setCustomValidity('Passwords do not match');
        }

        if (document.getElementById('password').value ==
            document.getElementById('confirm_password').value) {
            document.getElementById('message').style.color = 'green';
            document.getElementById('message').innerHTML = 'matching';
        } else {
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').innerHTML = 'not matching';
        }
    }

    return (
        <div className="container pt-5">
            <div className="row justify-content-sm-center pt-5">
                <div className="col-sm-6 shadow round pb-3">
                    <div className="wrapper my-5">
                        <h1 className="text-center pt-3 text-secondary">Example Form</h1>
                        <form className="shadow-lg" onSubmit={handleSubmit(submitHandler)} enctype="multipart/form-data">
                            {/*-------Name--------- */}
                            <div className="form-group">
                                <label htmlFor="name_field">Name</label>
                                <input
                                    type="text"
                                    id="name_field"
                                    className={`form-control ${errors.name && "invalid"}`}
                                    {...register("name", { required: "Please enter the product name" })}
                                    onInvalid={() => { trigger("name"); }}
                                    // onKeyUp={() => {trigger("name");}}
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                // required
                                />
                                {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
                            </div>

                            {/*-------Email--------- */}
                            <div className="form-group">
                                <label htmlFor="email_field">Email</label>
                                <input
                                    type="email"
                                    id="email_field"
                                    className={`form-control ${errors.email && "invalid"}`}
                                    {...register("email", {
                                        // required: "Please enter your Email ID",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid Email ID",
                                        }
                                    })}
                                    oninvalid={() => { trigger("email"); }}
                                    name='email'
                                    value={email}
                                    onChange={onChange}
                                // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                // required
                                />
                                {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
                            </div>

                            {/*-------Password--------- */}
                            <div className="form-group">
                                <label htmlFor="password_field">Password</label>
                                <input
                                    type="password"
                                    id="password_field"
                                    className={`form-control ${errors.password && "invalid"}`}
                                    {...register("password", {
                                        required: "Please enter the password",
                                        minLength: {
                                            value: 8,
                                            message: "Password should be at least 8 characters",
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Password should be not more than 50 characters",
                                        }
                                    })}
                                    oninvalid={() => { trigger("password"); }}
                                    // onKeyUp={check}
                                    name='password'
                                    value={password}
                                    onChange={onChange}
                                // pattern=".{8,}"
                                // title="Eight or more characters"
                                // pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                // title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
                                // required
                                />
                                {errors.password && (<small className="text-danger">{errors.password.message}</small>)}
                            </div>

                            {/*-------Confirm Password--------- */}
                            <div className="form-group">
                                <label htmlFor="confirm_password_field">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirm_password_field"
                                    className={`form-control ${errors.confirm_password && "invalid"}`}
                                    {...register("confirm_password", {
                                        required: "Please enter the password",
                                        validate: () => {
                                            if (watch('confirm_password') !== password) {
                                                return "Your passwords do not match";
                                            }
                                        },
                                        minLength: {
                                            value: 8,
                                            message: "Password should be at least 8 characters",
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Password should be not more than 50 characters",
                                        }
                                    })}
                                    oninvalid={() => { trigger("confirm_password"); }}
                                    name='confirm_password'
                                    value={confirm_password}
                                    onChange={onChange}
                                // required
                                />
                                {errors.confirm_password && (<small className="text-danger">{errors.confirm_password.message}</small>)}
                            </div>

                            {/*-------Mobile--------- */}
                            <div className="form-group">
                                <label htmlFor="mobile_field">Mobile Number</label>
                                <input
                                    type="text"
                                    id="mobile_field"
                                    className={`form-control ${errors.mobile && "invalid"}`}
                                    {...register("mobile", {
                                        required: "Please enter your mobile number",
                                        pattern: {
                                            value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
											// for indian mobile no /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/
                                            message: "Invalid mobile no",
                                        }
                                    })}
                                    oninvalid={() => { trigger("mobile"); }}
                                    name='mobile'
                                    value={mobile}
                                    onChange={onChange}
                                // required
                                />
                                {errors.mobile && (<small className="text-danger">{errors.mobile.message}</small>)}
                            </div>

                            {/*-------Price--------- */}
                            <div className="form-group">
                                <label htmlFor="price_field">Price</label>
                                <input
                                    type="text"
                                    id="price_field"
                                    onWheel={(event) => event.currentTarget.blur()}
                                    name="price_field"
                                    className={`form-control ${errors.price && "invalid"}`}
                                    {...register("price", {
                                        required: "Please enter the product price.",
                                        min: {
                                            value: 1,
                                            message: "The minimum price should be not less than 1 ",
                                        },
                                        max: {
                                            value: 1000000,
                                            message: "The maximum price should be not more than 1000000",
                                        },
                                        pattern: {
                                            value: /^[0-9]*$/,
                                            message: "Only numbers are allowed",
                                        }
                                    })}
                                    onInvalid={() => { trigger("price"); }}
                                    value={original_price}
                                    onChange={(e) => setOriginal_price(e.target.value)}
                                    required
                                />
                                {errors.price && (<small className="text-danger">{errors.price.message}</small>)}
                            </div>

                            {/*-------Description--------- */}
                            <div className="form-group">
                                <label htmlFor="description_field">Description</label>
                                <textarea
                                    name="description_field"
                                    id="description_field"
                                    className={`form-control ${errors.description && "invalid"}`}
                                    {...register("description", {
                                        minLength: {
                                            value: 20,
                                            message: "The minimum description length should be more than 20 characters",
                                        },
                                        maxLength: {
                                            value: 7000,
                                            message: "The maximum description length should be more than 7000 characters",
                                        }
                                    })}
                                    onInvalid={() => {
                                        trigger("description");
                                    }}
                                    rows="8"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                                {errors.description && (<small className="text-danger">{errors.description.message}</small>)}
                            </div>

                            {/*-------Postal Code--------- */}
                            <div className="form-group">
                                <label htmlFor="postal_code_field">Postal Code</label>
                                <input
                                    type="text"
                                    id="postal_code_field"
                                    className={`form-control ${errors.postal_code && "invalid"}`}
                                    {...register("postal_code", {
                                        pattern: {
                                            value: /^\d{3}\s?\d{3}$/,
                                            message: "Your Entered Zip Code Is Not Valid.",
                                        },
                                    })}
                                    oninvalid={() => { trigger("postal_code"); }}
                                    value={postalCode}
                                    onChange={(e) => setPostalCode(e.target.value)}
                                // pattern="([0-9]{6}|[0-9]{3}\s[0-9]{3})"
                                // required
                                />
                                {errors.postal_code && (<small className="text-danger">{errors.postal_code.message}</small>)}
                            </div>

                            {/*-------Select options--------- */}
                            <div className="form-group">
                                <label htmlFor="category_field">Select Category</label>
                                <select
                                    id="category_field"
                                    className={`form-control ${errors.category && "invalid"}`}
                                    // required
                                    {...register("category", { required: "Please select one category of options" })}
                                    onInvalid={() => { trigger("category"); }}
                                    defaultValue={{ label: "Select Dept", value: 0 }}
                                    value={categoryName}
                                    onChange={(e) => setCategoryName(e.target.value)}
                                >
                                    <option value="">Please select a category...</option>
                                    {category.map((cat) => (
                                        <option key={cat.category} value={cat.category}>
                                            {cat.category}
                                        </option>
                                    ))}
                                </select>
                                {errors.category && (<small className="text-danger">{errors.category.message}</small>)}
                            </div>

                            {/*-------Date--------- */}
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

                            {/*-------Country--------- */}
                            <div className="form-group">
                                <label htmlFor="country_field">Country</label>
                                <select
                                    id="country_field"
                                    className={`form-control ${errors.country && "invalid"}`}
                                    {...register("country", { required: "Please Select Country" })}
                                    oninvalid={() => { trigger("country"); }}

                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                    required
                                > {errors.country && (<small className="text-danger">{errors.country.message}</small>)}
                                    {countriesList.map((country) => (
                                        <option key={country.name} value={country.name}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                            </div>


                            {/*-------Search--------- */}
                            <div className="form-group">
                                <label for="search">Search:</label>
                                <input
                                    type="search"
                                    id="search"
                                    name="search"
                                    pattern="[^'\x22]+"
                                    title="Invalid input"
                                    required
                                />
                            </div>

                            {/*-------Homepage--------- */}
                            <label for="website">Homepage:</label>
                            <input
                                type="url"
                                id="website"
                                name="website"
                                pattern="https?://.+"
                                title="Include http://"
                                required
                            />

                            {/*-------Images--------- */}
                            <div className="form-group">
                                <label>Images</label>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        name="file"
                                        className="custom-file-input"
                                        id="customFile"
                                        onChange={onChange}
                                        multiple
                                        required
                                    />
                                    <label className="custom-file-label" htmlFor="customFile">Choose Images</label>
                                </div>

                                {imagesPreview.map((img) => (
                                    <img
                                        src={img}
                                        key={img}
                                        alt="Images Preview"
                                        className="mt-3 mr-2"
                                        width="55"
                                        height="52"
                                    />
                                ))}
                            </div>

                            <button type="submit" className="btn update-btn btn-block mt-4 mb-3" >Update</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

