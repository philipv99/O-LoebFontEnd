const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const QuestionsUrl = BaseUrl + "/api/Questions"
const AwnsersUrl = BaseUrl + "/api/Answer"
const PostUrl = BaseUrl + "/api/Posts" // + "id"


Vue.createApp({
   data(){
      return{
         Question: {
            Id: 0,
            QuestionToAnswer: "",
            IsAnswered: false,
            PostId: -1
         },
         Awnsers: {
            Id: 0,
            AnswerToQuestion: "",
            IsCorrectAnswer: false,
            QuestionId: -1
         },
         AwnserId: 0,
         Posts: [],
         tempAwnsers: ["","","",""],
         ChosenPost: {},
      };
   },
   async created(){
      this.GetPost()
   },
   methods: {
      async GetPost(){
         try{
            response = await axios.get(PostUrl)
            value = await response.data
            console.log(value)
            this.Posts = value
         }
         catch (ex){
            console.log(Url, "did not respond", ex.message)
         }
      },
      async addQuestion(){
         try{
            response = await axios.post(QuestionsUrl, this.Question)
            await console.log(response)
         }
         catch(error) {
            console.log(error)
         }
         //this.addAnswers(response.data.id)
      },
      chosenPost(item){
         this.ChosenPost = item
         this.Question.PostId = item.id
         console.log("id of post",this.Question)
      },
      addAnswers(id){
         try{
            for(let i = 0; i < 4; i++){
               senditem = {...this.Awnsers}
               senditem.QuestionId = id
               senditem.AnswerToQuestion = this.tempAwnsers[i]
               if(i === this.AwnserId){
                  senditem.IsCorrectAnswer = true
               }
               console.log("Svar: ", i ,senditem)
               this.sendAnswers(senditem)
            }
         }
         catch (error){
            console.log(error)
         }
      },
      async sendAnswers(item){
         try{
            response = await axios.post(AwnsersUrl, item)
            console.log(response)
         }
         catch(error){
            console.log(error)
         }
      }
   }
}).mount("#app")