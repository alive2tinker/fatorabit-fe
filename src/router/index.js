import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";
import InvoicesPage from "../views/invoices/IndexPage.vue";
import ItemsPage from "../views/items/IndexPage.vue";
import SettingsPage from "../views/account/IndexPage.vue";
import store from '../store';
import { Storage } from '@capacitor/storage'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/auth/LoginPage.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/auth/RegistrationPage.vue')
  },
  {
    path: '/contact-us',
    name: 'contactus',
    component: () => import('@/views/ContactUsPage.vue')
  },
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('@/views/LandingPage.vue')
  },
  {
    path: "/",
    redirect: "/tabs/tab1",
  },
  {
    path: "/invoices/",
    component: InvoicesPage,
    children: [
      {
        path: '/invoices/:id',
        name: 'invoices.show',
        component: () => import('@/views/invoices/ShowPage.vue')
      },
      {
        path: '/invoices/create',
        name: 'invoices.create',
        component: () => import('@/views/invoices/CreatePage.vue')
      }
    ]
  },
  {
    path: "/items/",
    component: ItemsPage,
    children: [
      {
        path: '/items/create',
        name: 'items.create',
        component: () => import('@/views/items/CreatePage.vue')
      }
    ]
  },
  {
    path: "/settings/",
    component: SettingsPage,
    children: [
      {
        path: "update",
        name: "account.update",
        component: () => import("@/views/account/UpdatePage.vue"),
      },
    ],
  },
  {
    path: "/tabs/",
    component: TabsPage,
    children: [
      {
        path: "",
        name: 'Home',
        redirect: "/tabs/home",
      },
      {
        path: "home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "invoices",
        component: () => import("@/views/InvoicesPage.vue"),
      },
      {
        path: "items",
        component: () => import("@/views/ItemsPage.vue"),
      },
      {
        path: "settings",
        component: () => import("@/views/SettingsPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

const openRoutes = ["Login", "LandingPage", "Register"];

router.beforeEach(async (to, from, next) => {
  const user = await Storage.get({ key: "user" });
  const userObject = JSON.parse(user.value);
  if (userObject !== null || userObject !== undefined)
    await store.dispatch("auth/updateUser", userObject);
  const customerBoarded = await Storage.get({ key: "customerBoarded" });
  await store.dispatch("auth/markCustomerBoarded", customerBoarded.value === null || customerBoarded.value === false ? false : true);
  if (to.name === "LandingPage" && customerBoarded.value === "true") {
    next({ name: "Home" });
  } else if (
    !openRoutes.includes(to.name) &&
    (userObject === null ||
      userObject.token === null ||
      userObject.token === undefined)
  ) {
    next({ name: customerBoarded.value === "true" ? "Login" : "LandingPage" });
  } else {
    next();
  }
});
export default router;
