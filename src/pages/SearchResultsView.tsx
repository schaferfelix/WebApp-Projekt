import './SearchResultsView.css'

import type { ListItem } from '../types/list';

function SearchResultsView({ lists }: {lists: ListItem[]}) {
    return (
        <>
            <section id="search-results">
                <h2>SEARCH RESULTS</h2>
                <ul className="lists-display">
                    
                </ul>
            </section>
        </>
    );
}

export default SearchResultsView