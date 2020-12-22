import {ActionsTypes, PostType, ProfilePageType} from "./store";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_TEXT = 'CHANGE-NEW-TEXT';
export type addPostAC = ReturnType<typeof addPostAC>
export type changeNewTextAC = ReturnType<typeof changeNewTextAC>

const initialState: ProfilePageType = {
     posts: [
          {id: 1, message: "What hove you done, Tony?", likesCount: 12},
          {id: 2, message: "This is my post", likesCount: 13},
          {id: 3, message: "This is my second post", likesCount: 15},
          {id: 4, message: "This is my new post", likesCount: 22},
          {id: 5, message: "This is my first post", likesCount: 1}
     ],
     newPostText: ""
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
     switch (action.type) {
          case ADD_POST:
               const newPost: PostType = {
                    id: 5,
                    message: state.newPostText,
                    likesCount: 0,
               }
               return {
                    ...state,
                    posts: [newPost, ...state.posts],
                    newPostText: ''
               }
          case CHANGE_NEW_TEXT:
               return {
                    ...state,
                    newPostText: action.newText
               }
          default:
              return state
     }
}

export const addPostAC = () => {
     return {
          type: ADD_POST
     } as const
}
export const changeNewTextAC = (text: string) => {
     return {
          type: CHANGE_NEW_TEXT,
          newText: text
     } as const
}

export default profileReducer