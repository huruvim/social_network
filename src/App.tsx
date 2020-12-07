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
import {AddPostActionType, ChangeNewTextActionType, RootStateType, ActionsTypes} from './redux/state'

type StateType = {
    state: RootStateType
    // state: RootStateType
    // likesCount: number
    // newPostText: string
    // message: string
    // changeNewTextCallback: (newMessage: string) => void
    // addPostCallback: () => void
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
                       />}/>

                <Route path="/profile"
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                           // changeNewTextCallback={props.changeNewTextCallback}
                           // addPostCallback={props.addPostCallback}

                       />}/>


                <Route path="/news" render={() => <News/>}/>
                <Route path="/music" render={() => <Music/>}/>
                <Route path="/settings" render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
