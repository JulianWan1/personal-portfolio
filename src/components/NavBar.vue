<template>
  <div class="nav-bar-container">
    <b-navbar class="navbar is-black is-fixed-top">
      <template #start>
        <b-navbar-item class="start" @click="emitMainPage">
          JULIAN WAN
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item @click="emitAboutSection">
          ABOUT
        </b-navbar-item>
        <b-navbar-item @click="emitProjectSection">
          PROJECTS
        </b-navbar-item>
        <b-navbar-item class="end" @click="emitContactSection">
          CONTACT
        </b-navbar-item>    
      </template>
    </b-navbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class NavBar extends Vue{

  emitMainPage(){
    this.$emit('handleMainPage')
  }

  emitAboutSection(){
    this.$emit('handleAboutSection')
  }

  emitProjectSection(){
    this.$emit('handleProjectSection')
  }

  emitContactSection(){
    this.$emit('handleContactSection')
  }

}
</script>

<style scoped>
.nav-bar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.start{
  padding-left: 40px;
}

.end{
  padding-right: 40px;
}

</style>