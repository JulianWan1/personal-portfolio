<template>
    <MainPage/>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import MainPage from './components/MainPage.vue';

@Component({
  components: {
    MainPage,
  },
})
export default class App extends Vue {

  created(){
    document.title = 'Julian Wan';
  }

}
</script>

<style lang="scss" scoped>

</style>
