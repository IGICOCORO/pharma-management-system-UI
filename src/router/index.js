import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Medicament from "../pages/Medicament.vue";
import Vente from "../pages/Vente.vue";
import Achat from "../pages/Achat.vue";
import Mutualite from "../pages/Mutualite.vue";
import Fournisseur from "../pages/Fournisseur.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/",name: "dashboard", component: Dashboard, },
  { path: "/medicament",name: "medicament", component: Medicament, },
  { path: "/vente",name: "vente", component: Vente, },
  { path: "/achat",name: "achat", component: Achat, },
  { path: "/mutualite",name: "mutualite", component: Mutualite, },
  { path: "/fournisseur",name: "fournisseur", component: Fournisseur, },
 
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
