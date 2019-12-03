<template>
  <div class="row">
    <app-quote v-for="(quote, id) in quotes" :key="id" @click.native="deleteQuote(id)">{{quote}}</app-quote>
  </div>
</template>

<script>
import Quote from './Quote.vue'
export default {
  props:['quotes'],
  components:
    {
        appQuote:Quote
    },
    methods: {
      deleteQuote(id)
      {
        this.$emit('quoteDeleted',id)
      }
    },
};
</script>

<style lang="sass">

</style>

