import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Header from './components/Header'
import Footer from './components/Footer'

import HomeView from './pages/HomeView'
import SignInView from './pages/SignInView'
import AccountView from './pages/AccountView'
import ListView from './pages/ListView'
import NewListView from './pages/NewListView'
import SearchResultsView from './pages/SearchResultsView'

function App() {

  return (
    <>
        <BrowserRouter>
            <Header/>

            <main>
                <Routes>
                    <Route path="/" element={<HomeView/>} />
                    <Route path="/sign-in" element={<SignInView/>} />
                    <Route path="/account" element={<AccountView/>} />
                    <Route path="/list/:id" element={<ListView/>} />
                    <Route path="/new-list" element={<NewListView/>} />
                    <Route path="/search" element={<SearchResultsView/>} />
                </Routes>
            </main>

            <Footer/>
        </BrowserRouter>
    </>
  )
}

export default App
