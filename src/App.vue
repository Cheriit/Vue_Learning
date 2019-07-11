<template>
  <div id="app">
  <app-header :maxQuotes="maxQuotes" :quoteCount="quotes.length"></app-header>
  <app-new-quote @quoteAdded="addNewQuote"></app-new-quote>
  <app-quotes-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quotes-grid>
  <div class="row">
    <div class="col-sm-12 text-center">
      <div class="alert alert-info">Info: Click on a quote to delete it.</div>
    </div>
  </div>
  </div>
</template>

<script>
import QuotesGrid from './components/QuotesGrid.vue'
import NewQuote from './components/NewQuote.vue'
import Header from './components/Header.vue'
export default {
  name: 'app',
  data () {
    return {
      maxQuotes: 10,
      quotes: [
        "I'm a quote"
      ]
    }
  },
  components:{
    appQuotesGrid: QuotesGrid,
    appNewQuote: NewQuote,
    appHeader: Header
  },
  methods: {
    addNewQuote(quote) {
      if(this.quotes.length>=this.maxQuotes)
      {
        return alert('Pls, delete quotes first')
      }
      if(quote!=='')
      {
        this.quotes.push(quote);
      }
},
    deleteQuote(id)
    {
      this.quotes.splice(id, 1);
    }
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
