// import axios from 'axios';
// import { AUTH_PEND, AUTH_USER, AUTH_ERROR, UNAUTH_USER } from "./mutationTypes";
// // import { signInUser, authError, signoutUser } from "./mutations";
// const ROOT_URL = "http://localhost:8080";
//
// export function signInUser(email, password) {
//   return function( email, password) {
//     // Submit email/password to server
//     axios
//       .post(`${ROOT_URL}/signin`, { email, password })
//       .then(response => {
//         // If request is good...
//         // - Save the JWT Token
//         localStorage.setItem("token", response.data.token);
//         // - Redirect to the route '/feature'
//         this.$router.push({ name: "Home" });
//         // - Update state to indicate user is authenticated
//         store.dispatch({ type: AUTH_USER });
//       })
//       .catch(() => {
//         // If request is bad...
//         // - Show an error to the user
//         store.dispatch(authError("Bad Login Info"));
//       });
//   };
// }
//
// export function authError(error) {
//   return {
//     type: AUTH_ERROR,
//     payload: error
//   };
// }
//
// export function signoutUser() {
//   localStorage.removeItem("token");
//   return {
//     type: UNAUTH_USER
//   };
// }
