<template>
    <v-container>
        <v-snackbar
        color="success"
        v-model="snackbar"
        top
        right>
            Successfully added!
            <template v-slot:action="{ attrs }">
                <v-btn
                icon
                v-bind="attrs"
                @click="snackbar = false"
                >
                <v-icon>mdi-close</v-icon>
                </v-btn>
            </template>
        </v-snackbar>
        <v-card 
        v-for="exchange of exchanges"
        :key="exchange.exchangeID">
            <v-card-text>
                <v-textarea
                outlined
                label="Question"
                placeholder="Why do I procrastinate so much even though I have important stuff to do?"
                :disabled="exchange.submitted"
                clearable
                v-model="exchange.question"
                @input="isExchangeValid(exchange)"
                >
                </v-textarea>
                <v-textarea
                outlined
                label="Answer"
                placeholder="Because I am overwhelmed by the responsibilities and I am afraid of failure."
                :disabled="exchange.submitted"
                clearable
                v-model="exchange.answer"
                @input="isExchangeValid(exchange)"
                >
                </v-textarea>
                <v-btn 
                color="primary"
                v-show="!exchange.submitted"
                :disabled="!exchange.valid"
                @click="nextStep()">
                    Next
                </v-btn>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            snackbar: false,
            exchanges: [
                {
                    exchangeID: 0,
                    question: "",
                    answer: "",
                    submitted: false,
                    valid: false
                }
            ],
        };
    },
    methods: {
        isExchangeValid(exchange) {
            if (exchange.question && exchange.answer) {
                exchange.valid = true;
            } else {
                exchange.valid = false;
            }

            return true;
        },
        hideNextButton() {
            const index = this.exchanges.length - 1;
            this.exchanges[index].submitted = true;

            return true;
        },
        createAnotherExchange() {
            const exchangeID = this.exchanges.length;
            let question = "";
            let answer = "";
            let submitted = false;
            let valid = false;
            const exchange = {
                exchangeID: exchangeID,
                question: question,
                answer: answer,
                submitted: submitted,
                valid: valid,
            };
            this.exchanges.push(exchange);

            return true;
        },
        scrollToBottom() {
            setTimeout(() => {
                window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: "smooth" });
            }, 0);

            return true;
        },
        updateSnackbarState() {
            this.snackbar = true;

            return true;
        },
        nextStep() {
            this.hideNextButton();
            this.createAnotherExchange();
            this.updateSnackbarState();
            this.scrollToBottom();

            return true;
        },
    },
    computed: {
        
    },
}
</script>