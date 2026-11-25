import type { ListItem } from '../types/list';

import ListElement from './ListElement';

function FeaturedLists({lists}: {lists: ListItem[]}) {
    return (
        <section id="featured-lists">
            <h2>FEATURED LISTS</h2>
            <ul className="lists-display">
                {lists.map((list) => (
                    <ListElement key={list.id} id={list.id} listName={list.name}/>
                ))}
            </ul>
        </section>
    );
}

export default FeaturedLists