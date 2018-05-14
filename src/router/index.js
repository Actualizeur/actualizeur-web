import Vue from "vue";
import Router from "vue-router";
import Home from "../components/Home";
import Posts from "../components/Posts";
import NewPost from "../components/NewPost";
import EditPost from "../components/EditPost";
import About from "../components/about";
import newUser from "../components/newUser";
import Users from "../components/Users";
import Login from "../components/Login";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/posts",
      name: "Posts",
      component: Posts
    },
    {
      path: "/posts/new",
      name: "NewPost",
      component: NewPost
    },
    {
      path: "/posts/:id",
      name: "EditPost",
      component: EditPost
    },
    {
      path: "/about",
      name: "About",
      component: About
    },
    {
      path: "/signup",
      name: "newUser",
      component: newUser
    },
    {
      path: "/users",
      name: "Users",
      component: Users
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
