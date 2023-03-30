/*Descrizione:
Rifare l'esercizio della to do list. Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
-"text", una stringa che indica il testo del todo;
-"done", un booleano (true/false) che indica se il todo è stato fatto oppure no.*/
  const { createApp } = Vue

createApp({
    data() {
        return {
            tasks: [

                {
                    text:"Groceries",
                    done: "false"
                },
                {
                    text: "House cleaning",
                    done: "false"
                },
                {
                    text: "Car maintenance",
                    done: "false"
                },
                {
                    text: "Workout",
                    done: "false"
                },
                {
                    text: "Daily Boolean exercise",
                    done: "false"
                }
            ],
            newTask: [],
            error: false,
            errorMessage: "Tasks must have at least 3 characters"
        }
    },
    methods: {
        removeFromToDo(index) {
            this.tasks.splice(index, 1);
        },
        addToToDoList(){
            if (this.newTask.length >= 3){
                this.tasks.push({text: this.newTask, done:false});
                this.newTask = "";
                this.errorMessage = false;

            } else {
                this.errorMessage = true;
            }
        }
    }

}).mount('#app')

