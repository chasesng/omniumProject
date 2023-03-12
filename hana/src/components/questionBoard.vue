<head>
</head>
<template>
  <br />
  <div class="w100 h100" style="overflow:hidden;">
    <!-- <p class="ft wt primarybg cntr p6 br10 bs pd5" style="width:80%;margin-bottom:-3%">Replying to an OPEN request will close it, making it only visible to you.</p> -->

    <div class="f cntr" style="width:98%;margin-top:5%;height:100%;background-color:whitesmoke ">

      <div v-for="(user, index) in users.filter(user => user.userID === usID)" style="visibility:hidden"  :key="index">
      {{ updateUserType( user.userType, user.email) }}
      </div>
      <div style="width:40%">
        <div class="f lb" style="height:7%">
          <p class="w100 ft b2 p6 second pd5" style="padding-left:3%;text-align:left;padding-top:2%">Mailbox <i class="fa-solid fa-paper-plane"></i></p>
          <button class="cleanButton ft l w50 pd5 hv" :class="{ active: activeButton === 'open-queries' }" v-if="showUserType === 'Admin' || showUserType === 'Advisors'"
            @click="setActiveButton('open-queries'); resetVisibleTo(0);">Open Queries</button>
          <button class="cleanButton ft l w50 pd5 hv" :class="{ active: activeButton === 'inbox' }"
            @click="setActiveButton('inbox');setVisibleTo(usID)">Your Inbox</button>
        </div>

        <div class="w100 lb" style="height:600px;overflow-y:auto;position:relative" v-if="showUserType === 'Admin' || showUserType === 'Advisors'">
          <!-- plans.filter(plan => filterByType.includes(plan.typeID))" -->

          <div class="ib w100 hv ptr animate__animated animate__slideInDown qnDisplay"
            v-for="(message, index) in messages.filter(message => message.visibleTo === currentVisible && message.visibleTo != 'FromOmnium')" :key="index">
            <!-- message.visibleTo is a string with values like "All" or the id of an advisor -->
            <div id="qnEa" v-on:click="setPreviewQn(message.id)"
              v-bind:class="{ 'selected-message': message.id === previewQn }" class="ft l pd5" v-bind:key="message.id"
              style="height:100px;width:100%;">
              <div class="f">
                <div class="ib" style="width:60%;padding-top:.5%">
                  <div class="f">
                    <p class="pd5"><i class="fa-solid fa-chevron-right"></i></p>
                    <p class="pd5" style="height:10%;"> {{ message.email }}</p>
                  </div>
                  <div class="vMsg pd5" style="height:67px;margin-top:-5%">{{ truncateString(message.title) }}
                    <Br />
                    <p class="l">{{ (message.text) }}</p>
                  </div>
                </div>
                <div class="ib" style="width:40%;">
                  <p style="height:fit-content;font-size:16px">
                    {{ timestampFormat(message.date) }}</p>
                  <div>
                    <br />
                    <p class="pd5" style="height:60%;">Plan: {{ message.plan }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="w100 lb" style="height:600px;overflow-y:auto;position:relative" v-if="showUserType === 'User'">
          <!-- plans.filter(plan => filterByType.includes(plan.typeID))" -->

          <div class="ib w100 hv ptr animate__animated animate__slideInDown qnDisplay"
            v-for="(message, index) in messages.filter(message => message.email === showUserEmail || message.visibleTo === 'FromOmnium')" :key="index">
            <!-- message.visibleTo is a string with values like "All" or the id of an advisor -->
            <div id="qnEa" v-on:click="setPreviewQn(message.id)"
              v-bind:class="{ 'selected-message': message.id === previewQn }" class="ft l pd5" v-bind:key="message.id"
              style="height:100px;width:100%;">
              <div class="f">
                <div class="ib" style="width:60%;padding-top:.5%">
                  <div class="f">
                    <p class="pd5"><i class="fa-solid fa-chevron-right"></i></p>
                    <p class="pd5" style="height:10%;"> {{ message.email }}</p>
                  </div>
                  <div class="vMsg pd5" style="height:67px;margin-top:-5%">{{ truncateString(message.title) }}
                    <Br />
                    <p class="l">{{ (message.text) }}</p>
                  </div>
                </div>
                <div class="ib" style="width:40%;">
                  <p style="height:fit-content;font-size:16px">
                    {{ timestampFormat(message.date) }}</p>
                  <div>
                    <br />
                    <p class="pd5" style="height:60%;">Plan: {{ message.plan }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>``


      </div>
      <span></span>
      <div class="displayQn h100" style="width:70%;margin-left:1%">
        <div>

          <p class="w100 ft b2 p6 second pd5" style="height:100%;width:100%;margin-bottom:-2%">Message <i class="fa-solid fa-envelope-open-text"></i></p>
          <div class="ft l br10 cntr" style="border:1px solid gray;margin-top:2%;width:99%">

            <div class="scroll wtbg br10" style="overflow-y:auto;scrollbar-gutter:stable;height:570px">
              <div v-for="(message, id) in messages" :key="id">
                
                <div class="f" style="width:100%">
                  <p class="pd5 p9" style="width:30%;text-align:left;border-bottom:.5px solid gray;;"
                    v-if="previewQn === message.id">Sent: {{ timestampFormat(message.date) }}</p>
                    
                  <p class="pd5 p9 second"
                    style="width:20%;text-align:center;border-bottom:.5px solid gray;overflow: hidden;"
                    v-if="previewQn === message.id">{{ timeDifference(message.date) }}</p>
                  <p class="pd5 p9"
                    style="width:50%;border-bottom:1px solid gray;border-left:.5px solid gray;text-align:left;"
                    v-if="previewQn === message.id">Sender: {{ message.email }}</p>
                </div>

                <p class="p6 b pd5" style="width:100%;text-align:left;" v-if="previewQn === message.id">
                  <span style="color: black;">{{ message.title }}</span>
                </p>
                
                <div class="f">
                  <p class="pd5 p7 b" style="text-align:left;" v-if="previewQn === message.id">Plan: {{ message.plan }} |
                  </p>
                  <p class="pd5 p7 b" style="text-align:right;" v-if="previewQn === message.id">Sender: {{ message.name }}
                  
                  </p>
                </div>
                <!-- <div v-if="previewQn === message.id">
                  <div v-for="(user, index) in users.filter(user => user.userID === message.senderID)" :key="index" >
                    
                    <p class="ibn l p8" style="color:red">This user has completed {{ user.assignmentArray[0].split(',').length }} / 20 questions of their insurance assessment.</p>
                    <p class="ibn l p8" style="color:green">View their results here</p>
                  </div>
                </div> -->

                <div v-if="previewQn === message.id">
                  <div v-for="(user, index) in users.filter(user => user.userID === message.senderID)" :key='index'>
                    <p v-if="String(user.assignmentArray).split(',')[0] === '' && showUserType != 'User'" class="ibn l p8" style="color:red">This user has not completed their insurance assessment.</p>
                   
                    <div v-else-if="String(user.assignmentArray).split(',')[0] != '' && showUserType != 'User'" class="ibn l p8" style="color:green">This user has completed {{ String(user.assignmentArray).split(',').length }}/20 questions of the insurance assessment.
                    <br/>
                      <div style="overflow-y:auto;height:30vh">
                        <p v-for="(item, index) in String(user.assignmentArray).split(',')" :key="index"><span>{{index+1}}. {{ item.split('_')[0] }}</span>
                        <br /><span style="text-decoration:underline">{{ item.split('_')[2] }}</span></p>
                      
                      </div>
                    </div>
                    
                  </div>
                </div>

                <p class="pd5" style="white-space: pre-wrap;text-align:left;height:300px;overflow-y:auto"
                  v-if="previewQn === message.id">{{
                    message.text }}</p>
                <div class="br10 cntr" v-if="previewQn === message.id"
                  style="background-color:gray;width:95%;height:fit-content;">
                  <p class="ft l wt p8">Replies ▼</p>
                </div>
                <!-- <div v-if="previewQn === message.id && message.replies.length === 0"><p class="ft l">There are no replies</p></div> -->

                <div v-for="(reply, replyid) in message.replies" :key="replyid">
                  <div class="f">

                    <!-- <p class="pd5" style="width:100%;text-align:left;border-bottom:1px solid black"  v-if="previewQn === message.id">Reply: {{ reply.text }}</p> -->
                    <p class="pd5 p9 sbb sbt" style="width:30%;text-align:left" v-if="previewQn === message.id">Sent: {{
                      timestampFormat(reply.date) }} </p>
                    <!-- <button class="brButton primarybg" @click="deleteReply(reply.id)" v-if="previewQn === message.id">Delete Button</button> -->

                    <p class="pd5 p9 second sbb sbt" style="width:20%;text-align:left;" v-if="previewQn === message.id">{{
                      timeDifference(reply.date) }}</p>
                    <p class="pd5 p9 sbl sbb sbt" style="width:50%;text-align:left;" v-if="previewQn === message.id">
                      Sender: {{ reply.email }}</p>
                  </div>
                  <p class="p6 b pd5" style="width:100%;text-align:left" v-if="previewQn === message.id">{{ reply.header
                  }}</p>
                  <p class="pd5" style="white-space: pre-wrap; text-align:left;height:200px;overflow-y:auto"
                    v-if="previewQn === message.id">{{
                      reply.text }}</p>

                </div>


              </div>
            </div>


          </div>
        </div>

      </div>

    </div>
    <div style="width:98%;height:70vh;overflow:hidden" class="ft lb cntr mt50 wtbg">
      <div class="f" style="height:49px">
        <div class="ft l second p6 wt pd5" style="text-align:left;padding-left:1%;text-align:left;padding-top:1%">Reply <i class="fa-solid fa-reply"></i></div>
        <p class="ft p8 pd5 h100 cntr b2" style="color:red;">{{ errMsg }}</p>

      </div>
      <br />
      <div class="f">
        <p class="pd5" style="width:10%">RE:</p><input class="inp" type="text"
          style="text-align:left;margin-right:3%;width:250px" v-model="emailHeader"
          placeholder="(Click on a request above)" :disabled="true" />
      </div>
      <div class="f">
        <p class="pd5" style="width:10%">From</p>
        <input class="inp" ref="replyEmail" type="text" style="text-align:left;margin-right:3%;width:250px"
          placeholder="Log In to Reply!" :value="usEmail" :disabled="true">
      </div>
      <div class="f">
        <p class="pd5" style="width:10%">To</p><input class="inp" type="text" v-model="toEmail"
          style="text-align:left;width:250px" placeholder="(Click on a request above)" ref="toEmail" :disabled="true">
      </div>
      <div class="f">
        <p class="pd5" style="width:10%">Header</p>
        <input class="inp" ref="header" type="text" v-model="header" style="text-align:left;width:500px" />
      </div>
      
        <input class="inp" type="text" ref="holdusid" style="text-align:left;width:500px;display:none" :value="usID"/>

      <textarea class="pd5 ft l lb br10" ref="reply" style="overflow-y:auto;height:40%;width:95%;resize:none;"
        placeholder="Enter reply here..."></textarea>

    </div>
    <button class="hv brButton primarybg mt50 mb50" @click="addReply(previewQn)" :disabled="!disclosureEnabled"
      v-bind:class="{ 'disabled-button': !disclosureEnabled }" style="float:right;margin-right:5%">Reply <i class="fa-solid fa-reply"></i></button>


  </div>
</template>
  
 

<script>

import { getFirestore, onSnapshot, collection, doc, addDoc, orderBy, query, updateDoc, arrayUnion } from 'firebase/firestore';
import { onAuthStateChanged, getAuth } from '@firebase/auth';
import { ref, onUnmounted, onMounted } from 'vue';
import { app } from '@/configs.js';


const db = getFirestore(app);
const errMsg = ref();
const isLoggedin = ref(false);

export default {
  name: 'App',
  components: {

  },
  methods: {
    truncateString: function (str) {
      if (str.length > 30) {
        return str.substring(0, 30) + "...";
      }
      else {
        return str;
      }
    },

    setPreviewQn(id) {
      this.previewQn = id;
      let qn = this.messages.find(message => message.id === id)
      if (qn) {
        this.toEmail = qn.email;
        this.emailHeader = qn.title;
        this.disclosure = true;
      }
      else {
        this.disclosure = false;
      }


    },
    resetVisibleTo() {
      this.currentVisible = "Advisors"
    },
    setVisibleTo(id) {
      this.currentVisible = id;
    },

    setActiveButton(button) {
      this.activeButton = button;
    },
// action reply can work 2 ways. Rule: base users never change the visibleTo value. Get usertype before running updatedoc to run different code
    addReply: function (id) {
      if (this.$refs.header.value.trim() === "" || this.$refs.reply.value.trim() === "" || this.$refs.replyEmail.value.trim() === "") {
        errMsg.value = "One or more fields is empty, please complete all fields. (Header, Reply)"
      }
      else {


        if (this.showUserType === 'User') // user, cannot update visibleTo
          {
            if (this.$refs.toEmail.value === 'omniumsupport@omnium.com') {
              errMsg.value= "You cannot reply to this email!"
            }
            else {

            

            updateDoc(doc(db, 'messages', id), {
            replies: arrayUnion(
              {
                header: this.$refs.header.value,
                date: Date.now(),
                text: this.$refs.reply.value,
                email: this.$refs.replyEmail.value,

              }

            )
          })
          .catch((error) => {
            console.log(error.code);
            switch(error.code) {
              default:
                errMsg.value = error.code
            }
          })
          this.$refs.message.value = "";
        }
        }
        
        else //admin or advisors
          {
            updateDoc(doc(db, 'messages', id), {
            replies: arrayUnion(
              {
                header: this.$refs.header.value,
                date: Date.now(),
                text: this.$refs.reply.value,
                email: this.$refs.replyEmail.value,

              }

            ),
            visibleTo: this.$refs.holdusid.value
          })
          .catch((error) => {
            console.log(error.code);
            switch(error.code) {
              default:
                errMsg.value = error.code
            }
          })
          this.$router.push({ path: '/Question_Board' })

          }


      }
    },


    addNewMessage: function () {
      addDoc(collection(db, 'messages'), {
        title: this.$refs.title.value,
        text: this.$refs.newmessage.value, //textarea question
        phone: this.$refs.phone.value, // phone number
        email: this.$refs.email.value, // email 
        name: this.$refs.name.value, // name
        plan: this.$refs.plan.value, //plan name || id
        date: Date.now()
      })
    },
    // updateMessage: function (message) {
    //   setDoc(doc(db, 'messages', message.id), {
    //     text: message.text,
    //     email: message.email,
    //     title: message.title,
    //     date: message.date
    //   })
    // },
    // deleteMessage: function (id) {
    //   deleteDoc(doc(db, 'messages', id))
    // },

    updateUserType: function(userTypeString, userEmailString) {
      this.showUserType = userTypeString;
      this.showUserEmail = userEmailString;
    },

    timestampFormat: function (timestamp) {
      const date = new Date(timestamp);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    },

    timeDifference: function (timestamp) {

      const timeDifference = Date.now() - timestamp;
      const seconds = timeDifference / 1000;
      const minutes = seconds / 60;
      const hours = minutes / 60;
      const days = hours / 24;

      if (minutes < 60) {
        return Math.round(minutes) + ' minute(s) ago';
      } else if (hours < 24) {
        return Math.round(hours) + ' hour(s) ago';
      } else {
        return Math.round(days) + ' day(s) ago';
      }
    }
  },


  data: () => {
    return {
      users: ref([]),
      // currentID: db.collection("messages").count().get(),
      activeMail: '',
      activeButton: 'open-queries',
      latestResponse: "",
      previewQn: 1,
      disclosure: false,
      messages: ref([]),
      replies: [],
      currentVisible: "Advisors",
      showUserType: "",


    }
  },
  computed: {
    disclosureEnabled() {
      return this.disclosure;
    }
  },
  mounted() {
    const latestQuery = query(collection(db, "messages"), orderBy('date'));
    const livemessages = onSnapshot(latestQuery, (snapshot) => {
      this.messages = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          text: doc.data().text,
          name: doc.data().name,
          date: doc.data().date,
          email: doc.data().email,
          title: doc.data().title,
          plan: doc.data().plan,
          replies: doc.data().replies,
          visibleTo: doc.data().visibleTo,
          senderID: doc.data().senderID

        }
      });
    });

    const userQuery = query(collection(db, "users"));
    const liveUsers = onSnapshot(userQuery, (snapshot) => {
      this.users = snapshot.docs.map((doc) => {
        return {
          userID: doc.data().userID,
          username: doc.data().username,
          gender: doc.data().gender,
          age: doc.data().age,
          assignmentArray: doc.data().assignmentArray,
          from: doc.data().from,
          occupation: doc.data().occupation,
          email: doc.data().emailRef,
          userType: doc.data().userType


        }
      });
    }); onUnmounted(livemessages, liveUsers)
  }
}
</script>
  
<script setup>
var usID = ref('');
var usEmail = ref('');
let auth;



onMounted(() => {
  auth = getAuth();
    onAuthStateChanged(auth, (user) => {
    if (user) {

      isLoggedin.value = true;
      usID.value = user.uid;
      usEmail.value = user.email;

    }
    else {
      isLoggedin.value = false;
    }
    return {
      usID
    }
  })
})


</script>


<style>
.vMsg p {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden
}

button {

  transition: all 0.2s ease;
}

button.active {
  background-color: #ccc;
  font-weight: bold;
}

* {
  scrollbar-width: thin;
  scrollbar-color: #ccd4df #ffffff;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background-color: transparent;
}

*::-webkit-scrollbar-thumb {
  background-color: #ccd4df;
  border-radius: 10px;
  border: 3px ridge #ffffff;
}

.selected-message {
  background-color: #ccc;
  font-weight: bold;
}

#qnEa:active {
  background-color:lightgray;
  transition: background-color .2s;;
}

.qnDisplay:nth-child(even) {
  background-color: #ffffff
}</style>
  