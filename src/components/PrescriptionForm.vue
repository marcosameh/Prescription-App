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
        <div class="mb-4">
          <label for="patientName" class="form-label fs-4">اسم المريض:</label>
          <input v-model="patientName" type="text" class="form-control py-3" id="patientName"
            placeholder="ادخل اسم المريض" />
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
            <!-- استخدام قائمة من الأدوية المحفوظة للمستخدم للاختيار -->
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

       <div class="btns mb-4">
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
      const prescription = { patientName: this.patientName, medicaments: this.medicaments };
      localStorage.setItem('prescription', JSON.stringify(prescription));
      this.$router.push('/prescription/print');
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
.custom-select {
    position: relative;
    appearance: none;
    padding-left: 2.5rem; /* Adjust padding to make space for the icon */
    background: white url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 5"%3E%3Cpath fill="currentColor" d="M2 0L0 2h4zM2 5L0 3h4z"/%3E%3C/svg%3E') no-repeat 0.75rem center; /* Position the icon on the left */
    background-size: 8px 10px;
    color: #333; /* The color of the text inside the select */
}

.custom-select:focus {
    border-color: #80bdff;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
}

.custom-select::-ms-expand {
    display: none; /* Hide the default dropdown icon in IE */
}

/* Styling the default placeholder option */
.custom-select option[disabled][hidden] {
    color: #888;
}

/* If you want to apply a different color when the dropdown is open */
.custom-select:focus option[disabled][hidden] {
    color: #aaa;
}


</style>
