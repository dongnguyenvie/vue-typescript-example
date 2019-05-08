<template>
  <div>
    <p>{{getText}}</p>
    <hr>
    <button @click="loadText(Math.random() * 10)">Fetch text to api</button>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
@Component({
  methods: {
    ...mapActions({
      loadText: 'text/loadText',
    }),
  },
  computed: {
    ...mapGetters({
      getText: 'text/getText',
    }),
  },
})
export default class One extends Vue {
  private created() {
    console.log(this.$store);
  }
}
</script>
