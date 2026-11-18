import './SignInView.css'

function SignInView() {
    return (
        <section id="sign-in">
            <h2>Anmeldung</h2>
            <form className="sign-in" action="/sign-in" method="post">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" autoComplete="name" required/>

                <label htmlFor="email">E-Mail</label>
                <input id="email" name="email" type="email" autoComplete="email" required/>

                <button type="submit">Anmelden</button>
            </form>
        </section>
    );
}

export default SignInView