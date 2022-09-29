<template>
    <v-container>
        <v-app-bar
        app>
            <v-app-bar-nav-icon
            @click="drawer = true"
            ></v-app-bar-nav-icon>
            <v-toolbar-title>Home</v-toolbar-title>
        </v-app-bar>
        <v-navigation-drawer
        temporary
        fixed
        v-model="drawer">
            <v-list-item-group>
                <v-list nav>
                    <v-list-item
                    v-for="item of items"
                    :key="item.itemID">
                        <v-list-item-icon>
                            <v-icon>{{ item.itemIcon }}</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            {{ item.itemTitle }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-list-item-group>
        </v-navigation-drawer>
    </v-container>
</template>
<script>
export default {
    name: "NavigationHeader",
    data() {
        return {
            drawer: false,
            items: [
                {
                    itemID: 0,
                    itemTitle: "Home",
                    itemIcon: "mdi-view-dashboard"
                },
                {
                    itemID: 1,
                    itemTitle: "Results",
                    itemIcon: "mdi-hand-heart"
                },
            ],
        };
    },
}
</script>
<style lang="scss" scoped>
.v-item-group {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;

    .v-list-item__title {
        text-align: left;
    }
}
</style>