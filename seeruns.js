const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const PostUrl = BaseUrl + "/api/Posts" // + "id"
const RunsUrl = BaseUrl + "/api/Runs"


Vue.createApp({
   data(){
      return{
         selectedRun: -1,
         ListofRuns: [],
         ListofPosts: [],
         FilteredList: [],
      };
   },
   async created(){
        this.GetAllRuns(RunsUrl)
        
   },
   methods:
   {
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

    connectRun(item){
        this.selectedRun=item.id
        console.log(this.selectedRun)
        this.postfilter()
    },

    postfilter(){
        this.FilteredList=""
        this.FilteredList=this.ListofPosts.filter(x => x.runId===this.selectedRun)
        this.FilteredList.sort((a,b) => {
            return a.sequenceNumber - b.sequenceNumber
        })
        console.log(this.FilteredList)
    }
   }
}).mount("#app")