// import {ProfileType, profileReducer} from "./profileReducer";
// import {addProfilePost} from "../actions/profileActions";
//
// test('correct task should be deleted from correct array', () => {
//     const startState: ProfileType = {
//         posts: [
//             {id: "1", text: "Hello world", like: 10},
//             {id: "2", text: "It's first post", like: 20},
//             {id: "3", text: "It's second post", like: 30},
//         ],
//         postText: "",
//     };
//
//     const newAddingText =  "New text";
//     startState.postText = newAddingText;
//
//     const action = addProfilePost();
//
//     const endState = profileReducer(startState, action);
//
//     expect(endState.posts.length).toBe(4);
//     expect(endState.posts[4].text).toBe(newAddingText);
// });
