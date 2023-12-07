const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const GetPostUrl = BaseUrl + "/api/Posts" // + "id"
const RunsUrl = BaseUrl + "/api/Runs"


Vue.createApp({
   data(){
      return{
         selectedRunid: -1,
         ListOfRuns: [{
         }],
         post:{
            Id: 0,
            Name: "",
            SequenceNumber: 0, 
            Radius: 0,
            GpsLatitude:0,
            GpsLongitude: 0,
            RunId: 0,
         },
         
      };
   },
   async created(){
      try{
         this.GetAllRuns(RunsUrl)
      }
      catch(error){
         console.log(error)
      }
      
   },
   methods:{
      async GetAllRuns(url){
         try{
            response = await axios.get(url)
            console.log(response.status, response)
            console.log(response.data.length)
            this.ListOfRuns = response.data
         }
         catch(error){
            console.log(error)
         } 
      },
      connectRun(item){
         this.selectedRunid = item
         console.log(this.selectedRunid)
      },
      PushPost(){
         this.post.RunId = selectedRunid
         
      }
   }
}).mount("#app")