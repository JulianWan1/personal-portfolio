<template>
  <div class="nav-bar-container">
    <b-navbar>
      <template #start>
        <b-navbar-item>
          JULIAN WAN
        </b-navbar-item>
      </template>
      <template #end>
        <b-navbar-item>
          ABOUT
        </b-navbar-item>
        <b-navbar-item>
          PROJECTS
        </b-navbar-item>
        <b-navbar-item>
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
}
</script>

<style scoped>
.nav-bar-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 30px;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 20px;
}

</style>