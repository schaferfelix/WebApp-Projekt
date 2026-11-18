import './SignInView.css'

function HomeView() {
    return (
        <>
            <h1>Welcome to List Creator</h1>
            <p className="welcome-message"> Create fully customizable Lists, track whatever you want!</p>

            <section id="featured-lists">
                <h2>FEATURED LISTS</h2>
                <ul className="lists-display">
                    
                </ul>
            </section>
        </>
    );
}

export default HomeView