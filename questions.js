const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const GetRunUrl = BaseUrl + "/api/Runs/" // + "id"
const PoshRunsUrl = BaseUrl + "/api/Runs"

Vue.createApp({
   data(){
      return{
         Question: {
            Id: 0,
            Name: "",
            Question: "",
            Answers:[],
            CorrectAnswer: -1
         },
      };
   },
   methods:{
      async PostQuestion(){
         try {
            Response=await axios.post(posturl, this.PostQuestion)
            console.log(Response.status, Response)
         }  
         catch(ex){
            alert(ex.message)
         }       
      }
   }
}).mount("#app")