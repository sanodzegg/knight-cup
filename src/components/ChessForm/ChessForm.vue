<script>
    import axios from 'axios';
    import ErrorSnack from "@/components/Errors/ErrorSnack.vue";
    export default {
        components: { ErrorSnack },
        props: {
            active: Number,
        },
        emits: ["setActive"],
        data() {
            return {
                errors: {
                    experience_level: {
                        valid: false,
                        title: "Knowledge level required",
                        description: "Please select your knowledge level"
                    },
                    character_id: {
                        valid: false,
                        title: "Grandmaster not chosen",
                        description: "Please choose the desired grandmaster"
                    },
                    already_participated: {
                        valid: false,
                        title: "Participation status required",
                        description: "Please select whether you've participated in the Championship or not"
                    }
                },
                errData: [],
                options: ['Beginner', 'Intermediate', 'Professional'],
                grandmastersData: [],
                storageData: {
                    experience_level: "",
                    character_id: "",
                    already_participated: "",
                    character_name: ""
                },
            };
        },
        methods: {
            validateErrors() {
                Object.entries(this.storageData).forEach(e => {
                    if(e[0] !== "character_name") {
                        if(e[1] !== "") {
                            const key = e[0];
                            this.errors[key].valid = true;
                        }
                    }
                });
            },
            validateForms() {
                if(JSON.parse(sessionStorage.getItem("KC-personalInfo")) === null) {
                    return false;
                }
            },
            validate() {
                this.validateErrors();
                const formDone = this.validateForms();
                
                if (!formDone) {
                    this.$router.go(-1);
                } else {
                    let count = 0;
                    Object.values(this.storageData).forEach(e => {
                        if(e !== "") {
                            count++;
                        }
                    });

                    this.errData = [];

                    Object.values(this.errors).forEach((e) => {
                        if (e.valid === false) {
                            this.errData.push({title: e.title, description: e.description});
                        }
                    });

                    if(this.errData.length === 0 || count === 4) {
                        this.storageData = JSON.parse(sessionStorage.getItem("KC-chessInfo"));
                        this.$router.push("/complete");
                    }
                }
            },
            handleSelect(val) {
                this.storageData.experience_level = val;
                sessionStorage.setItem("KC-chessInfo", JSON.stringify(this.storageData));
                this.errors.experience_level.valid = true;

                this.$refs.select.innerText = val;

                this.$refs.optionsWrapper.classList.remove("active");
                this.$refs.dropDownIcon.classList.remove("open");
            },
            handleDropDown() {
                this.$refs.gmWrapper.classList.remove("active");
                this.$refs.dropDownIconGM.classList.remove("open");

                this.$refs.optionsWrapper.classList.toggle("active");
                this.$refs.dropDownIcon.classList.toggle("open");
            },
            handleDropDownGM() {
                this.$refs.optionsWrapper.classList.remove("active");
                this.$refs.dropDownIcon.classList.remove("open");

                this.$refs.gmWrapper.classList.toggle("active");
                this.$refs.dropDownIconGM.classList.toggle("open");
            },
            handleGM(val, id) {
                this.storageData.character_id = id;
                this.storageData.character_name = val;
                sessionStorage.setItem("KC-chessInfo", JSON.stringify(this.storageData));
                this.errors.character_id.valid = true;
                this.$refs.selectGM.innerText = val;
                this.$refs.gmWrapper.classList.remove("active");
                this.$refs.dropDownIconGM.classList.remove("open");
            },
            handleRadio(e) {
                this.errors.already_participated.valid = true;
                let setbool = (e.target.value === "true");
                this.storageData.already_participated = setbool;
                sessionStorage.setItem("KC-chessInfo", JSON.stringify(this.storageData));
            }
        },
        beforeMount: async function() {
            const res = await axios.get(`https://chess-tournament-api.devtest.ge/api/grandmasters`);
            const data = await res.data;
            this.grandmastersData = await data;
        },
        mounted: function() {
            if(sessionStorage.getItem("KC-chessInfo")) {
                this.storageData = JSON.parse(sessionStorage.getItem("KC-chessInfo"));
            }
        }
    }
</script>

<template>
    <div class="errorsWrapper">
        <ErrorSnack v-for="i in errData" :key="i" :title=i.title :description=i.description />
    </div>
    <form class="chessForm">
        <div class="selectParent" id="select0">
            <div class="selectWrapper" @click="handleDropDown(), $emit('setActive', 2)">
                <p v-if="storageData.experience_level" ref="select">{{ storageData.experience_level }}</p>
                <p v-else ref="select">level of knowledge <span>*</span></p>
                <img ref="dropDownIcon" :src="require('@/assets/icons/selectArrow.svg')">
            </div>
            <div ref="optionsWrapper" class="optionsWrapper hidden">
                <p @click="handleSelect(i)" v-for="i in options" :key="i">{{ i }}</p>
            </div>
        </div>
        <div class="selectParent" id="select1">
            <div class="selectWrapper" @click="handleDropDownGM(), $emit('setActive', 2)">
                <p v-if="storageData.character_name" ref="selectGM">{{ storageData.character_name }}</p>
                <p v-else ref="selectGM">Choose your character <span>*</span></p>
                <img ref="dropDownIconGM" :src="require('@/assets/icons/selectArrow.svg')">
            </div>
            <div ref="gmWrapper" class="gmWrapper hidden">
                <span>(Total {{ grandmastersData.length }})</span>
                <div v-for="i in grandmastersData" :key="i" class="gmParent" @click="handleGM(i.name, i.id)">
                    <div class="gmBar">
                        <p>{{ i.name }}</p>
                        <div class="gmPicture">
                            <img :src="`https://chess-tournament-api.devtest.ge` + i.image" alt="chess grandmaster picture">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="selectParent radio" id="select2">
            <p class="radioHeader">Have you participated in the Redberry Championship? <span>*</span></p>
            <div class="radioParent">
                <div class="radioWrapper" @click="$emit('setActive', 2)">
                    <input :checked="storageData.already_participated === true" type="radio" name="radiobtn" value="true" @click="handleRadio($event)">
                    <label for="true">Yes</label>
                </div>
                <div class="radioWrapper" @click="$emit('setActive', 2)">
                    <input :checked="storageData.already_participated === false" type="radio" name="radiobtn" value="false" @click="handleRadio($event)">
                    <label for="false">No</label>
                </div>
            </div>
        </div>
    </form>
    <div class="navButtonWrapper">
        <button class="backBtn" @click="$router.go(-1)">Back</button>
        <button class="nextBtn" @click.prevent="validate()">Done</button>
    </div>
</template>

<style>
    @import url(./ChessForm.css);
</style>