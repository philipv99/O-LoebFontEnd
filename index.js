const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const GetRunUrl = BaseUrl + "/api/Runs/" // + "id"
const PoshRunsUrl = BaseUrl + "/api/Runs"

Vue.createApp({
   data(){
      return{
         ListOfPosts: [],
         RunToAdd: {
            Id: 0,
            Name: "hej",
            RunType: "oløb"
         },
         ShowAddPostForm: true,
      };
   },
   methods:{
      async GetPosts(){
         try{
            response = await axios.get(GetUrl)
            this.ListOfPosts = await response.data
            console.log(response)
         }
         catch (ex){
            alert(ex.message)
         }
      },
      async PoshNewRun(){
         //await axios.post(PoshRunsUrl, this.RunToAdd)
         try{
             response = await axios.post(PoshRunsUrl, this.RunToAdd).then(response => {console.log(response.status, response.data.token)})
          }
          catch (ex) {
             alert(ex.message)
          }
      },
      addPost(){
         
      }
   }
}).mount("#app")