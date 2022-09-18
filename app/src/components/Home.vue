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
                >
                </v-textarea>
                <v-textarea
                outlined
                label="Because"
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
    },
}
</script>