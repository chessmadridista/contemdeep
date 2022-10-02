<template>
    <v-container>
        <v-snackbar
        color="success"
        v-model="snackbar"
        top
        right>
            {{ snackbarMessage }}
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
        class="pb-6 mb-6 rounded-lg"
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
            </v-card-text>
            <v-container class="buttons--exchange">
                <v-btn 
                absolute 
                left
                rounded
                color="error"
                v-show="!exchange.submitted && exchange.exchangeID !== 0"
                @click="previousStep()">
                    Previous
                </v-btn>
                <v-btn
                absolute 
                right
                rounded
                color="primary"
                v-show="!exchange.submitted"
                :disabled="!exchange.valid"
                @click="nextStep()">
                    Next
                </v-btn>
            </v-container>
        </v-card>
        <v-container>
            <v-btn 
            color="error"
            class="mr-2"
            rounded
            @click="reset()">
                Reset
            </v-btn>
            <v-btn 
            color="primary"
            class="ml-2"
            rounded
            @click="submit()">
                Submit
            </v-btn>
        </v-container>
        <v-btn
        fixed
        icon
        bottom
        right
        @click="goToTop()">
            <v-icon>mdi-arrow-up</v-icon>
        </v-btn>
    </v-container>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            snackbar: false,
            snackbarMessage: "",
            exchanges: [
                {
                    exchangeID: 0,
                    question: "",
                    answer: "",
                    submitted: false,
                    valid: false,
                },
            ],
        };
    },
    methods: {
        updateSnackbar(message) {
            this.snackbar = true;
            this.snackbarMessage = message;

            return true;
        },
        isExchangeValid(exchange) {
            if (exchange.question && exchange.answer) {
                exchange.valid = true;
            } else {
                exchange.valid = false;
            }

            return true;
        },
        deleteLastExchange() {
            this.exchanges.pop();
            const message = "The exchange has been deleted.";
            this.updateSnackbar(message);

            return true;
        },
        updateSubmissionStatus() {
            const noOfExchanges = this.exchanges.length;
            this.exchanges[noOfExchanges - 1].submitted = false;
            
            return true;
        },
        previousStep() {
            this.deleteLastExchange();
            this.updateSubmissionStatus();

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
            const message = "The exchange has been created."
            this.updateSnackbar(message);

            return true;
        },
        deleteExchanges() {
            this.exchanges = [];

            return true;
        },
        addFirstExchange() {
            const exchangeID = 0;
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
        reset() {
            this.deleteExchanges();
            this.addFirstExchange();
            const message = "The conversation has been reset.";
            this.updateSnackbar(message);

            return true;
        },
        saveExchangesInStore() {
            this.$store.dispatch('saveExchanges', this.exchanges);
            
            return true;
        },
        submit() {
            this.saveExchangesInStore();
            const message = "The conversation has been submitted.";
            this.updateSnackbar(message);

            return true;
        },
        goToTop() {
            this.$vuetify.goTo(0);

            return true;
        },
    },
    computed: {
        
    },
}
</script>
<style lang="scss" scoped>
.buttons--exchange {
    height: 45px;
}
</style>