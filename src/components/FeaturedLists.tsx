import { useEffect, useState } from 'react';

import type { ListItem } from '../types/list';

import ListElement from './ListElement';

function FeaturedLists() {
    const [Lists, setLists] = useState<ListItem[]>([]);

    useEffect(() => {
        async function laden() {
            const antwort = await fetch("/ListsData.json");
            if (!antwort.ok) throw new Error(`HTTP ${antwort.status}`);
            const data = await antwort.json();
            setLists(data.lists);
        }
        laden();
    }, []);

    return (
        <section id="featured-lists">
            <h2>FEATURED LISTS</h2>
            <ul className="lists-display">
                {Lists.map((List) => (
                    <ListElement key={List.id} id={List.id} listName={List.name}/>
                ))}
            </ul>
        </section>
    );
}

export default FeaturedLists