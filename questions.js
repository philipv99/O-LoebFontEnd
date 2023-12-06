const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const PoshQuestions = BaseUrl + "/api/Questions"
const PoshAwnsers = BaseUrl + "/api/Awnsers"

Vue.createApp({
   data(){
      return{
         Question: {
            Id: 0,
            Name: "",
            QuestionToAnswer: "",
            IsAnswered: false,
            PostId: -1
         },
         Awnsers: {
            Id: -1,
            AnswerToQuestion: "",
            IsCorrectAnswer: false,
            QuestionId: -1
         },
         tempAwnser1: "",
         tempAwnser2: "",
         tempAwnser3: "",
         tempAwnser4: "",
         AwnserId: 0,
      };
   },
   async created(){
      //this.ListOfPosts.push(this.GetAll(PoshRunsUrl))
   },
   methods: {
      async GetAll(Url){
         try{
            response = await axios.get(Url)
            value = await response.data
            console.log(value)
            return value
         }
         catch (ex){
            alert(ex.message)
            console.log(Url, "did not respond")
         }
      },
      async addQuestion(){
         this.check()
         try{
            response = await axios.post(PoshQuestions, this.Question)
            console.log(response)
         }
         catch(error) {
            console.log(error)
         }
         this.addAnswers(response.id)
      },
      addAnswers(id){
         try{
            
         }
         catch (error){
            console.log(error)
         }
      },
      check(){
         if (AwnserId == 0){
            alert("Answer not set")
            return
         }
      }
   }
}).mount("#app")