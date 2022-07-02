<script>
    import { mapActions } from "vuex";
    import ErrorSnack from "../Errors/ErrorSnack.vue";

    export default {
    props: {
        active: Number,
    },
    emits: ["setActive"],
    data() {
        return {
            personalData: {
                name: String,
                email: String,
                phone: String,
                date_of_birth: String
            },
            errors: {
                name: {
                    valid: false,
                    title: "Invalid name",
                    description: "Please enter valid name"
                },
                email: {
                    valid: false,
                    title: "Invalid email",
                    description: "Please enter valid email"
                },
                phone: {
                    valid: false,
                    title: "Invalid phone number",
                    description: "Please enter valid phone number"
                },
                date_of_birth: {
                    valid: false,
                    title: "Invalid date entered",
                    description: "Please enter valid date"
                }
            },
            errData: []
        };
    },
    methods: {
        ...mapActions(["getData"]),
        handleClick() {
            this.$emit("setActive", 1);
        },
        handleBlur(e) {
            if (e.target.value.length > 0) {
                e.target.classList.add("active");
            }
            else {
                e.target.classList.remove("active");
            }
        },
        validateName(e) {
            const nameRegex = /^[a-z ,.'-]+$/i;
            if (e.target.value.length > 2 && nameRegex.test(e.target.value)) {
                this.errors.name.valid = true;
                this.personalData.name = e.target.value;
                e.target.classList.add("valid");
                e.target.classList.remove("error");
            }
            else {
                this.errors.name.valid = false;
                e.target.classList.add("error");
                e.target.classList.remove("valid");
            }
        },
        validateMail(e) {
            const rbRegex = /^[a-z0-9](\.?[a-z0-9]){2,}@redberry\.ge$/i;
            if (rbRegex.test(e.target.value)) {
                this.errors.email.valid = true;
                this.personalData.email = e.target.value;
                e.target.classList.add("valid");
                e.target.classList.remove("error");
            }
            else {
                this.errors.email.valid = false;
                e.target.classList.add("error");
                e.target.classList.remove("valid");
            }
        },
        validatePN(e) {
            if (e.target.value[0] === "5" && e.target.value.length == 9) {
                this.errors.phone.valid = true;
                this.personalData.phone = e.target.value;
                e.target.classList.add("valid");
                e.target.classList.remove("error");
            }
            else {
                this.errors.phone.valid = false;
                e.target.classList.add("error");
                e.target.classList.remove("valid");
            }
        },
        validateDate(e) {
            const year = new Date().getFullYear();
            if (e.target.value) {
                const date = e.target.value.split("-");
                if (parseInt(date[0]) < year && parseInt(date[0]) > 1800) {
                    this.errors.date_of_birth.valid = true;
                    const parsedDate = [date[1], date[2], date[0]];
                    this.personalData.date_of_birth = parsedDate.join("/");
                    e.target.classList.add("valid");
                    e.target.classList.remove("error");
                }
                else {
                    e.target.classList.add("error");
                    e.target.classList.remove("valid");
                }
            }
        },
        transform() {
            const ref = this.$refs.birthInput;
            ref.type = "date";
        },
        validate() {
            this.errData = [];
            Object.values(this.errors).forEach((e) => {
                if (e.valid === false) {
                    this.errData.push({title: e.title, description: e.description});
                }
            });
        }
    },
    mounted: function () {
        // this.getData(this.sample);
    },
    components: { ErrorSnack }
}
</script>

<template>
    <div class="errorsParent">
        <div v-for="i in errData" :key="i" class="errorsWrapper">
            <ErrorSnack :title=i.title :description=i.description />
        </div>
    </div>
    <form>
        <input @click="handleClick" @blur="handleBlur($event); validateName($event)" type="text" name="name" id="userName" placeholder="Name *">
        <input @click="handleClick" @blur="handleBlur($event); validateMail($event)" type="email" name="email" id="userAddress" placeholder="Email address *">
        <input @click="handleClick" @blur="handleBlur($event); validatePN($event)" name="number" id="userPN" placeholder="Phone number *">
        <input @click="handleClick; transform()" @blur="handleBlur($event); validateDate($event)" ref="birthInput" type="text" name="date" id="userDate" placeholder="Date of birth *">
    </form>
    <div class="navButtonWrapper">
        <button class="backBtn" @click="$router.go(-1)">Back</button>
        <button class="nextBtn" @click.prevent="validate()">Next</button>
    </div>
</template>

<style>
    @import url(./PersonalForm.css);
</style>