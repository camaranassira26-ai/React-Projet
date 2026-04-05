import { useState } from "react";

function Contact() {
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        alert(`Merci ! Votre message a été envoyé 😊`);
        setEmail("");
        setSubject("");
        setMessage("");
    }

    return (
        <div style={{ maxWidth: "500px", margin: "40px auto", padding: "30px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)", borderRadius: "12px" }}>
            <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Contactez-nous</h1>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                <label style={{ fontWeight: "bold" }}>Email</label>
                <input
                    type="email"
                    placeholder="Votre email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
                />

                <label style={{ fontWeight: "bold" }}>Sujet</label>
                <input
                    type="text"
                    placeholder="Votre sujet"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
                />

                <label style={{ fontWeight: "bold" }}>Message</label>
                <textarea
                    rows="5"
                    placeholder="Votre message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{ padding: "10px", borderRadius: "8px", border: "1px solid #ccc" }}
                />

                <button
                    type="submit"
                    style={{
                        padding: "12px",
                        backgroundColor: "#111",
                        color: "white",
                        border: "none",
                        borderRadius: "25px",
                        cursor: "pointer",
                        fontWeight: "bold",
                        fontSize: "16px"
                    }}
                >Envoyer</button>
            </form>
        </div>
    );
}

export default Contact;