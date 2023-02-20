<template>
    <div>
        <br />


        <div class="f cntr" style="width:80%;height: 300px;">
        <div class="ib mr50" style="width:30%">
            <div class="sb br10" style="height:30%;">
                    {{ usEmail }}
            </div>

            <div class="sb f pd5 br10" style="padding-left:1%;height:65%;margin-top:3%;flex-direction:column;justify-content: space-evenly;">
                    <div class="f">
                        <label class="ft l mr10" style="width:10%">Name</label>
                        <input class="inpclear inp" placeholder="Name as on IC" :value="usName" ref="displayName">
                    </div>
                    <div class="f">
                        <label class="ft l mr10" style="width:10%">Email</label>
                        <input class="inpclear inp" placeholder="Email" :disabled="true" :value="usEmail">
                    </div>
                    <div class="f">
                        <label class="ft l mr10" style="width:10%">Phone</label>
                        <input class="inpclear inp" placeholder="Phone No." :disabled="true" :value="usPhone">
                    </div>
                    <div class="f">
                        <label class="ft l mr10" style="width:10%">Age</label>
                        <input class="inpclear inp" placeholder="Enter Age">
                    </div>
                    <div class="f">
                        <label class="ft l mr10" style="width:10%;">Sex</label>
                        <select style="height:30px;background:transparent" id="gender" v-model="selectedGender">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    

                </div>
        </div>
        <div class="ib sb br10" style="overflow:hidden;width:30%;height:100%;float:left;">
                <div class="w100 primarybg" style="height:13%">
                    <p class="ft l wt pd5 p8" style="float:left">About Me</p>
                </div>
                <div class="w100" style="height:85%">
                    <textarea class="w100 h100 pd5 ft l" placeholder="About Me... (Job, Hobbies, Likes / Dislikes)"></textarea>
                </div>
            </div>
        </div>
    </div>
    <Br/>
</template>


<script setup>


import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
const isLoggedin = ref(false);
var usName = ref('');
var usEmail = ref('');
var usPhone = ref('');
let auth;

onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (user) {
            isLoggedin.value = true;
            usName = user.displayName;
            usPhone = user.phoneNumber;
            usEmail.value = user.email;
        }
        else {
            isLoggedin.value = false;
            usEmail.value = "User is not logged in!"
        }
        return {
            usName
        }
    })
})

</script>


<script>
export default {
    data() {

    },
    methods: {
        updateDisplayName() {
            if (this.$refs.displayName) {
                usName = this.$refs.displayName
            }
        },

        toRegister() {
            this.$router.push({ path: '/Register' })
        },
        toAssessment() {
            this.$router.push({ path: '/Insurance_Assessment' })
        },
    }

}
</script>
