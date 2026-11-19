import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ListView.css'

import type { ListItem } from '../types/list';

import ListTable from '../components/ListTable';

function ListView() {
    const { id } = useParams();
    const [list, setList] = useState<ListItem>();

    useEffect(() => {
        async function laden() {
            const antwort = await fetch("/ListsData.json");
            if (!antwort.ok) throw new Error(`HTTP ${antwort.status}`);
            const data = await antwort.json();
            const listItem = data.lists.find((l: ListItem) => l.id === Number(id));
            setList(listItem ?? undefined);
        }
        laden();
    }, []);

    return (
        <>
            <ListTable list={list}/>
        </>
    );
}

export default ListView