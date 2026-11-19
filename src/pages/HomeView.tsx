import './SignInView.css'

import FeaturedLists from '../components/FeaturedLists';

function HomeView() {
    return (
        <>
            <h1>Welcome to List Creator</h1>
            <p className="welcome-message"> Create fully customizable Lists, track whatever you want!</p>

            <FeaturedLists/>
        </>
    );
}

export default HomeView