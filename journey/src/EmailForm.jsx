import { useState } from "react";

function EmailForm() {
    const [email, setEmail] = useState('');
    const [emailError, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.includes('@')) {
            setError("Enter Valid Email Address")
        } else {
            setError('')
            alert(`Email Submitted : ${email}`)
        }
    }

    return (
        <form action="" onSubmit={handleSubmit}>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" />
            <button type="submit">Submit</button>
            {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
        </form>
    )
}

export default EmailForm;