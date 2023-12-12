const appComp = Vue.createApp({})


appComp.component('button-counter', {
   data() {
       return {
           count: 0
       }
   },
   props: ['from'],
   created() {
       console.log("from " + this.from)
       if (this.from) this.count = this.from
   },
   template: `
   <button @click="count++">
     You clicked me {{ count }} times.
   </button>`
})

appComp.component('map', {
   data(){
      return{
         
      }
   },
   props: []
})

appComp.mount("#demo")