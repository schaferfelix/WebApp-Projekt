import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ListView.css'

import type { ListItem } from '../types/list';

import ListTable from '../components/ListTable';

function ListView({ lists }: {lists: ListItem[]}) {
    const { id } = useParams();
    const [list, setList] = useState<ListItem>();

    useEffect(() => {
        async function findListByID() {
            const listItem = lists.find((l: ListItem) => l.id === Number(id));
            setList(listItem ?? undefined);
        }
        findListByID();
    }, []);

    return (
        <>
            <ListTable list={list}/>
        </>
    );
}

export default ListView