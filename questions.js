const BaseUrl = "https://o-loebrest20231128112940.azurewebsites.net"
const QuestionsUrl = BaseUrl + "/api/Questions"
const AwnsersUrl = BaseUrl + "/api/Awnsers"
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
         tempAwnser1: "",
         tempAwnser2: "",
         tempAwnser3: "",
         tempAwnser4: "",
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
         //this.check()
         try{
            //response = await axios.post(QuestionsUrl, this.Question)
            this.Question.Id = 4
            console.log(this.Question)
            this.addAnswers(this.Question.Id)
         }
         catch(error) {
            console.log(error)
         }
         //this.addAnswers(response.id)
         console.log()
      },
      chosenPost(item){
         this.ChosenPost = item
         this.Question.PostId = item.id
         console.log(this.ChosenPost)
         console.log("id of post",this.Question.PostId)
      },
      async addAnswers(id){
         try{
            for(let i = 0; i < 4; i++){
               senditem = {...this.Awnsers}
               senditem.QuestionId = id
               if(i === AwnserId){
                  senditem.IsAnswered
               }

               console.log(senditem)
            }
         }
         catch (error){
            console.log(error)
         }
      },
      // check(){
      //   
         //}
      //}
   }
}).mount("#app")