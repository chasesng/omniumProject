<template>

  <div class="w100 h100" style="overflow:hidden">
    <br/>
    <p class="ft wt primarybg cntr p6 br10 bs pd5" style="width:80%;margin-bottom:-3%">Replying to an OPEN request will close it, making it only visible to you.</p>

  <div class="f cntr" style="width:80%;margin-top:5%;height:100%">
    
    
    <div style="width:40%">
      <div class="f sb">
      <p class="ft primary b2 p5 pd5 w100" style="margin-bottom:-.5%;padding-left:3%;text-align:left">Mail</p>
      <button class="ft l w50 pd5 hv" :class="{ active: activeButton === 'open-queries' }" @click="setActiveButton('open-queries');resetVisibleTo(0)">Open Queries</button>
      <button class="ft l w50 pd5 hv" :class="{ active: activeButton === 'inbox' }" @click="setActiveButton('inbox');">Your Inbox</button>
    </div>
      
      <div class="w100 sb" style="height:600px;overflow-y:auto;position:relative">
        <!-- plans.filter(plan => filterByType.includes(plan.typeID))" -->
        <div class="ib w100 hv ptr" v-for="(message, index) in messages.filter(message => message.visibleTo === currentVisible)" :key="index">
                    <div id="qnEa" v-on:click="setPreviewQn(message.id)" class="ft l pd5"  v-bind:key="message.id" style="height:fit-content;width:100%;border:1px solid black">
                     <div class="f">
                      <div class="ib" style="width:60%;border-right:1px solid gray;">
                        <p class="b pd5" style="height:60%;">{{ message.title }}</p>
                        <p class="pd5" style="height:20%;">{{ message.email }}</p>

                      </div>
                      

                      <div class="ib" style="width:40%;">
                        <p style="height:fit-content;border-bottom:1px solid gray;font-size:12px">{{timestampFormat(message.date) }}</p>
                        <div>
                        <p class="pd5" style="height:60%;">{{ message.plan}}</p>
                        </div>
                      </div>                
                     </div>
                                  
                    </div>
                    
        </div>

      </div>

      
    </div>

    <div class="displayQn sb bs" style="width:70%;height:100%">
      <div>
      <p class="w100 ft b2 p5 primary pd5" style="height:fit-content;width:100%;margin-bottom:-.1%">Message</p>
      <div class="ft l" style="border:1px solid gray;margin-top:2%">          
                           
                        <div style="overflow-y:auto;height:570px">
                            <div v-for="(message, id) in messages" :key="id">
                              <div class="f">
                                  <p class="pd5 p9" style="width:30%;text-align:left;border-bottom:.5px solid gray;" v-if="previewQn === message.id">Sent: {{ timestampFormat(message.date) }}</p>
                                  <p class="pd5 p9 second" style="width:20%;text-align:center;border-bottom:.5px solid gray;overflow: hidden;" v-if="previewQn === message.id">{{ timeDifference(message.date) }}</p>
                                  <p class="pd5 p9" style="width:50%;border-bottom:1px solid gray;border-left:.5px solid gray;text-align:left;" v-if="previewQn === message.id">Sender: {{ message.email }}</p>
                              </div>
                              <p class="p6 b" style="width:100%" v-if="previewQn === message.id">{{ message.title }}</p>
                              <p class="pd5 p6 b sbb" style="text-align:left;"  v-if="previewQn === message.id">Plan: {{ message.plan }}</p>
                              <p class="pd5" style="text-align:left;height:200px;overflow-y:auto" v-if="previewQn === message.id">{{ message.text }}</p>
                              <div class="br10 cntr" v-if="previewQn === message.id" style="background-color:gray;width:80%;height:fit-content;"><p class="ft l wt p8">Replies ▼</p></div>
                              <!-- <div v-if="previewQn === message.id && message.replies.length === 0"><p class="ft l">There are no replies</p></div> -->
                              
                              <div v-for="(reply, replyid) in message.replies" :key="replyid">
                                <div class="f">
                                <!-- <p class="pd5" style="width:100%;text-align:left;border-bottom:1px solid black"  v-if="previewQn === message.id">Reply: {{ reply.text }}</p> -->
                                <p class="pd5 p9 sbb sbt" style="width:30%;text-align:left" v-if="previewQn === message.id">Sent: {{ timestampFormat(reply.date) }}</p>
                                <p class="pd5 p9 second sbb sbt" style="width:20%;text-align:left;" v-if="previewQn === message.id">{{ timeDifference(reply.date) }}</p>
                                <p class="pd5 p9 sbl sbb sbt" style="width:50%;text-align:left;" v-if="previewQn === message.id">Sender: {{ reply.email }}</p>
                                </div>
                                <p class="p6 b pd5" style="width:100%;text-align:left" v-if="previewQn === message.id">{{ reply.header }}</p>
                                <p class="pd5" style="text-align:left;height:200px;overflow-y:auto" v-if="previewQn === message.id">{{ reply.text }}</p>

                              </div>

                              
                            </div> 
                        </div>
                        
                        
        </div> 
    </div>
    
    </div>
    
  </div>
  <br/>
  <div style="width:80%;height:520px;" class="ft sb bs cntr mt50">
    <div class="f">
      <div class="w100 ft l primarybg p7 wt pd5" style="text-align:left">Reply {{ usname }}</div>
    </div>
    <br/>
    <div class="f">
        <p class="pd5" style="vertical-align:center;width:10%">RE: Email</p><input class="inp" type="text" style="text-align:left;margin-right:3%;width:250px" v-model="emailHeader" placeholder="(Click on a request above)" :disabled="true"/>
      </div>
      <div class="f">
        <p class="pd5" style="vertical-align:center;width:10%">From</p><input class="inp" ref="replyEmail" type="text" style="text-align:left;margin-right:3%;width:250px" placeholder="Email:">
      </div>
      <div class="f">
        <p class="pd5" style="vertical-align:center;width:10%">To</p><input class="inp" type="text" v-model="toEmail" style="text-align:left;width:250px"  placeholder="(Click on a request above)" :disabled="true">
      </div>
      <div class="f">
        <p class="pd5" style="vertical-align:center;width:10%">Header</p><input class="inp" ref="header" type="text" v-model="header" style="text-align:left;width:250px"/>
      </div>
    <textarea class="w100 pd5 ft l br10" ref="reply" style="overflow-y:auto;height:54%;resize:none" placeholder="Enter reply here..."></textarea>
    <p class="ft l" style="color:red" v-if="errMsg">{{ errMsg }}</p>

    <button class="hv brButton primarybg mt50" @click="addReply(previewQn)" :disabled="!disclosureEnabled"  v-bind:class="{ 'disabled-button': !disclosureEnabled }" style="float:right">Reply</button>
  </div>

</div>
  </template>
  
  <script>
  
  import {getFirestore,onSnapshot,collection,doc,deleteDoc,setDoc,addDoc,orderBy,query, updateDoc, arrayUnion} from 'firebase/firestore';
  
  import { initializeApp } from "firebase/app";
  import {ref,onUnmounted} from 'vue';
  
  const firebaseConfig = {
  apiKey: "AIzaSyD8kn26Sj-wvYhB6h-vALgxWoZ2UyujHyI",
  authDomain: "hana-firebase-auth.firebaseapp.com",
  projectId: "hana-firebase-auth",
  storageBucket: "hana-firebase-auth.appspot.com",
  messagingSenderId: "257456893215",
  appId: "1:257456893215:web:7da412256ffcbfeb62142a",
  measurementId: "G-VNEDYMGDTL"
};


  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const errMsg = ref();
 
  export default {
    name: 'App',
    components: {},
    methods: {
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
          this.currentVisible = "All"
        },
        setVisibleTo(id) {
          this.currentVisible = id;
        },

        setActiveButton(button) {
      this.activeButton = button;
       },

      addReply:function(id) {
              //replies contain header, email, text and date
            
              if (this.$refs.header.value.trim() === "" || this.$refs.reply.value.trim() === "" || this.$refs.replyEmail.value.trim() === "")
              {
                errMsg.value = "One or more fields is empty, please complete all fields. (Header, Reply, Email)"
              }
              else {
              updateDoc(doc(db,'messages',id), {
                replies: arrayUnion(
                  {
                    header:this.$refs.header.value,
                    date:Date.now(),
                    text:this.$refs.reply.value,
                    email:this.$refs.replyEmail.value
                  }
                
                )
              })
            }
            },

      
      addNewMessage:function() {
        addDoc(collection(db,'messages'),{
          title:this.$refs.title.value,
          text:this.$refs.newmessage.value, //textarea question
          phone:this.$refs.phone.value, // phone number
          email:this.$refs.email.value, // email 
          name:this.$refs.name.value, // name
          plan:this.$refs.plan.value, //plan name || id
          date:Date.now()
        });      
      },
      updateMessage:function(message) {
        setDoc(doc(db,'messages',message.id),{
          text:message.text,
          email:message.email,
          title:message.title,
          date:message.date
        })
      },
      deleteMessage:function(id) {
        deleteDoc(doc(db,'messages',id))
      },

      timestampFormat:function(timestamp) {
        const date = new Date(timestamp);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      },
      
      timeDifference:function(timestamp) {
        
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

  
    data:()=> {
      return {
        
        // currentID: db.collection("messages").count().get(),
        activeButton: 'open-queries',
        latestResponse: "",
        previewQn:1,
        disclosure:false,
        messages:ref([]),
        replies: [],
        currentView: ["Open Queries","../assets/icons/openQueries.png"],
        currentVisible: "All",
        

        
      }
    },
    computed: {
    disclosureEnabled() {
      return this.disclosure;
    }
    },
    mounted() {
      const latestQuery = query(collection(db,"messages"),orderBy('date'));
      const livemessages = onSnapshot(latestQuery,(snapshot)=>{
        this.messages = snapshot.docs.map((doc) => {
          return {
            id:doc.id,
            text:doc.data().text,
            name:doc.data().name,
            date:doc.data().date,
            email:doc.data().email,
            title:doc.data().title,
            plan:doc.data().plan,
            replies:doc.data().replies,
            visibleTo:doc.data().visibleTo,

          }
        });
      });
      onUnmounted(livemessages)
    }
  }
  </script>
  
  <style>
button {
  background-color: #f2f2f2;

  transition: all 0.2s ease;
}

button.active {
  background-color: #ccc;
  font-weight:bold;
}
  </style>
  