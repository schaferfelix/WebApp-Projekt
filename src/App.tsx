import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header className="site-header">
            <a href="homeview.html">LIST CREATOR</a>
            <form className="search-bar" id="search-form">
                <div className="search-label">SEARCH PUBLIC LISTS</div>
                <input type="text" className="search-bar-input" id="search-input" placeholder="AWAITING INPUT..." />
            </form>
            <nav aria-label="Navigation">
                <ul>
                    <li><a href="accountview.html">My Lists</a></li>
                    <li><a href="sign-in.html">Sign in</a></li>
                </ul>
            </nav>
        </header>

        <main>

            <h1>Welcome to List Creator</h1>
            <p className="welcome-message"> Create fully customizable Lists, track whatever you want!</p>

            <section id="featured-lists">
                <h2>FEATURED LISTS</h2>
                <ul className="lists-display">
                    
                </ul>
            </section>

        </main>

        <footer className="site-footer">
            <p>List Creator · A Schäfer project</p>
        </footer>
    </>
  )
}

export default App
