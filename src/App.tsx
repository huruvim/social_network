import React from 'react';
import './App.css';
import Header from './components/Header/Header'
import {Route} from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {ActionsTypes, RootStateType} from './redux/store'

type StateType = {
    state: RootStateType
    dispatch: (action: ActionsTypes) => void
}

const App: React.FC<StateType> = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path="/dialogs"
                       render={() => <Dialogs
                           dialogsPage={props.state.dialogsPage}
                           dispatch={props.dispatch}
                       />}/>

                <Route path="/profile"
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                       />}/>


                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
