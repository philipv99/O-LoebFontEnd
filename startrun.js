const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const PostUrl = BaseUrl + "/api/Posts" // + "id"
const RunsUrl = BaseUrl + "/api/Runs"
const QsUrl = BaseUrl + "/api/Questions"


 
Vue.createApp({
   data(){
      return{
         ToggleRun: false,
         RunTime: 0.0,
         TotalAnswerd: 0,
         CorrectAnwers: 0,
         selectedRun: -1,
         ListofRuns: [],
         ListofPosts: [],
         FilteredList: [],
         ListOfQs: [],
      }
   },
   async created(){
      this.GetAllRuns(RunsUrl)
   },
   methods: {
      toggle(){ // til at starte 5 sek intavaller
         this.ToggleRun = !this.ToggleRun
         console.log(this.ToggleRun)
         if(this.ToggleRun){
            this.RunIson()
         }
      },
      async RunIson(){ // skal hente værd efter tintavald
         while(this.ToggleRun){
            this.RunTime += 1
            await new Promise(r => setTimeout(r, 1000));
         }
      },

      async GetAllRuns(url){
         try{
            response = await axios.get(url)
            console.log(response.status, response)
            this.ListofRuns = response.data
            }
            catch(error){
            console.log(error)
         }
         this.GetAllPosts(PostUrl)
      },
      async GetAllPosts(url){
         try{
            response = await axios.get(url)
            console.log(response.status, response)
            this.ListofPosts = response.data
         }
         catch(error){
            console.log(error)
         }
      },
      async GetAllQuestions(){
         try{
            response = await axios.get(QsUrl)
            console.log(response.status, response)
            this.ListofPosts = response.data
         }
         catch(error){
            console.log(error)
         }
      },
      async Qs(){
         FilteredList.forEach(p => {
            
         })
      },
      connectRun(item){
         this.selectedRun=item.id
         console.log(this.selectedRun)
         this.postfilter()
         this.NextPost()
      },
      NextPost(){
         FilteredList.find(p => p.sequenceNumber === this.TotalAnswerd + 1)
      },
      postfilter(){
         this.FilteredList=""
         this.FilteredList=this.ListofPosts.filter(x => x.runId===this.selectedRun)
         this.FilteredList.sort((a,b) => {
               return a.sequenceNumber - b.sequenceNumber
         })
         console.log(this.FilteredList)
      },


      initializeMap() {
         const filteredPosts = this.ListofPosts.filter(x => x.runId === this.selectedRun);

         
         let centerPoint = [55.6310684, 12.0780378]; // Default set to Roskilde

         for (const p of filteredPosts) {
             if (p.sequenceNumber === 1) {
                 centerPoint = [p.gpsLongitude, p.gpsLatitude];
                 break; // Exit the loop once a center with sequence number 1 is found
             }
         }

         let center = centerPoint;

         console.log("Center location" + center)

         map = tt.map({
             key: "vEdHLNMgoA1msNHdxlnxOW7fbO2vcDZC",
             container: "map",
             center: center,
             zoom: 10,
         });
         map.on("load", () => {
  
             filteredPosts.forEach(post => {
                 new tt.Marker().setLngLat([post.gpsLongitude, post.gpsLatitude]).addTo(map);
             });
         });
     },
   },
}).mount("#app")