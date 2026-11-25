import { Link } from 'react-router-dom';
import './AccountView.css'

import type { ListItem } from '../types/list';

import ListsGrid from '../components/ListsGrid';

function AccountView({ lists, togglePublicPrivate} : { lists: ListItem[], togglePublicPrivate: (id: number) => void }) {
    return (
        <>
            <section id="my-lists">
                <h2>My LISTS</h2>
                <ListsGrid
                    lists={lists}
                    showPublicToggle
                    onTogglePublic={togglePublicPrivate}
                />

                <div className="create-list-button">
                    <Link to="/new-list">NEW LIST</Link>
                </div>
            </section>
        </>
    );
}

export default AccountView