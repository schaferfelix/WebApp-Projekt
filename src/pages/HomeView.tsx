import './HomeView.css'

import type { ListItem } from '../types/list';

import FeaturedLists from '../components/FeaturedLists';

function HomeView({ lists }: {lists: ListItem[]}) {
    return (
        <>
            <h1>Welcome to List Creator</h1>
            <p className="welcome-message"> Create fully customizable Lists, track whatever you want!</p>

            <FeaturedLists lists={lists}/>
        </>
    );
}

export default HomeView