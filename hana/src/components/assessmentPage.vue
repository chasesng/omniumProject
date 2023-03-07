<template>
    <hr />
    
    <div class="assessmentHeader wtbg cntr" style="margin-top:10%">
        <p class="ft l p6 cntr">Completing more questions allows advisors to gain a better understanding of you</p>
    </div>
    <br />
    <div class="f cntr" style="width:88vw">
        <div class="ib">
            <div class="w50" v-for="(question, index) in qnsControl" :key="index" style="margin-bottom:3%;">
                <div class="question wtbg br10 animate__animated animate__slideInLeft" style="width:30vw;height:fit-content;">
                    <p class="ft b p8 pd5 w100">{{ index + 1 }}. {{ question.qn }}</p>
                    <div class="pd5">
                        <div v-for="(option, index) in qnsControl" :key="index" class="ft l p8 " style="height:fit-content;text-align: left;">
                            <label :id="'Q' + question.id + '_Option_' + question.options[index]" class="cntr br10 optEa" v-if="question.options[index] != null" style="text-align:center;height:33px;width:50%;margin-bottom:2%;">{{ question.options[index] }}<input type="radio" :name="'Q' + question.id" style="float:right;" :value="question.qn + '_Option_' + question.options[index]" @click="updateColor(question.qn + '_Option_' + question.options[index])"/></label>
                        </div>
                        <div style="margin-bottom:90px;"></div>



                        
                    </div>
                </div>


            </div>
            <button @click="updateResponseArray">Update Array</button>
        </div>
        <div class="wt lb" style="height:90vh;width:40vw;margin-left:2%;">
            {{ responseArray }}
        </div>


    </div>
</template>

<script>
//todo: import user profile values to view logged in user's id to be used as parameter for updating user's assessmentArray value in firestore


export default {
    components: {
        // question,
    },

    data() {
        return {

            responseArray: [],
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
                    qn: 'How much insurance coverage do you need for any given insurance?',
                    options: ['Varies', 'At least 30%', 'At least 60%', 'Completely'],
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
        
    },

    methods: {
        updateResponseArray() {
                this.responseArray = [];
                const radiobuttons = document.querySelectorAll('input[type="radio"]:checked');
                radiobuttons.forEach((button) => {
                this.responseArray.push(button.value);
                });

                
        },
        updateColor() {
            // var clicked = document.getElementById(val);
            //     clicked.style.backgroundColor = "blue";
            

        }



    }
}
</script>

<style>


.assessmentHeader {
    width: 88vw;
    height: 10vh;
}

.optEa {
    background-color:whitesmoke
}

.optEa:hover {
    transform: scale(1.05);
    transition: transform .2s, background-color .6s;
    background-color:#174ea6;
    color:white;
    cursor:pointer;
}
</style>