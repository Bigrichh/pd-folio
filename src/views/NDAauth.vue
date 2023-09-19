<template>
    <div id="container">
        <form>
            <label class="title">This case study is protected by an NDA. Enter password to gain access</label>
            <input v-model="password" class="password" required type="password" placeholder="Enter password" data-lpignore="true" autocomplete="'new-password'">
            <div class="checkbox-container">
                <input v-model="checked" class="checkbox" required type="checkbox">
                <label class="checkbox-label">I have read NDA and agree to its terms and conditions? <router-link :to="{name: 'ndaauthndadoc'}"><span class="nda">Read Non-Disclosure Agreement</span></router-link></label>
            </div>
            <button @click="checkPassword" :disabled="!checked">Confirm</button>
        </form>
    </div>
</template>

<script>
import emailjs from 'emailjs-com'
export default {
    name: 'NDAauth',
    data() {
        return {
            password:'',
            checked: false, // Initialize the checkbox state
        }
    },
    methods: {
        checkPassword(){
            const redirectRoute = this.$route.meta.redirect;

            // Check the entered password and redirect accordingly
            if(this.password==='12@uthgr@nt3d34' && this.checked) {
                this.sendEmailNotification();
                // alert('Redirecting.....')
                this.$router.push({name:redirectRoute});
            }else{
                alert('Please check the box and enter the correct password to proceed.')
            }
        },
        sendEmailNotification(){
            const userEmail ='richmanaddai@gmail.com';
            const subject='Page Access Notification';
            const message=`The page at route "${this.$route.path}" was accessed.`;

            emailjs
            .send('service_alcq53r','template_eb3f1ae',{
                to_email:userEmail,
                subject:subject,
                message:message,
            },'WQPOe0AX2eUJhAajP')
            .then((response)=>{
                console.log('Email sent:',response);
            })
            .catch((error)=>{
                console.error('Email error:',error);
            })
        }
    },
}
</script>

<style scoped>
/* Surrounding div container */
#container {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}


/* form */
form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 60%;
    height: 365px;
}

/* Labels */
.title {
    color: #353535;
    text-align: center;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    width: 70%;
}


.checkbox-label {
    color: rgba(6, 21, 27, 0.8);
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
}

.nda {
    text-decoration: underline;
    font-weight: 900;
}

/* inputs */
.password {
    display: flex;
    width: 70%;
    padding: 20px 10px;
    align-items: center;
    gap: 10px;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    border-style: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.50);
    opacity: 0.5;
}

.checkbox-container {
    display: flex;
    /* align-self: start; */
    align-items: center;
    gap: 16px;
    width: 70%;
    padding-left: 8px;
}

.checkbox {
    width: 20px;
    height: 20px;
}



/* button */
button {
    display: flex;
    width: 70%;
    height: 73px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border-style: none;
    background: #353535;
    backdrop-filter: blur(25px);
    color: #ECEEED;
    font-family: Red Hat Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: all 0.2s ease-in-out;
}

button:hover {
    display: flex;
    width: 70%;
    height: 73px;
    padding: 10px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-style: none;
    border-radius: 12px;
    background: #ECEEED;
    backdrop-filter: blur(25px);
    color: #353535;
    font-family: Red Hat Display;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: all 0.2s ease-in-out;
}

/* routerlink styles */
a{
    text-decoration: none;
    color: rgba(6, 21, 27, 0.8);
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 900;
    line-height: 100%;
}

a:hover{
    text-decoration: none;
    color: black;
    font-family: Red Hat Display;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
}


@media (min-width: 577px) and (max-width: 768px) {
    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 90%;
    height: 365px;
}
}

@media (min-width: 480px) and (max-width: 576px) {
    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 90%;
    height: 365px;
}
}

@media (min-width: 400px) and (max-width: 479px) {
    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    height: 365px;
}
}

@media (min-width: 300px) and (max-width: 399px) {
    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
    width: 100%;
    height: 365px;
}
}
</style>