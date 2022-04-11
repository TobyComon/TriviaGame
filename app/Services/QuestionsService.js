import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"



class QuestionsService {
    async getQuestions() {
        // @ts-ignore
        const response = await axios.get('https://opentdb.com/api.php?amount=1&type=boolean')
        ProxyState.questions = response.data.results.map(q => new Question(q))
        console.log(response);
    }
}




export const questionsService = new QuestionsService()