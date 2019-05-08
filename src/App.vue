<template>
  <div id="app">
    <!-- <CountCP
      :handle-click="handleClickButton"
      message="Hello word!"
      name="Dong Nguyen"
      value="This is valude default of props"
    />-->
    <ExampleOne/>
    <hr>
    <ExampleTwo/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import CountCP from './components/page/CountComponent.vue';
import ExampleOne from './components/example/One.vue';
import ExampleTwo from './components/example/Two.vue';

@Component({
  components: {
    // CountCP,
    ExampleOne,
    ExampleTwo,
  },
})
export default class App extends Vue {
  private handleClickButton(data: string): void {
    console.log(data);
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
