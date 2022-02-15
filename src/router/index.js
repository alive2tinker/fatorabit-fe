import { createRouter, createWebHistory } from "@ionic/vue-router";
import TabsPage from "../views/TabsPage.vue";
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
    path: '/',
    name: 'LandingPage',
    component: () => import('@/views/LandingPage.vue')
  },
  {
    path: "/",
    redirect: "/tabs/tab1",
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
        redirect: "/tabs/tab1",
      },
      {
        path: "tab1",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "tab2",
        component: () => import("@/views/InvoicesPage.vue"),
      },
      {
        path: "tab3",
        component: () => import("@/views/ItemsPage.vue"),
      },
      {
        path: "tab4",
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
