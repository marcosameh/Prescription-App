<template>
    <div class="container mt-5">
      <h1 class="text-center mb-4">إدارة الأدوية</h1>
  
      <!-- Add Medicine Form -->
      <div class="mb-4 border p-3">
        <h2 class="mb-3">إضافة دواء جديد</h2>
        <div class="mb-3">
          <label for="medicineName" class="form-label">اسم الدواء:</label>
          <input v-model="newMedicineName" type="text" class="form-control" id="medicineName" placeholder="ادخل اسم الدواء" />
        </div>
        <button @click="addMedicine" class="btn btn-success">
          <i class="fas fa-plus"></i> إضافة الدواء
        </button>
      </div>
  
      <!-- Medicines List -->
      <h2 class="mb-3">قائمة الأدوية</h2>
      <ul class="list-group">
        <li v-for="(medicine, index) in medicines" :key="index" class="list-group-item d-flex justify-content-between align-items-center">
          {{ medicine.name }}
          <button @click="editMedicine(index)" class="btn btn-warning btn-sm me-2">
            <i class="fas fa-edit"></i>
          </button>
          <button @click="deleteMedicine(index)" class="btn btn-danger btn-sm">
            <i class="fas fa-trash"></i>
          </button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newMedicineName: '',
        medicines: [],
      };
    },
    methods: {
      addMedicine() {
        if (this.newMedicineName.trim() !== '') {
          this.medicines.push({ name: this.newMedicineName.trim() });
          this.newMedicineName = '';
        }
      },
      editMedicine(index) {
  const updatedName = prompt('تعديل اسم الدواء:', this.medicines[index].name);
  if (updatedName !== null) {
    this.medicines[index].name = updatedName.trim();
  }
},
      deleteMedicine(index) {
        const confirmDelete = confirm('هل أنت متأكد من حذف هذا الدواء؟');
        if (confirmDelete) {
          this.medicines.splice(index, 1);
        }
      },
    },
  };
  </script>
  