<template>
    <v-container>
        <v-card 
        v-for="exchange of exchanges"
        :key="exchange.exchangeID">
            <v-switch
            v-model="exchange.isDoOrDont"
            :label="calcLabelsAndPlaceholders(exchange.isDoOrDont)[0]"
            :readonly="exchange.readOnly"></v-switch>
            <v-card-text>
                <v-textarea
                outlined
                :label="calcLabelsAndPlaceholders(exchange.isDoOrDont)[1]"
                :placeholder="calcLabelsAndPlaceholders(exchange.isDoOrDont)[2]"
                :readonly="exchange.readOnly"
                v-model="exchange.question"
                >
                </v-textarea>
                <v-textarea
                outlined
                label="Because"
                :placeholder="calcLabelsAndPlaceholders(exchange.isDoOrDont)[3]"
                :readonly="exchange.readOnly"
                v-model="exchange.answer"
                >
                </v-textarea>
                <v-btn 
                color="primary"
                v-show="!exchange.submitted"
                @click="createAnotherExchange()">
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
                    isDoOrDont: true,
                    submitted: false,
                    readOnly: false,
                    question: "",
                    answer: "",
                }
            ],
        };
    },
    methods: {
        calcLabelsAndPlaceholders(isDoOrDont) {
            let switchLabel;
            let questionLabel;
            let questionPlaceholder;
            let answerPlaceholder;

            switch (isDoOrDont) {
                case true:
                    switchLabel = "Do";
                    questionLabel = "Why do I";
                    questionPlaceholder = "Why do I procrastinate so much even though I have important stuff to do?";
                    answerPlaceholder = "Because I am overwhelmed by the responsibilities and I am afraid of failure.";
                    break;
                case false:
                    switchLabel = "Don't";
                    questionLabel = "Why don't I";
                    questionPlaceholder = "Why don't I smile at strangers?";
                    answerPlaceholder = "Because I am afraid of rejection. Sometimes they don't smile back at me.";
                    break;
            }

            return [switchLabel, questionLabel, questionPlaceholder, answerPlaceholder];
        },
        hideNextButton(noOfExchanges) {
            this.exchanges[noOfExchanges - 1].submitted = true;
            this.exchanges[noOfExchanges - 1].readOnly = true;

            return true;
        },
        createAnotherExchange() {
            const noOfExchanges = this.exchanges.length;
            this.hideNextButton(noOfExchanges);
            const exchangeID = noOfExchanges - 1;
            let isDoOrDont = true;
            let question = "";
            let answer = "";
            let submitted = false;
            let readOnly = false;
            const exchange = {
                exchangeID: exchangeID,
                isDoOrDont: isDoOrDont,
                submitted: submitted,
                readOnly: readOnly,
                question: question,
                answer: answer,
            };
            this.exchanges.push(exchange);

            return true;
        },
    },
    computed: {},
}
</script>