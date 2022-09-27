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
                    <v-list-item>
                        <v-list-item-title>
                            Home
                        </v-list-item-title> 
                    </v-list-item>
                    <v-list-item>
                        <v-list-item-title>
                            Results
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
        };
    },
}
</script>