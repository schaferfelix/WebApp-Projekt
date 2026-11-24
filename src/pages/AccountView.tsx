import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import type { ListItem } from '../types/list';
import ListsGrid from '../components/ListsGrid';
import './AccountView.css'

function AccountView() {
    const [lists, setLists] = useState<ListItem[]>([])

    useEffect(() => {
        async function loadLists() {
            try {
                const response = await fetch('/ListsData.json');
                if (!response.ok) throw new Error(`HTTP ${response.status}`);

                const data = await response.json();
                setLists(data.lists);
            } catch (error) {
                console.error('Loading lists failed:', error);
            }
        }

        loadLists();
    }, []);

    const handleTogglePublic = (id: number) => {
        setLists((prev) =>
            prev.map((list) =>
                list.id === id ? { ...list, public: !list.public } : list
            )
        );
    };

    return (
        <>
            <section id="my-lists">
                <h2>My LISTS</h2>
                <ListsGrid
                    lists={lists}
                    showPublicToggle
                    onTogglePublic={handleTogglePublic}
                />

                <div className="create-list-button">
                    <Link to="/new-list">NEW LIST</Link>
                </div>
            </section>
        </>
    );
}

export default AccountView