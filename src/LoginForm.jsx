import { useState } from "react";

function LoginForm() {
    const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username : ${formData.username} , password : ${formData.password}`);
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
            <br />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <br />
            <button type="submit">Login</button>
        </form>
    )
}

export default LoginForm;