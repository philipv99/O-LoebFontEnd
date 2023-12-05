const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const GetRunUrl = BaseUrl + "/api/Runs/" // + "id"
const PoshRunsUrl = BaseUrl + "/api/Runs"

Vue.createApp({
   data(){
      return{
         ShowAddPostForm: false,

         ListOfPosts: [],
         AddedPostSuccesMessege: "",
         RunToAdd: {
            Id: 0,
            Name: "",
            RunType: ""
         },
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
            this.AddedPostSuccesMessege = "Løb blev tilføjet"
            this.RunToAdd.Name = ""
            this.RunToAdd.RunType = ""
          }
          catch (ex) {
             alert(ex.message)
          }
      },
      addPost(){
         
      },
      ButtenPress(){
         this.ShowAddPostForm = !this.ShowAddPostForm 
         console.log("show was pressed:", this.ShowAddPostForm)
      }
   }
}).mount("#app")