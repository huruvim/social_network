import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import {Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from "./components/Users/UsersContainer";


const App: React.FC = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/users" render={ () => <UsersContainer/> }/>
                <Route path="/settings" render={() => <Settings/>}/>

                <Route path="/dialogs"
                       render={ () => <DialogsContainer /> }/>
                <Route path="/profile"
                       render={ () => <Profile/> }/>


            </div>
        </div>
    );
}

export default App;
