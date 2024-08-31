<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">روشتة جديدة</h1>
    <div class="bach-btn text-start mt-5" style="margin-left: 200px;">
      <router-link to="/" class="btn back-button mb-3 py-3 text-white"
        style="font-size: 18px; background-color: rgb(221, 148, 12);">
        عودة للخلف
      </router-link>
    </div>

    <div class="row justify-content-center">
      <div class="col-8">
        <div class="row">
          <div class="col-6 mb-4">
            <label for="doctorName" class="form-label fs-4">اسم الطبيب:</label>
            <input v-model="doctorName" type="text" class="form-control py-3" id="doctorName"
              placeholder="ادخل اسم الطبيب" />
          </div>
          <div class="col-6 mb-4">
            <label for="patientName" class="form-label fs-4">اسم المريض:</label>
            <input v-model="patientName" type="text" class="form-control py-3" id="patientName"
              placeholder="ادخل اسم المريض" />
          </div>
        </div>
    
        <div v-for="(medicament, index) in medicaments" :key="index" class="mb-4 border rounded-3 p-3">
          <div class="d-flex justify-content-between align-items-center mb-3">
            <h2 class="mb-0">الدواء {{ index + 1 }}</h2>
            <button @click="removeMedicament(index)" class="btn btn-danger">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="mb-3">
            <label for="medicamentName" class="form-label fs-4">اسم الدواء:</label>
            <select v-model="medicament.name" class="form-control py-2 custom-select" id="medicamentName">
              <option value="" disabled selected hidden>اختر اسم الدواء</option>
              <option v-for="storedMedicine in storedMedicines" :key="storedMedicine" :value="storedMedicine.name">
                {{ storedMedicine.name }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label for="notes" class="form-label fs-4">ملاحظات:</label>
            <textarea v-model="medicament.notes" class="form-control py-3" id="notes" rows="2" placeholder="ادخل ملاحظات"
              style="resize: none;"></textarea>
          </div>
        </div>

       <div class="btns mb-4 text-center">
        <button @click="addMedicament" class="btn btn-success ms-3 py-3 px-4">
          <i class="fas fa-plus"></i> اضافة دواء
        </button>

        <button @click="generatePrescription" class="btn btn-primary py-3 px-4">
          <i class="fas fa-file-prescription"></i> طباعة الروشتة
        </button>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      doctorName: localStorage.getItem('doctorName') || '',
      patientName: '',
      medicaments: [{ name: '', notes: '' }],
      storedMedicines: JSON.parse(localStorage.getItem('medicines')) || [],
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
      const prescription = { doctorName: this.doctorName, patientName: this.patientName, medicaments: this.medicaments };
      localStorage.setItem('prescription', JSON.stringify(prescription));
      localStorage.setItem('doctorName', this.doctorName);
      this.$router.push('/prescription/print');
    },
  },
};
</script>

<style scoped>
label {
  color: #555;
}

input, textarea, select {
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}

input:focus, textarea:focus, select:focus {
  border-color: #80bdff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button {
  font-size: 18px;
}

.back-button {
  background-color: #dd940c !important;
}
</style>
