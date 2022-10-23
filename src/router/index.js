import { createRouter, createWebHistory } from 'vue-router'
import { getAuth } from 'firebase/auth'
import HomeView from '../views/HomeView.vue'
import EditorView from '../views/EditorView.vue'
import ProfileView from '../views/ProfileItems/ProfileView.vue'
import PersonalCabinet from '../views/PersonalCabinet.vue'
import UserPostsView from '../views/ProfileItems/UserPostsView.vue'
import SubscriptionsView from '../views/ProfileItems/SubscriptionsView.vue'
import BookmarksView from '../views/ProfileItems/BookmarksView.vue'
import BugreportView from '../views/ProfileItems/BugreportView.vue'
import AboutView from '../views/AboutView.vue'
import CompaniesView from '../views/CompaniesView.vue'
import CourseView from '../views/CourseView.vue'
import WorksView from '../views/WorksView.vue'
import PostDetail from '../views/PostDetail.vue'
import Forgotpassword from '../views/ForgotpasswordView.vue'



const routes = [
  {
    path: "/post/:slug",
    name: "PostDetail",
    component: PostDetail,
  },
  {
    path: '/forgotpassword',
    name: 'forgotpassword',
    component: Forgotpassword
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/companies',
    name: 'companies',
    component: CompaniesView
  },
  {
    path: '/course',
    name: 'course',
    component: CourseView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView
  },
  {
    path: '/editor',
    name: 'editor',
    component: EditorView
  },
  {
    path: '/personal',
    name: 'personal',
    props:true,
    component: PersonalCabinet,
    meta: { onlyAuthUser: true},
    children:[
      {
        path: '/profile',
        name: 'profile',
        component: ProfileView,
        meta: { onlyAuthUser: true},
       
      },
      {
        path: '/posts',
        name: 'userposts',
        component: UserPostsView
      },
      {
        path: '/subscriptions',
        name: 'subscriptions',
        component: SubscriptionsView
      },
      {
        path: '/bookmarks',
        name: 'bookmarks',
        component: BookmarksView
      },
      {
        path: '/bug-report',
        name: 'bugreport',
        component: BugreportView
      }
      

    ]
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach(  (to,_,next)=>{
const isAuth = !!getAuth().currentUser

if(to.meta.onlyAuthUser){
  if(isAuth){
   next()
  }else{
    next({name:"home"})
  }
  next({name: "home"})
} else{
  next()
}
})

export default router
