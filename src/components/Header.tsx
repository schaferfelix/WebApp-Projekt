import { useState, type SyntheticEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();

    const handleSearch = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmed = searchQuery.trim();
        if (trimmed) {
            navigate(`/search?q=${encodeURIComponent(trimmed)}`);
        }
    };

    return (
        <header className="site-header">
            <Link to="/">LIST CREATOR</Link>

            <form className="search-bar" id="search-form" onSubmit={handleSearch}>
                <div className="search-label">SEARCH PUBLIC LISTS</div>
                <input
                    type="text"
                    className="search-bar-input"
                    id="search-input"
                    placeholder="AWAITING INPUT..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>

            <nav aria-label="Navigation">
                <ul>
                    <li><Link to="/account">My Lists</Link></li>
                    <li><Link to="/sign-in">Sign in</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header