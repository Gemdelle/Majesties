import '../styles/contact.css';

const ContactPage = (props) => {
    return (
        <main className="holder contact titles">
        <section>
            <h2>Contact</h2>
            <form action="" className="form">
                <p>
                    <label htmlFor="name">Name</label>
                    <input type="text"/>
                </p>
                <p>
                    <label htmlFor="mail">Email</label>
                    <input type="email" name="" id=""/>
                </p>
                <p>
                    <label htmlFor="phone">Telephone</label>
                    <input type="text" name="" id=""/>
                </p>
                <p>
                    <label htmlFor="message">Message</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </p>
                <p>
                    <input type="submit" name="" id=""/>
                </p>
            </form>
        </section>
        <section className="data">
            <h2>Other means of contact</h2>
            <p>You can also contact us through the following means</p>
            <ul>
                <li><i className="fa-brands fa-instagram icon"></i> <a href="https://www.google.com/.ar/">Instagram</a></li>
                <li><i className="fa-brands fa-facebook icon"></i> <a href="https://www.google.com/.ar/">Facebook</a></li>
                <li><i className="fa-brands fa-twitter icon"></i> <a href="https://www.google.com/.ar/">Twitter</a></li>
                <li><i className="fa-brands fa-youtube icon"></i> <a href="https://www.google.com/.ar/">Youtube</a></li>
                <li><i className="fa-brands fa-discord icon"></i> <a href="https://www.google.com/.ar/">Discord</a></li>
            </ul>
        </section>
    </main>
    )
}

export default ContactPage;