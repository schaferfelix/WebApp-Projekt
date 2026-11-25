import { Link, useSearchParams } from 'react-router-dom';
import './SearchResultsView.css'

import type { ListItem } from '../types/list';

function SearchResultsView({ lists }: {lists: ListItem[]}) {
    const [searchParams] = useSearchParams();
    const searchQuery = (searchParams.get('q') ?? '').trim().toLowerCase();

    const filteredLists = searchQuery
        ? lists.filter((list) => list.name.toLowerCase().includes(searchQuery))
        : lists;

    return (
        <>
            <section id="search-results">
                <h2>SEARCH RESULTS</h2>
                <ul className="lists-display">
                    {filteredLists.length === 0 ? (
                        <li>No matching public lists found.</li>
                        ) : (
                        filteredLists.map((list) => (
                            <li key={list.id} className="list-element">
                                <button type="button" className="make-list-public-button">
                                    USER: Alice
                                </button>
                                <h3>
                                    <Link to={`/list/${list.id}`}>{list.name}</Link>
                                </h3>
                            </li>
                        ))
                    )}
                </ul>
            </section>
        </>
    );
}

export default SearchResultsView