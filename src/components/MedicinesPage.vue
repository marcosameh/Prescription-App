<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">إدارة الأدوية</h1>
    <div class="bach-btn text-start mt-5" style="margin-left: 200px;">
      <router-link to="/" class="btn back-button mb-3 py-3 text-white" style="font-size: 18px; background-color: rgb(221, 148, 12);">
         عودة للخلف
      </router-link>
    </div>
    <!-- Add Medicine Form -->
    <div class="row justify-content-center py-2 g-4">
      <div class="col-8 bo rounded-2">
        <h2 class="mb-3">إضافة دواء جديد</h2>       
          <div class="mb-3">
            <label for="medicineName" class="form-label fs-4">اسم الدواء:</label>
            <input v-model="newMedicineName" type="text" class="form-control py-3" id="medicineName"
              placeholder="ادخل اسم الدواء" />
          </div>
          <button @click="addMedicine" class="btn btn-success w-25 py-3 mt-2 fw-bold fs-5">
            <i class="fas fa-plus"></i> إضافة الدواء
          </button>     
      </div>
      <div class="col-8 py-3">
        <h2 class="mb-4 fw-bold fs-1 text-center">قائمة الأدوية</h2>
        <ul class="list-group pe-0">
          <li v-for="(medicine, index) in medicines" :key="index"
            class="list-group-item ">
            <div class=" d-flex justify-content-between align-items-center">
              <p> {{ medicine.name }}</p>
              <div class="buttons">
                <button @click="editMedicine(index)" class="btn btn-warning ms-4">
              <i class="fas fa-edit"></i>
            </button>
            <button @click="deleteMedicine(index)" class="btn btn-danger">
              <i class="fas fa-trash"></i>
            </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- Medicines List -->
  </div>
</template>


<script>
export default {
  data() {
    return {
      newMedicineName: '',
      medicines: JSON.parse(localStorage.getItem('medicines')) || [],
    };
  },
  methods: {
    addMedicine() {
      if (this.newMedicineName.trim() !== '') {
        this.medicines.push({ name: this.newMedicineName.trim() });
        this.newMedicineName = '';
        this.saveMedicinesToLocalStorage();
      }
    },
    editMedicine(index) {
      const updatedName = prompt('تعديل اسم الدواء:', this.medicines[index].name);
      if (updatedName !== null) {
        this.medicines[index].name = updatedName.trim();
        this.saveMedicinesToLocalStorage();
      }
    },
    deleteMedicine(index) {
      const confirmDelete = confirm('هل أنت متأكد من حذف هذا الدواء؟');
      if (confirmDelete) {
        this.medicines.splice(index, 1);
        this.saveMedicinesToLocalStorage();
      }
    },
    saveMedicinesToLocalStorage() {
      localStorage.setItem('medicines', JSON.stringify(this.medicines));
    },
  },
};
</script>
