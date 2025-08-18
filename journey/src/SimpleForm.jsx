import { useState } from "react";

function SimpleForm() {
    const [name, setName] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Hello,${name}`);
    };

    return (
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">Enter Your Name </label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            <button type="submit">Submit</button>
        </form>
    )
}

export default SimpleForm;