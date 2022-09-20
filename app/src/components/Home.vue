<template>
    <v-container>
        <v-card 
        v-for="exchange of exchanges"
        :key="exchange.exchangeID">
            <v-card-text>
                <v-textarea
                outlined
                label="Question"
                placeholder="Why do I procrastinate so much even though I have important stuff to do?"
                :disabled="exchange.submitted"
                v-model="exchange.question"
                >
                </v-textarea>
                <v-textarea
                outlined
                label="Answer"
                placeholder="Because I am overwhelmed by the responsibilities and I am afraid of failure."
                :disabled="exchange.submitted"
                v-model="exchange.answer"
                >
                </v-textarea>
                <v-btn 
                color="primary"
                v-show="!exchange.submitted"
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
            exchanges: [
                {
                    exchangeID: 0,
                    question: "",
                    answer: "",
                    submitted: false,
                }
            ],
        };
    },
    methods: {
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
            const exchange = {
                exchangeID: exchangeID,
                question: question,
                answer: answer,
                submitted: submitted,
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
        nextStep() {
            this.hideNextButton();
            this.createAnotherExchange();
            this.scrollToBottom();

            return true;
        },
    },
}
</script>