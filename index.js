const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const GetPostUrl = BaseUrl + "/api/Posts" // + "id"
const PoshRunsUrl = BaseUrl + "/api/Runs"

Vue.createApp({
   data(){
      return{
         showAddPostForm: false,
         ListOfPosts: [{
            "id": 3,
            "name": "roskirke",
            "sequenceNumber": 1,
            "sadius": 23,
            "gpsLatitude": 23.23232,
            "gpsLongitude": 110.23232,
            "runId": 0  
         },
         {
            "id": 1,
            "name": "roskirke",
            "sequenceNumber": 1,
            "sadius": 23,
            "gpsLatitude": 23.23232,
            "gpsLongitude": 110.23232,
            "runId": 0  
         }],
         addedPosts:[{
            "id": 0,
            "name": "roskirke",
            "sequenceNumber": 1,
            "sadius": 23,
            "gpsLatitude": 23.23232,
            "gpsLongitude": 110.23232,
            "runId": 0  
         },
         {
            "id": 0,
            "name": "roskirke",
            "sequenceNumber": 1,
            "sadius": 23,
            "gpsLatitude": 23.23232,
            "gpsLongitude": 110.23232,
            "runId": 0  
         }],
         AddedRunSuccesMessege: "",
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
            response = await axios.get(GetPostUrl)
            this.ListOfPosts = await response.data
            console.log(response.data)
         }
         catch (ex){
            alert(ex.message)
         }
      },
      async PoshNewRun(){
         try{
            response = await axios.post(PoshRunsUrl, this.RunToAdd).then(response => {console.log(response.status, response.data.token)})
            this.AddedRunSuccesMessege = "Løb blev tilføjet"
            this.RunToAdd.Name = ""
            this.RunToAdd.RunType = ""
          }
         catch (ex) {
            alert(ex.message)
         }
      },
      addPost(object){
         try {
            addedPosts = addedPosts.push(object)
            console.log(addedPosts)
         } catch (error) {
            console.log(error)
         }
         
      },
      ButtenPress(){
         this.showAddPostForm = !this.showAddPostForm 
         console.log("show was pressed:", this.showAddPostForm)
         //this.GetPosts()
      }
   }
}).mount("#app")