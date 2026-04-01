import { useState} from "react";
function Contact() {
    const [email, SetEmail] =useState("");
    const [subjetct, SetSubjetc] = useState("");
    const [massage, SetMessage] = useState("");

    function handkeSubmit() {}

    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <label>Email</label>
                <input 
                type="email"
                placeholder="camaranassira26@gmail.com"
                />


                <label>Message</label>
                <input 
                type="text"
                placeholder="Entrez subject"
                />

                <label>Message</label>
                <textarea 
                rows="5"
                placeholder="Entrez message"
                />
            </form>
        </div>
    )
    
}

export default Contact;