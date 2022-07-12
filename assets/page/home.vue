<template>
    <v-container fluid>
        <v-row>
            <v-col cols=12>
                <v-carousel cycle height="300" hide-delimiter-background show-arrows-on-hover>
                    <v-carousel-item v-for="(slide, i) in slides" :key="i">
                        <v-sheet :color="colors[i]" height="100%">
                            <v-row class="fill-height" align="center" justify="center">
                                <div class="text-h2">
                                    {{ slide }} Slide
                                </div>
                            </v-row>
                        </v-sheet>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols=3>
                <h2>Find Your Favorite Foods</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols=2 v-for="item in items.slice(0,6)" :key="item">
                <v-card  v-if="item<6" :loading="loading">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                    <div class="d-flex pa-2">
                        <div>    
                            <v-card-title>Item {{item}} </v-card-title>
                            <v-card-subtitle> $100</v-card-subtitle>
                        </div>
                        <div class="d-flex justify center pa-2">
                            <v-icon >mdi-cart</v-icon>
                        </div>

                    </div>
                </v-card>
                <h3 v-else>See More</h3>
            </v-col>
            <v-row>

            </v-row>

        </v-row>

        <v-row>
            <v-col cols=3>
                <h2>Recomended for You</h2>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols=2 v-for="item in items.slice(0,6)" :key="item">
                  <v-card  v-if="item<6" :loading="loading">
                    <v-img src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
                    <div class="d-flex pa-2">
                        <div>    
                            <v-card-title>Item {{item}} </v-card-title>
                            <v-card-subtitle> $100</v-card-subtitle>
                        </div>
                        <div class="d-flex justify center pa-2">
                            <v-icon >mdi-cart</v-icon>
                        </div>

                    </div>
                </v-card>
                <h3 v-else>See More</h3>
            </v-col>
        </v-row>



        <v-row align="center">
            <v-col>
                <div class="d-flex justify-center pa-2">
                    <v-btn color="success">
                        <v-icon>mdi-cart</v-icon> Paypal
                    </v-btn>
                </div>
            </v-col>
        </v-row>






    </v-container>

</template>


<script>
    module.exports = {

        data() {
            return {
                loading: false,

                colors: [
                    'indigo',
                    'warning',
                    'pink darken-2',
                    'red lighten-1',
                    'deep-purple accent-4',
                ],
                slides: [
                    'First',
                    'Second',
                    'Third',
                    'Fourth',
                    'Fifth',
                ],
                items: [
                    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11
                ],


            }
        },

        methods: {

        },
        mounted() {
        },
        beforeDestroy() {
        }

    }
</script>

