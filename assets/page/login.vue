<template>
<v-content>
    <v-overlay :value="loading">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
                <v-container fluid fill-height>
                   <v-layout align-center justify-center>
                      <v-flex xs12 sm8 md4>
                         <v-card class="elevation-12">
                               <v-card-title class="d-flex align-center justify-center" >Login</v-card-title>
                            <v-card-text>
                                  <v-text-field
                                     name="login"
                                     label="Username"
                                     type="username"
                                     v-model="username"
                                  ></v-text-field>
                                  <v-text-field
                                     name="password"
                                     label="Password"
                                     type="password"
                                     v-model="password"
                                  ></v-text-field>
                            <v-card-subtitle><router-link :to="'/lupa_password'">Klik untuk Lupa Password</router-link></v-card-subtitle>
                            </v-card-text>
                            <v-card-actions class="d-flex flex-column mb-6 align-center justify-center">
                               <v-spacer></v-spacer>
                               <v-btn color="primary" @click="login">Login</v-btn>
                               <span>or</span>
                               <router-link :to="'/register'"><v-btn color="primary">register</v-btn></router-link>
                            </v-card-actions>
                         </v-card>
                      </v-flex>
                   </v-layout>
                </v-container>
             </v-content>
</template>

<script>
    module.exports = {

        data() {
            return {
                loading: false,
                username:'',
                password:'',
                

            }
        },

        methods: {
         login(){
            alert("login")
         }
        },
        mounted() {
        },
        beforeDestroy() {
        }

    }
</script>

