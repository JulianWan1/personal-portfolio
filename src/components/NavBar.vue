<template>
  <div class="nav-bar-container">
    <b-navbar class="navbar is-black">
      <template #start>
        <b-navbar-item class="start">
          JULIAN WAN
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item @click="emitAboutSection">
          ABOUT
        </b-navbar-item>
        <b-navbar-item>
          PROJECTS
        </b-navbar-item>
        <b-navbar-item class="end">
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

  emitAboutSection(){
    this.$emit('handleAboutSection')
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