<template>
    <div class="assessmentControl">
        <hr/>
        <br/>
        <p class="assessmentTitle ft p3">Insurance Assessment</p>
        <br/>
        <div class="wtbg sb bs br10">
            <div class="sectionBanner">
                <p class="ft b w100 primary wtbg p5 pd5" style="padding-top:10px">Answer all questions below</p>
                <p class="ft l wt p7 primarybg pd5">Your submission will be visible to advisors you contact, providing insight on your needs.</p>

            </div>
            <br/>
            <!-- start -->
            <question class="ft l" v-for="(qn, index) in qnsControl" :question="qn" :key="index"></question>

            <button class="brButton primarybg hv" style="float:left;height:30%;margin-left:1%">Update Profile</button>
            <br/>
            <hr/>
        </div>

</div>
</template>

<script>
import question from '@/subComponent/qnsList.vue';

export default {
    components: {
        question,
    },

    data() {
        return {
            selectedOptions: [],
            resultArray: [],
        
            qnsControl: [
            {
                    id: 1,
                    qn: 'Are you married?',
                    options: ['Yes', 'No', 'Planning to in the near future', 'Separated'],
                    },
                    {
                    id: 2,
                    qn: 'Do you have dependents?',
                    options: ['Yes', 'No'],
                    },
                    {
                    id: 3,
                    qn: 'What is your current age?',
                    options: ['18-29', '30-39', '40-49', '50 or older'],
                    },
                    {
                    id: 4,
                    qn: 'What is your current occupation?',
                    options: ['Employed', 'Unemployed', 'Retired', 'Self-Employed'],
                    },
                    {
                    id: 5,
                    qn: 'What is your annual income?',
                    options: ['Less than $30,000', '$30,000-$49,999', '$50,000-$74,999', '$75,000 or more'],
                    },
                    {
                    id: 6,
                    qn: 'Do you smoke?',
                    options: ['Yes', 'No'],
                    },
                    {
                    id: 7,
                    qn: 'Do you have any pre-existing medical conditions?',
                    options: ['Yes', 'No'],
                    },
                    {
                    id: 8,
                    qn: 'Do you engage in high-risk activities such as skydiving or racing?',
                    options: ['Yes', 'No'],
                    },
                    {
                    id: 9,
                    qn: 'What is the coverage amount you are seeking?',
                    options: ['$100,000 or less', '$100,000-$249,999', '$250,000-$499,999', '$500,000 or more'],
                    },
                    {
                    id: 10,
                    qn: 'What is the coverage length you are seeking?',
                    options: ['1 year', '5 years', '10 years', 'Lifetime'],
                    },
                    {
                    id: 11,
                    qn: 'Do you want your premium to remain level or change over time?',
                    options: ['Remain level', 'Change over time'],
                    },
                    {
                    id: 12,
                    qn: 'Do you want a guaranteed premium or flexible premium?',
                    options: ['Guaranteed', 'Flexible'],
                    },
                    {
                    id: 13,
                    qn: 'Do you want a guaranteed death benefit or flexible death benefit?',
                    options: ['Guaranteed', 'Flexible'],
                    },
                    {
                    id: 14,
                    qn: 'Do you want a guaranteed cash value or flexible cash value?',
                    options: ['Guaranteed', 'Flexible'],
                    },
                    {
                    id: 15,
                    qn: 'Do you want the option to convert to a permanent policy later?',
                    options: ['Yes', 'No'],
                    },
                    {
                    id: 16,
                    qn: 'Do you want the option to renew your policy later?',
                    options: ['Yes', 'No'],
                    },
                    {
                    id: 17,
                    qn: 'How much coverage do you need?',
                    options: ['$100,000-$250,000', '$250,000-$500,000', '$500,000-$1,000,000', 'More than $1,000,000'],
                    },
                    {
                    id: 18,
                    qn: 'Do you prefer a term or permanent policy?',
                    options: ['Term', 'Permanent'],
                    },
                    {
                    id: 19,
                    qn: 'Do you want your policy to have a cash value component?',
                    options: ['Yes', 'No'],
                    },
                    {
                    id: 20,
                    qn: 'Do you want your policy to be medically underwritten or guaranteed issue?',
                    options: ['Medically underwritten', 'Guaranteed issue'],
                    }
                        ],
        }
    
    
    
    },
    props: ['choices', 'questionsarray'],

    watch: {
                selectedOptions: function() {
                    let resultArray = [];
                    for (let i = 0; i < this.selectedOptions.length; i++) {
                    const option = this.options.find(o => o.value === this.selectedOptions[i]);
                    resultArray.push({ name: option.QnandOption, value: this.selectedOptions[i] });
                    }
                    this.$emit('selectedOptionsUpdated', resultArray);
                }
            },

    methods: {
        updateSelectedOptions(event) {
    this.selectedOptions = event.target.value;
                                    },
        // addReply:function(id) {
    
        //       updateDoc(doc(db,'messages',id), {
        //         replies: arrayUnion(
        //           {
        //             header:this.$refs.header.value,
        //             date:Date.now(),
        //             text:this.$refs.reply.value,
        //             email:this.$refs.replyEmail.value
        //           }
                
        //         )
        //       })
            
        //     },

        
      
}
}
</script>

<style>

.assessmentControl {
    margin:auto;
    width:55%
}
.hidden {
  opacity: 0;
  transition: all 1s;
}

.show {
  opacity: 1;
}

.sectionBanner {
    width:100%;
    display: inline-block;
    object-fit:fill;

    overflow:hidden;
    height:fit-content;

}


.questionLabel {
    font-weight:500;
    font-size:18px;
    text-align:left;
    padding-left:15px;
}

.qnContainer {
    margin-right:1%;
    width:100%;
}


.qnRadio {
margin-right:10px;
}


.inlineBlockQn {
    display: inline-block;
    width:100%;
    margin-left:30px;

}



</style>