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

appComp.component('my-map', {
   data(){
      return{
         
      }
   },
   props: [],
   created() {

   },
   template:`
   <div id="map" style="width:100vh;height:75vh"></div>
   
   let center = [12.0780378, 55.6310684]
   const map = tt.map({
      key: "vEdHLNMgoA1msNHdxlnxOW7fbO2vcDZC",
      container: "map",
      center: center,
      zoom: 13
    })
    map.on('load', () => {
        var marker = new tt.Marker().setLngLat(center).addTo(map);
       
    })
   `
})

appComp.mount("#demo")