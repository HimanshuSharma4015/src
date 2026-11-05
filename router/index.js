import { createRouter, createWebHistory } from 'vue-router'

import StudentCard from '../components/StudentCard.vue'
import Counter from '../components/Counter.vue'
import BasicVue from '../components/BasicVue.vue'
import ShowHidePassword from '../components/ShowHidePassword.vue'
import Form  from '../components/Form.vue'
import ToDo  from '../components/ToDo.vue'
import ProductListing from '../components/ProductListing.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
 import Child from '../components/Child.vue'
 import Parent  from '../components/Parent.vue'
import HTTPRequest from '../components/HTTPRequest.vue'
import FoodItems from  '../components/FoodItems.vue'
import VueIntro from '../components/VueIntro.vue'
 import VueDirective from '../components/VueDirective.vue'






const routes = [
  {
    path: '/',
    component: {
      template: '<h2>Welcome to Home Page!</h2>'
    }
  },
  {
    path: '/student',
    component: StudentCard,
    
  },
   {path: '/counter',
    component: Counter
  },
  {path: '/BasicVue',
    component: BasicVue
  },
  {
    path:'/HideShowPassword',
    component:ShowHidePassword
  },
  {
    path:'/Form',
    component:Form
  },
  {
    path:'/ToDo',
    component:ToDo
  }
  ,
  {
    path:'/ProductListing',
    component:ProductListing
  },
  {
    path:'/ShoppingCart',
    component:ShoppingCart
  }
  ,
  {
    path:'/Parent',
    component:Parent
  }
  ,
  {
    path:'/Child',
    component:Child
  },
  {
    path:'/HTTPRequest',
    component:HTTPRequest
  },
  {
    path:'/FoodItems',
    component: FoodItems
  },
  {
    path:'/VueIntro',
    component:VueIntro
  }
  ,
  {
    path:'/VueDirective',
    component:VueDirective
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// IMPORTANT: Export router as default
export default router