<template>
  <div class="container pt-5">
    <h1 class="text-center">روشتة </h1>

    <div class="row p-5">
      <div class="col-6 text-center">
        <router-link to="/medicines" class="btn btn-primary mb-3 py-3 w-50" style="font-size: 18px;">
          <i class="fas fa-pills"></i> الأدوية
        </router-link>
      </div>
      <div class="col-6 text-center">
        <router-link to="/prescription/new" class="btn btn-success mb-3 py-3 w-50" style="font-size: 18px;">
          <i class="fas fa-file-prescription"></i> روشتة جديدة
        </router-link>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>

<style>
 body{
  background-image:url(/src/assets/medicines.png) ;
  background-repeat: no-repeat;
  background-size: cover;
 }
</style>


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


