import { useState } from "react";
import "../style/signup.css"
import { Link,useNavigate } from "react-router-dom";
import backArrow from "../assets/back-arrow.png";



function SignUp() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };
    const onBackNavigation = ()=>{
        console.log("navigator")
           navigate("/")
      }


    return <div className="signup-container">
        <div className="signup-box">

            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <button onClick={onBackNavigation}><img src={backArrow} alt="Back" width={20} style={{ cursor: "pointer" }} /></button>

                <h2 style={{ marginRight: 140 }}>Sign Up</h2>
            </div>
            <form >
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="signup-btn">Sign Up</button>
                <p><span>Already account you have to click here <span className="signup-login"><Link to="/signin">👉login</Link></span></span></p>
            </form>
        </div>
    </div>
}
export default SignUp