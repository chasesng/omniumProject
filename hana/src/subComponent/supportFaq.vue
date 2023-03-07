<template>
    <br/>
    <div class="faqHeader mt50" style="display:flex;">
        <p style="font-family:Arial, Helvetica, sans-serif; font-weight:bold; font-size:40px; color:gray; margin-left:10%;">FAQ</p>
        
        <div class="tabs" v-bind:style="{ width: parentWidth }">
      <button class="tabName button-17" v-for="tab in tabs" v-bind:key="tab.id" v-bind:class="{ active: currentTab === tab.id }" v-on:click="setCurrentTab(tab.id)">
        {{ tab.name }}
      </button>
    </div>

    </div>
        <br/>
    <div style="margin-left:10%; margin:auto; width:1000px;">
        <div class="searchContainer" style="display:flex; width:100%; text-align:left;">
            <div class="searchBar" style="width:100%; display:flex;">
                <input type="text" class="desc" placeholder=" Search FAQ" style="width:70%; border:1px solid gray"/>
                <p class="desc wtbg" style="width:10%; text-align:center">Search</p>

            </div>
            <!-- <div class="sectionDropdown" style="border:1px solid gray">
                <p class="desc">Section</p>
            </div> -->
        </div>
        <br/>
        <div class="sectionTwo" style="display:flex;">
      
        <div class="miniViewer" style="width:60%;height:300px; background-color:white;">
  <div v-for="(faq, index) in hfaqs" :key="index">
    <b v-if="viewerTab === index+1">{{ faq.qn }}</b>
    <p v-if="viewerTab === index+1">{{ faq.ans }}</p>
  </div>
</div>
        <div class="listBySection" style="overflow:hidden;width:40%;">
            <div>
                <ul>
                    <li class="faqLink wt" v-for="hfaq in hfaqs.filter(hfaq => hfaq.is === currentTab)" v-bind:key="hfaq.id" v-bind:class="{ active: viewerTab === hfaq.id }" v-on:click="setviewerTab(hfaq.id)">
                    {{ hfaq.qn }}
                    </li>
                </ul>
            </div>
        </div>
        </div>
    </div>
        
</template>

<script>
export default {
  data() {
    return {
        currentTab: 1,
        viewerTab: 0,
        tabs: 
        [
            {id: 1, name: 'Life'},
            {id: 2, name: 'Health'},
            {id: 3, name: 'Home'},
            {id: 4, name: 'Auto'},
            {id: 5, name: 'Disability'},
            {id: 6, name: 'Long-Term'},
            {id: 7, name: 'General'},
    
        ],

        hfaqs: [
            {id: 1, is: 1, section: 'Life',  qn: 'Which aspects of life does a typical plan cover?', ans: 'The coverage for a typical life insurance plan includes...'},
            {id: 2, is: 1, section: 'Life',  qn: 'What are some key points of life insurance i should know about?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 3, is: 2, section: 'Health',  qn: 'Which aspects of health does a typical plan cover?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 4, is: 2, section: 'Health',  qn: 'What are some key points of health insurance i should know about?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 5, is: 3, section: 'Home',  qn: 'Which aspects of a home does a typical plan cover?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 6, is: 3, section: 'Home',  qn: 'What are some key points of home insurance i should know about?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 7, is: 4, section: 'Auto',  qn: 'Which aspects of vehicles does a typical plan cover?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 8, is: 4, section: 'Auto',  qn: 'What are some key points of auto insurance i should know about?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 9, is: 5, section: 'Disability',  qn: 'Which aspects of disability does a typical plan cover?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 10, is: 5, section: 'Disability',  qn: 'What are some key points of disability insurance i should know about?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 11, is: 6, section: 'Long-Term',  qn: 'Which aspects of elderly care does a typical plan cover?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 12, is: 6, section: 'Long-Term',  qn: 'What are some key points of long-term insurance i should know about?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 13, is: 7, section: 'General',  qn: 'Why should i buy insurance?', ans: 'The payment plan for a typical life insurance contract...'},
            {id: 14, is: 7, section: 'General',  qn: 'Where can i learn more about insurance policies?', ans: 'The payment plan for a typical life insurance contract...'},


        ]
    }
  },


  methods: {
    setCurrentTab(id) {
        this.currentTab = id
    },

    setviewerTab(id) {
        this.viewerTab = id
    }
   
  }
};
</script>

<style>

.faqHeader {
    margin-left:2%;
}

.tabs {
    margin-left:2%;
}
.faqContainer {
    display: flex;
    margin:auto;
    text-align:left;

}

.faqLink {
    cursor:pointer;
}

.holdList {
    display:flex;
    padding:5px 10px;
    list-style:none;
}

.desc {
    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:16px;
    font-weight:300;
    padding:5px;
    color:black;
    border:1px solid gray;
    height:35px;
}

.miniViewer {
    border: 1px solid gray
}
.sectionOption {
    width:400px;
    display:grid;
    align-items:center;
}



/* CSS */

</style>