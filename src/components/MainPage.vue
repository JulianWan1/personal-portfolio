<template>
  <div class="main-page-container">
    <NavBar 
      @handleMainPage="redirectToMainPage"
      @handleAboutSection="redirectToAboutSection"
      @handleProjectSection="redirectToProjectSection"
      @handleContactSection="redirectToContacSection"
    />
    <div class="text-picture-container" id="main-page">
      <div class="picture-container">
        <div class="text-description-container">
          <h1 class="text-header">
            Julian Wan
          </h1>
          <div class="descriptions">
            <h2>Software Developer</h2>
            <h3>Mechanical Engineering Grad</h3>
            <h3>Looking ahead for more</h3>
          </div>
        </div>
        <img src="../assets/Orange_Mclaren.jpg" alt="img here">
      </div>
    </div>
    <div id="about-section">
      <AboutSection/>
    </div>
    <div id="project-section"></div>
    <div id="contact-section"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './NavBar.vue';
import AboutSection from './AboutSection.vue';

@Component({
  components: {
    NavBar,
    AboutSection
  },
})
export default class MainPage extends Vue {

  redirectToMainPage(){
    const mainPageElement = document.getElementById('main-page');
    mainPageElement?.scrollIntoView({ behavior:'smooth'});
  }

  redirectToAboutSection(){
    const aboutElement = document.getElementById('about-section');
    aboutElement?.scrollIntoView({ behavior:'smooth'});
  }

  redirectToProjectSection(){
    const projectElement = document.getElementById('project-section');
    projectElement?.scrollIntoView({behavior:'smooth'});
  }

  redirectToContacSection(){
    const contactElement = document.getElementById('contact-section');
    contactElement?.scrollIntoView({behavior:'smooth'});
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-page-container {
  display: flex;
  flex-direction: column;
}

.text-picture-container{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.text-description-container {
  position: absolute;
  flex-direction: column;
  padding-left: 60px;
}

.text-header{
  font-size: 150px;
  margin-top: 20px;
  color: rgb(243, 240, 231);
}

.descriptions{
  font-size: 40px;
  color: rgb(216, 208, 208);
}

.picture-container {
  display: block;
}
</style>
