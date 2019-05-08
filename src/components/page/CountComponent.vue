<template>
  <div>
    <h1>{{info}}</h1>
    <p>{{count}}</p>
    <p>{{getInfo}}</p>
    <p>{{value}}</p>
    <button @click="increment()">Increment</button>
    <button @click="decrement()">Decrement</button>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Review } from '../interface';

@Component({})
export default class CountComponent extends Vue {
  @Prop()
  private handleClick: any;
  @Prop()
  private message!: string;
  @Prop()
  private name!: string;
  @Prop()
  private value!: string;

  private info: Review = {
    name: '',
    message: '',
    count: 0,
  };

  private count: number = 0;

  private created() {
    this.handleClick('heheheh');
    this.info = {
      name: this.name,
      message: this.message,
      count: 0,
    };
    // console.log(this);
  }

  private updated() {
    console.log('updated');
  }
  get getInfo(): any {
    return JSON.stringify(this.info) + ' computed';
  }
  private increment(): void {
    this.info.count++;
    this.count++;
  }
  private decrement(): void {
    this.info.count--;
  }
}
</script>
