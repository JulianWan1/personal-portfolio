<template>
  <div class="main-page-container">
    <div class="navbar">
      <NavBar 
      @handleSection="redirectToSection"
      />
    </div>
    <div id="main-section">
      <MainSection/>
    </div>
    <div id="experience-section" class="alternate">
      <ExperienceSection/>
    </div>
    <div id="project-section">
      <ProjectsSection/>
    </div>
    <div id="contact-section" class="alternate">
      <ContactSection/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import NavBar from './navigation/NavBar.vue';
import MainSection from './sections/MainSection.vue';
import ExperienceSection from './sections/ExperienceSection.vue';
import ProjectsSection from './sections/ProjectsSection.vue';
import ContactSection from './sections/ContactSection.vue';

@Component({
  components: {
    NavBar,
    MainSection,
    ExperienceSection,
    ProjectsSection,
    ContactSection
  },
})
export default class MainPage extends Vue {

  // Set to ensure that the page stops slightly more above (using -40 offset) when redirecting
  redirectToSection(page:string){

    const id = page;
    const yOffset = -40; 
    const pageSection = document.getElementById(id);
    const y = pageSection!.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({top: y, behavior: 'smooth'});

  }

  mounted(){
    // Run this to allow animation to work whenever a page (and whichever page) is loaded for the first time
    this.sectionAppearAnimation();

    window.addEventListener('scroll', () =>
      this.sectionAppearAnimation()
    );

  }

  // For all elements which id's ends with "-section",
  // get each of the element's position information relative to the viewport
  // will use the top and the bottom positions relative to viewport
  // if the relative top position of the element to the viewport is less than that of the viewport's (window's) height (in px)
  // and if the relative bottom position of the element to the viewport is more than 40px of the viewport(to account for y-offset at line 46),
  // append the new class to the id to allow the transition to work (initially opacity is 0 and the position of content is 3vw from the left)
  sectionAppearAnimation(){
    let elements = document.querySelectorAll('[id$="-section"]');
    elements.forEach(function(element) {
      let rect = element.getBoundingClientRect();
      console.log(rect.top)
      console.log(window.innerHeight)
      console.log(rect.bottom)
      if (rect.top < window.innerHeight && rect.bottom > 40) {
        element.classList.add('viewed');
      }
    });
  }

}



</script>

<style lang="scss" scoped>
.main-page-container {
  display: flex;
  flex-direction: column;
  background-color: $background-color;
}

.navbar{
  background-color: $background-color;
  min-height: 50px;
}

[id$="-section"] {
  opacity: 0;
  translate: -3vw;
  transition: all 2.5s;
}

// set alternate starting position of the contents
[id$="-section"].alternate {
  translate: 3vw;
}

[id$="-section"].viewed {
  opacity: 1;
  translate: 0vw;
}

</style>
