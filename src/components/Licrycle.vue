<template>
  <div>
    <h1>hahaha {{val}} {{message}}</h1>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Emit, Watch, Vue } from 'vue-property-decorator';
@Component({
  name: 'hahaha',
  data() {
    return {
      val: '1111',
    };
  },
  mounted() {
    console.log('hehehe');
  },
})
export default class Text extends Vue {
  private message: number = 1;
  private beforeMount(): void {
    console.log('before mount');
  }
  private mounted(): void {
    console.log('mounted');
  }
  private beforeUpdate(): void {
    console.log('beforeUpdate');
  }
  private updated() {
    console.log('updated');
  }
  private created(): void {
    console.log('bbb');
    setInterval(() => {
      this.message++;
    }, 1000);
  }
  private beforeDestroy(): void {
    console.log('beforeDestroy');
  }
  private destroyed(): void {
    console.log('destroyed');
  }
}
</script>

