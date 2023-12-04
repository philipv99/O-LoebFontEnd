const GetUrl = "http"
const PoshUrl = "http"

Vue.createApp({
   data(){
      return{
         ListOfPosts: [],
         RunToAdd: {
            Name: "",
            Posts: [],
            Time: 0,
            Type: ""
         }
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
         try{
            response = await axios.post(RunToAdd, Poshurl)
            console.log(response)
         }
         catch (ex) {
            alert(ex.message)
         }
      },
      addPost(){
         
      }
   }
})