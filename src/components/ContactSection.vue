<template>
  <div class="contact-section-container">
    <div class="image-text-container">
      <div class="text-container">
        <div class="contact-header">
          Contact
        </div>
        <div class="contact-texts">
          <p>Contacts go here</p>
        </div>
      </div>
      <img src="../assets/Lambo.jpg" alt="Another image">
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
@Component({})
export default class ContactSection extends Vue{
}
</script>

<style scoped>
.image-text-continer{
  display: block;
}

.text-container{
  position:absolute;
  padding-left: 60px;
  margin-top: 30px;
  color: rgb(255, 255, 255);
}

.contact-header{
  font-size: 150px;
  padding-left: 60px;
  margin-top: 30px;
  color: rgb(255, 255, 255);
}

.contact-texts{
  font-size: 35px;
  margin-top: 40px;
  padding-left: 60px;
}

</style>