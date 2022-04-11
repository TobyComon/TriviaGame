import { ProxyState } from "../AppState.js"
import { Question } from "../Models/Question.js"
import { questionsService } from "../Services/QuestionsService.js"
import { Pop } from "../Utils/Pop.js"



function _drawQuestions() {
    let template = ''
    ProxyState.questions.forEach(q => template += `<h3>${q.question}</h3>`)
    document.getElementById('question').innerHTML = template
}


export class QuestionsController {
    constructor() {
        this.getQuestions() 
        ProxyState.on('questions', _drawQuestions)
        _drawQuestions
    }

    async getQuestions() {
        try {
            

           await questionsService.getQuestions() 
        } catch (error) {
            Pop.toast(error.message, 'error')
            console.log(error)
        }
    }
}
