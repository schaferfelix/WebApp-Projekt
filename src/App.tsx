import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import type { ListItem } from './types/list';
import Header from './components/Header'
import Footer from './components/Footer'

import HomeView from './pages/HomeView'
import SignInView from './pages/SignInView'
import AccountView from './pages/AccountView'
import ListView from './pages/ListView'
import NewListView from './pages/NewListView'
import SearchResultsView from './pages/SearchResultsView'

const LIST_DATA_KEY = 'list_creator_list_data';

function App() {
    const [lists, setLists] = useState<ListItem[]>([]);

    useEffect(() => {
        const saved = localStorage.getItem(LIST_DATA_KEY);
        if (saved) {
            setLists(JSON.parse(saved));
            return;
        }

        async function loadInitialLists() {
            const res = await fetch('/ListsData.json');
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const data: { lists: ListItem[] } = await res.json();
                setLists(data.lists);
                localStorage.setItem(LIST_DATA_KEY, JSON.stringify(data.lists));
        }

        loadInitialLists();
    }, []);

    const createList = (newList: ListItem) => {
        setLists((prev) => {
            const updated = [...prev, newList];
            localStorage.setItem(LIST_DATA_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const togglePublicPrivate = (id: number) => {
        setLists((prev) => {
            const updatedListData = prev.map((list) =>
                list.id === id ? { ...list, public: !list.public } : list
            );
            localStorage.setItem(LIST_DATA_KEY, JSON.stringify(updatedListData));
            return updatedListData;
        });
    };

    return (
    <>
        <BrowserRouter>
            <Header/>

            <main>
                <Routes>
                    <Route path="/" element={<HomeView lists={lists.filter((l) => l.public)}/>} />
                    <Route path="/sign-in" element={<SignInView/>} />
                    <Route path="/account" element={<AccountView lists={lists} togglePublicPrivate={togglePublicPrivate}/>} />
                    <Route path="/list/:id" element={<ListView lists={lists}/>} />
                    <Route path="/new-list" element={<NewListView createList={createList}/>} />
                    <Route path="/search" element={<SearchResultsView lists={lists.filter((l) => l.public)}/>} />
                </Routes>
            </main>

            <Footer/>
        </BrowserRouter>
    </>
    )
}

export default App
