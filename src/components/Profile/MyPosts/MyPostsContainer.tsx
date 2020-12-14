import React from 'react';
import {addPostAC, changeNewTextAC} from "../../../redux/profile-reducer";
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';
//
// type PropsType = {
//     store: Store
// }


const MyPostsContainer = () => {
    return (
        <StoreContext.Consumer>
            { (store) => {
                const state = store.getState()

                const addNewPost = () => {
                    store.dispatch(addPostAC(state.profilePage.newPostText));
                }

                const updateNewPostText = (text: string) => {
                    store.dispatch(changeNewTextAC(text))
                }
                return <MyPosts posts={state.profilePage.posts}
                                newPostText={state.profilePage.newPostText}
                                dispatch={store.dispatch}
                                updateNewPostText={updateNewPostText}
                                addNewPost={addNewPost}
                />
            }
        }
        </StoreContext.Consumer>

    )
}

export default MyPostsContainer;