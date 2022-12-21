<template>
  <div class="navbar__container">
    <b-navbar class="navbar__component" id="navbar">
      <template #start>
        <b-navbar-item class="navbar__start" @click="emitSection('main-section')">
          JULIAN WAN
        </b-navbar-item>
      </template>
      <template #end>
        <div v-for="section of sections" :key="section">
          <b-navbar-item class="navbar__end" @click="emitSection(`${section.toLowerCase()}-section`)">
            {{section}}
          </b-navbar-item>
        </div>
      </template>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NavBar extends Vue{

  lastScrollPos = window.scrollY;

  sections = [
    'EXPERIENCE',
    'PROJECT',
    'CONTACT',
  ]

  // Create a scroll event listener to the window object
  mounted() {
    window.addEventListener('scroll', this.handleScrollEvent)
  }

  // To prevent any memory leaks, remove the event listener
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScrollEvent)
  }

  // If the current scroll position is greater than the previous, hide the navbar (-50px)
  // Finally update the last scroll position with the current position
  handleScrollEvent(){
    let currentScrollPos = window.scrollY;
    if(this.lastScrollPos > currentScrollPos){
      document.getElementById("navbar")!.style.top = "0";
    }else{
      document.getElementById("navbar")!.style.top = "-55px";
    }
    this.lastScrollPos = window.scrollY
  }

  emitSection(section:string){
    this.$emit('handleSection',section)
  }

}
</script>

<style lang="scss" scoped>

.navbar{

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__component{
    position: fixed;
    top: 0px;
    height: 50px;
    width: 100%;
    background-color: rgb(10, 10, 10);
    box-shadow: 0px 0px 4px 1px rgba(10, 10, 10, 0.85);
    transition: top 0.5s;
  }

  &__start{
    @include navbarStartEnd();
  }

  &__end{
    height: 100%;
    @include navbarStartEnd();
  }

  @include navbarMenu();

}

</style>