<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">روشتة </h1>

    <router-link to="/medicines" class="btn btn-primary mb-2">
      <i class="fas fa-pills"></i> الأدوية
    </router-link>

    <router-link to="/prescription/new" class="btn btn-success mb-2">
      <i class="fas fa-file-prescription"></i>  روشتة جديدة
    </router-link>

    <router-view></router-view>
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
      this.$router.push('/prescription/view');
    },
  },
};
</script>
