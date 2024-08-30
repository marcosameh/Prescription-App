<!-- <template>
    
  <div class="container mt-5">
    <div class="mb-4 d-flex justify-content-between align-items-center">
      <h1 class="display-4 text-black fw-medium">{{ doctorName }}</h1>
      <p v-if="prescription.patientName" class="patient-name fs-3"><strong>اسم المريض/</strong> {{
        prescription.patientName }}</p>
    </div>
    <div class="bach-btn text-start mt-5" style="margin-left: 200px;">
      <router-link to="/prescription/new" class="btn back-button mb-3 py-3 text-white"
        style="font-size: 18px; background-color: rgb(221, 148, 12);">
        عودة للخلف
      </router-link>
    </div>


    <div class="row justify-content-center px-5 py-3">

      <div class="col-8">


        <div v-for="(medicament, index) in prescription.medicaments" :key="index" class="mb-4">
          <div class="mb-3" v-if="medicament.name">
            <p class="medicament-name fs-3 "><strong>الدواء:</strong> {{ medicament.name }}</p>
          </div>
          <div class="mb-3" v-if="medicament.notes">
            <p class="medicament-notes fs-3"><strong>ملاحظات : </strong> {{ medicament.notes }}</p>
          </div>
        </div>
      </div>

    </div>

    <div class="text-center mt-4">
      <button @click="printPrescription" class="btn btn-primary py-3 px-4 fs-4">
        <i class="fas fa-print"></i> طباعة الروشتة
      </button>
    </div>
  </div>
</template> -->
<template>
  <div  :class="{'container-fluid': isPrintMode, 'container mt-5': !isPrintMode}">
    <div class="img d-flex justify-content-center mb-3">
      <img src="@/assets/prescription-logo.png" class="rounded-circle" width="100" height="100">
    </div>
    <div class="mb-4 pb-2 d-flex justify-content-between align-items-center border-bottom border-black">
      <p class="fs-3 mb-0"><strong>دكتور/</strong>{{ doctorName }}</p>
   
      <p v-if="prescription.patientName" class="patient-name fs-3"><strong>اسم المريض/</strong> {{
        prescription.patientName }}</p>
    </div>

    <div class="row px-5 py-5 mt-5" :class="isPrintMode ? '' : 'justify-content-center'">
      <div :class="isPrintMode?'col-12':'col-8'">
        <div v-for="(medicament, index) in prescription.medicaments" :key="index" class=" mb-4 d-flex">
          <div class="mb-3" v-if="medicament.name">
            <p class="medicament-name fs-3"><strong>{{ medicament.name }}</strong> </p>
          </div>
          <div class="mb-3 me-5" v-if="medicament.notes">
            <p class="medicament-notes fs-3"> {{ medicament.notes }}</p>
          </div>
        </div>
      </div>
    </div>
   
    <div class="text-center mt-4 d-flex justify-content-center align-items-center" :style="{display: isPrintMode ? 'none !important' : 'block'}">
      <div class="bach-btn text-center ms-3">
       <router-link to="/prescription/new" class="btn back-button py-3 text-white"
        style="font-size: 18px; background-color: rgb(221, 148, 12);">
        عودة للخلف
       </router-link>
       </div>
      <button @click="handlePrint" class="btn btn-primary py-3 px-4 fs-4">
        <i class="fas fa-print"></i> طباعة الروشتة
      </button>
  
    </div>
    <div class="footer position-absolute bottom-0" :class="isPrintMode?'':'footer-position'">
         <div class="  border-black border-top ">
          <p class="fs-3"><strong>العنوان/</strong> شارع النصر امام بنك مصر الإسلامي بجوار بنزيمة عويد</p>
          <p class="fs-3"><strong>التليفون/</strong> 01026903168</p>
         </div>
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
      return "ياسر حنا ثابت";
    },
  },
  data() {
    return {
      isPrintMode: false
    };
  },
  methods: {
    handlePrint() {
      this.isPrintMode = true;
      this.$nextTick(() => {
        this.printPrescription();
      });
    },
    printPrescription() {
      window.print();
      this.isPrintMode = false; // Reset the print mode after printing
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
.footer-position{
 left: 184px;
 right: 184px;
}
</style>
