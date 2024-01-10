<template>
  <div class="container mt-5">
    <div class="text-center mb-4">
      <h1 class="display-4 text-primary">{{ doctorName }}</h1>
    </div>

    <!-- <div v-if="prescription.patientName" class="mb-3">
      <h4 class="mb-0">اسم المريض:</h4>
      <p class="patient-name">{{ prescription.patientName }}</p>
    </div> -->

    <div v-for="(medicament, index) in prescription.medicaments" :key="index" class="mb-4">
      <div class="mb-3" v-if="medicament.name">
        <p class="medicament-name">{{ medicament.name }}</p>
      </div>
      <div class="mb-3" v-if="medicament.notes">
        <p class="medicament-notes">{{ medicament.notes }}</p>
      </div>
    </div>

    <div class="text-center mt-4">
      <button @click="printPrescription" class="btn btn-primary">
        <i class="fas fa-print"></i> طباعة الروشتة
      </button>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    prescription() {
      const storedPrescription = localStorage.getItem('prescription');
      return storedPrescription ? JSON.parse(storedPrescription) : {};
    },
    doctorName() {
      return "دكتور :ياسر حنا ثابت";
    },
  },
  methods: {
    printPrescription() {
      window.print();
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles here */
/* Adding some basic styling for illustration purposes */

body {
  font-family: 'Tahoma', sans-serif;
}

.display-4 {
  color: #007bff;
}

.lead {
  color: #6c757d;
  font-size: 18px;
}

.patient-name,
.medicament-name,
.medicament-notes {
  margin: 0;
}

.btn-primary {
  background-color: #007bff;
  color: white;
  border: none;
  transition: background-color 0.3s;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
