const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const PostUrl = BaseUrl + "/api/Posts" // + "id"
const RunsUrl = BaseUrl + "/api/Runs"


Vue.createApp({
   data(){
      return{
         ToggleRun: false,
         test: 0.0,
      }
   },
   async created(){

   },
   methods: {
      toggle(){
         this.ToggleRun = !this.ToggleRun
         console.log(this.ToggleRun)
         if(this.ToggleRun){
            this.RunIson()
         }
      },
      async RunIson(){
         while(this.ToggleRun){
            this.test += 0.100000
            await new Promise(r => setTimeout(r, 100));
         }
      }
   },
   template:
   ``
}).mount("#app")