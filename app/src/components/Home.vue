<template>
    <v-container>
        <v-card>
            <v-switch
            v-model="isDoOrDont"
            :label="calcSwitchLabel"></v-switch>
            <v-card-text>
                <v-textarea
                outlined
                :label="calcQuestionLabel"
                :placeholder="calcQuestionPlaceholder"
                >
                </v-textarea>
                <v-textarea
                outlined
                label="Because"
                :placeholder="calcAnswerPlaceholder"
                >
                </v-textarea>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: "Home",
    data() {
        return {
            isDoOrDont: true,
        };
    },
    computed: {
        calcSwitchLabel() {
            let switchLabel;

            switch (this.isDoOrDont) {
                case true:
                    switchLabel = "Do";
                    break;
                case false:
                    switchLabel = "Don't";
                    break;
            }

            return switchLabel;
        },
        calcQuestionLabel() {
            let questionLabel;

            switch (this.isDoOrDont) {
                case true:
                    questionLabel = "Why do I";
                    break;
                case false:
                    questionLabel = "Why don't I";
                    break;
            }

            return questionLabel;
        },
        calcQuestionPlaceholder() {
            let questionPlaceholder;

            switch (this.isDoOrDont) {
                case true:
                    questionPlaceholder = "Why do I procrastinate so much even though I have important stuff to do?";
                    break;
                case false:
                    questionPlaceholder = "Why don't I smile at strangers?";
                    break;
            }

            return questionPlaceholder;
        },
        calcAnswerPlaceholder() {
            let answerPlaceholder;

            switch (this.isDoOrDont) {
                case true:
                    answerPlaceholder = "Because I am overwhelmed by the responsibilities and I am afraid of failure.";
                    break;
                case false:
                    answerPlaceholder = "Because I am afraid of rejection. Sometimes they don't smile back at me.";
                    break;
            }

            return answerPlaceholder;
        },
    },
}
</script>