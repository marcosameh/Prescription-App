// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PrescriptionForm from '../components/PrescriptionForm.vue';
import PrescriptionView from '../components/PrescriptionView.vue';

const routes = [
  { path: '/', component: PrescriptionForm },
  { path: '/prescription', component: PrescriptionView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
