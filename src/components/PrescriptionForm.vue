<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">نموذج الوصفة الطبية</h1>

    <div class="mb-3">
      <label for="patientName" class="form-label">اسم المريض:</label>
      <input v-model="patientName" type="text" class="form-control" id="patientName" placeholder="ادخل اسم المريض" />
    </div>

    <div v-for="(medicament, index) in medicaments" :key="index" class="mb-4 border p-3">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="mb-0">الدواء {{ index + 1 }}</h2>
        <button @click="removeMedicament(index)" class="btn btn-danger btn-sm">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="mb-3">
        <label for="medicamentName" class="form-label">اسم الدواء:</label>
        <input v-model="medicament.name" type="text" class="form-control" id="medicamentName" placeholder="ادخل اسم الدواء" />
      </div>
      <div class="mb-3">
        <label for="notes" class="form-label">ملاحظات:</label>
        <textarea v-model="medicament.notes" class="form-control" id="notes" placeholder="ادخل ملاحظات"></textarea>
      </div>
    </div>

    <button @click="addMedicament" class="btn btn-success me-2">
      <i class="fas fa-plus"></i> اضافة دواء
    </button>

    <button @click="generatePrescription" class="btn btn-primary">
      <i class="fas fa-file-prescription"></i> انشاء الوصفة الطبية
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      patientName: '',
      medicaments: [{ name: '', notes: '' }],
    };
  },
  methods: {
    addMedicament() {
      this.medicaments.push({ name: '', notes: '' });
    },
    removeMedicament(index) {
      this.medicaments.splice(index, 1);
    },
    generatePrescription() {
      const prescription = { patientName: this.patientName, medicaments: this.medicaments };
      localStorage.setItem('prescription', JSON.stringify(prescription));
      this.$router.push('/prescription');
    },
  },
};
</script>

<style scoped>
/* Your component-specific styles here */
/* Adding some basic styling for illustration purposes */

.btn-sm {
  font-size: 12px;
  padding: 0.2rem 0.4rem;
}

</style>
