// src/router/Index.js
import { createRouter, createWebHistory } from 'vue-router';
import PrescriptionForm from '../components/PrescriptionForm.vue';
import PrescriptionPrint from '../components/PrescriptionPrint.vue';
import HomePage from '../components/HomePage.vue';
import MedicinesPage from '../components/MedicinesPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/prescription/print', component: PrescriptionPrint },
  { path: '/prescription/new', component: PrescriptionForm },
  { path: '/medicines', component: MedicinesPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
