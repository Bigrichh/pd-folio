<template >

        <div class="navbar">
            <NavBarMobile v-if="mobileView" :isDark="false" :isLight="true"></NavBarMobile>
            <NavBar v-if="!mobileView" :isDark="false" :isLight="true"></NavBar>
        </div>

        <div class="container">
            <div data-aos="fade-up" data-aos-duration="2500" class="PITW-ecc">
                <div class="th-label-container">
                    <p class="th-label1">Eye Contact Vision Care</p>
                    <p class="th-label2">Opticians Health Website • September 2023</p>
                </div>
            </div>
            
            <div data-aos="fade-up" data-aos-duration="3000" class="PITW-dhs">
                <div class="th-label-container">
                    <p class="th-label1">Delexis Healthcare Solutions</p>
                    <p class="th-label2">Healthcare Consulting Website • August 2023</p>
                </div>
            </div>

            <div data-aos="fade-up" data-aos-duration="3000" class="PITW-ffw">
                <div class="th-label-container">
                    <p class="th-label1">Fountain Filtered Water</p>
                    <p class="th-label2">Water Refill Point Company Website • August 2023</p>
                </div>
            </div>

            <footer data-aos="fade" data-aos-duration="2500">
                <div class="cta">
                    <p class="cta-text">Let's work together</p>
                    <p><a class="email-link" href="mailto:richmanaddai@gmail.com">richmanaddai@gmail.com</a></p>
                </div>
                <div class="end">
                    <div class="copyright">
                        <p>&copy 2023 Built by Richmann</p>
                    </div>
                    <div class="social-links">
                        <p style="opacity: 1;">Reach me on</p>
                        <p><a target="_blank" href="https://www.instagram.com/big.richhh/">Instagram</a></p>
                        <p><a target="_blank" href="https://twitter.com/hasanirichmann">Twitter</a></p>
                        <p><a target="_blank" href="https://discordapp.com/users/935100341127626792">Discord</a></p>
                    </div>
                </div>

            </footer>
        </div>
</template>
  
  
  
  
<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import NavBarMobile from '@/components/NavBarMobile.vue'
import { Icon } from '@iconify/vue';

export default {
    name: 'Pitw',


    components: {
        NavBar, NavBarMobile, Icon,
    },


    data() {
        return {
            mobileView: true,
            showNav: false,
        };
    },

    methods: {
        handleMobileNav() {
            this.mobileView = window.innerWidth <= 768;
        }
    },
    created() {
        this.handleMobileNav();
    },

}
</script>
  
  
  
  
<style scoped>
* {
    color: #353535;
}

a {
    text-decoration: none;
}


.navbar {
    margin: 50px auto 0;
    max-width: 1290px;
}

img {
    width: 100%;
}


/* TradeHaven project styles */
.PITW-dhs {
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("@/assets/PITWdhs.jpg") no-repeat center center / cover;
    height: 660px;
    max-width: 1290px;
    margin: 50px auto;
    position: relative;
}

.PITW-ecc {
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%), url("@/assets/PITWecc.jpg") no-repeat center center / cover;
    height: 660px;
    max-width: 1290px;
    margin: 50px auto;
    position: relative;
}
.PITW-ffw {
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWffw.jpg") no-repeat center center / cover;
    height: 660px;
    max-width: 1290px;
    margin: 50px auto;
    position: relative;
}

.th-label-container {
    position: absolute;
    left: 60px;
    top: 60px;
}

.th-label1 {
    color: #fff;
    font-family: Rakkas;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.th-label2 {
    color: #fff;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

/* Footer styles */
footer {
    background: #E6E6E6;
    max-width: 100vw;
    height: 350px;
    padding-top: 58px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

.cta {
    /* margin: 0 auto; */
    width: 490px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.cta-text {
    color: #353535;
    font-family: Rakkas;
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    transition: all 0.3s ease-in-out;
}

.email-link:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    /* margin-top: -10px; */
    cursor: pointer;
}

.social-links {
    display: flex;
    justify-content: space-between;
    width: 400px;
}


.social-links p {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 0.4;
    transition: all 0.2s ease-in-out;
}

.social-links p:hover {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    opacity: 1;
    cursor: pointer;
}

.copyright {
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}

.end {
    display: flex;
    margin: 72px auto 24px;
    justify-content: space-between;
    align-items: center;
    width: 1290px;

}

a {
    text-decoration: none;
    color: #353535;
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    /* opacity: 0.4; */
}







/* MEDIA QUERIES */
/* Extra Extra Large Devices (Large Desktops and Widescreens): */
@media (min-width: 1201px) and (max-width: 1460px) {

    .navbar {
        margin: 50px auto 0;
        max-width: 1090px;
    }

    .PITW-dhs {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("@/assets/PITWdhs.jpg") no-repeat center center / cover;
        height: 660px;
        max-width: 1090px;
        margin: 50px auto;
        position: relative;
    }

    .PITW-ecc {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWecc.jpg") no-repeat center center / cover;
        height: 660px;
        max-width: 1090px;
        margin: 50px auto;
        position: relative;
    }


    .PITW-ffw {
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWffw.jpg") no-repeat center center / cover;
    height: 660px;
    max-width: 1090px;
    margin: 50px auto;
    position: relative;
}

 

    /* Footer styles */
    footer {
        background: #E6E6E6;
        max-width: 100vw;
        height: 350px;
        padding-top: 58px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .cta {
        /* margin: 0 auto; */
        width: 490px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cta-text {
        color: #353535;
        font-family: Rakkas;
        font-size: 56px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        transition: all 0.3s ease-in-out;
    }

    .email-link:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        /* margin-top: -10px; */
        cursor: pointer;
    }

    .social-links {
        display: flex;
        justify-content: space-between;
        width: 400px;
    }


    .social-links p {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.4;
        transition: all 0.2s ease-in-out;
    }

    .social-links p:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 1;
        cursor: pointer;
    }

    .copyright {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .end {
        display: flex;
        margin: 72px auto 24px;
        justify-content: space-between;
        align-items: center;
        width: 1090px;

    }

    a {
        text-decoration: none;
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        /* opacity: 0.4; */
    }

}




/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1200px) {

    .navbar {
        margin: 50px auto 0;
        max-width: 890px;
    }


    .PITW-dhs {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("@/assets/PITWdhs.jpg") no-repeat center center / cover;
        height: 660px;
        max-width: 890px;
        margin: 50px auto;
        position: relative;
    }

    .PITW-ecc {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWecc.jpg") no-repeat center center / cover;
        height: 660px;
        max-width: 890px;
        margin: 50px auto;
        position: relative;
    }
    
    .PITW-ffw {
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWffw.jpg") no-repeat center center / cover;
    height: 660px;
    max-width: 890px;
    margin: 50px auto;
    position: relative;
}
    .th-label1 {
        color: #fff;
        font-family: Rakkas;
        font-size: 36px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .th-label2 {
        color: #fff;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }


    /* Footer styles */
    footer {
        background: #E6E6E6;
        max-width: 100vw;
        height: 350px;
        padding-top: 58px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .cta {
        /* margin: 0 auto; */
        width: 490px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cta-text {
        color: #353535;
        font-family: Rakkas;
        font-size: 56px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        transition: all 0.3s ease-in-out;
    }

    .email-link:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        /* margin-top: -10px; */
        cursor: pointer;
    }

    .social-links {
        display: flex;
        justify-content: space-between;
        width: 400px;
    }


    .social-links p {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.4;
        transition: all 0.2s ease-in-out;
    }

    .social-links p:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 1;
        cursor: pointer;
    }

    .copyright {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .end {
        display: flex;
        margin: 72px auto 24px;
        justify-content: space-between;
        align-items: center;
        width: 890px;

    }

    a {
        text-decoration: none;
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        /* opacity: 0.4; */
    }


}




/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {

    .navbar {
        margin: 50px auto 0;
        max-width: 690px;
    }


    .PITW-dhs {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("@/assets/PITWdhs.jpg") no-repeat center center / cover;
        height: 560px;
        max-width: 690px;
        margin: 50px auto;
        position: relative;
    }

    .PITW-ecc {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWecc.jpg") no-repeat center center / cover;
        height: 560px;
        max-width: 690px;
        margin: 50px auto;
        position: relative;
    }

    .PITW-ffw {
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWffw.jpg") no-repeat center center / cover;
    height: 560px;
    max-width: 690px;
    margin: 50px auto;
    position: relative;
}

    .th-label-container {
        position: absolute;
        left: 40px;
        top: 40px;
    }

    .th-label1 {
        color: #fff;
        font-family: Rakkas;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .th-label2 {
        color: #fff;
        font-family: Red Hat Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    /* Footer styles */
    footer {
        background: #E6E6E6;
        max-width: 100vw;
        height: 350px;
        padding-top: 58px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .cta {
        /* margin: 0 auto; */
        width: 490px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cta-text {
        color: #353535;
        font-family: Rakkas;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        transition: all 0.3s ease-in-out;
    }

    .email-link:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        /* margin-top: -10px; */
        cursor: pointer;
    }

    .social-links {
        display: flex;
        justify-content: space-between;
        width: 400px;
    }


    .social-links p {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.4;
        transition: all 0.2s ease-in-out;
    }

    .social-links p:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 1;
        cursor: pointer;
    }

    .copyright {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .end {
        display: flex;
        margin: 72px auto 24px;
        justify-content: space-between;
        align-items: center;
        width: 690px;

    }

    a {
        text-decoration: none;
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        /* opacity: 0.4; */
    }


}



/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {

    .navbar {
        margin: 50px auto 0;
        max-width: 490px;
    }

    .PITW-dhs {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("@/assets/PITWdhs.jpg") no-repeat center center / cover;
        height: 400px;
        max-width: 490px;
        margin: 30px auto;
        position: relative;
    }

    .PITW-ecc {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWecc.jpg") no-repeat center center / cover;
        height: 400px;
        max-width: 490px;
        margin: 30px auto;
        position: relative;
    }

    .PITW-ffw {
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWffw.jpg") no-repeat center center / cover;
    height: 400px;
    max-width: 490px;
    margin: 50px auto;
    position: relative;
}
    .th-label-container {
        position: absolute;
        left: 20px;
        top: 20px;
    }

    .th-label1 {
        color: #fff;
        font-family: Rakkas;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .th-label2 {
        color: #fff;
        font-family: Red Hat Display;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    /* Footer styles */
    footer {
        background: #E6E6E6;
        max-width: 100vw;
        height: 350px;
        padding-top: 58px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .cta {
        /* margin: 0 auto; */
        width: 490px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cta-text {
        color: #353535;
        font-family: Rakkas;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        transition: all 0.3s ease-in-out;
    }

    .email-link:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        /* margin-top: -10px; */
        cursor: pointer;
    }

    .social-links {
        display: flex;
        justify-content: space-between;
        width: 400px;
    }


    .social-links p {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.4;
        transition: all 0.2s ease-in-out;
    }

    .social-links p:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 1;
        cursor: pointer;
    }

    .copyright {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .end {
        display: flex;
        flex-direction: column;
        margin: 72px auto 24px;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        width: 490px;

    }

    a {
        text-decoration: none;
        color: #353535;
        font-family: Red Hat Display;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        /* opacity: 0.4; */
    }


}


/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {

    .navbar {
        margin: 50px auto 0;
        max-width: 470px;
    }

    .PITW-dhs {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("@/assets/PITWdhs.jpg") no-repeat center center / cover;
        height: 400px;
        max-width: 470px;
        margin: 30px auto;
        position: relative;
    }

    .PITW-ecc {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWecc.jpg") no-repeat center center / cover;
        height: 400px;
        max-width: 470px;
        margin: 30px auto;
        position: relative;
    }

    .PITW-ffw {
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWffw.jpg") no-repeat center center / cover;
    height: 400px;
    max-width: 470px;
    margin: 50px auto;
    position: relative;
}

    .th-label-container {
        position: absolute;
        left: 20px;
        top: 20px;
    }

    .th-label1 {
        color: #fff;
        font-family: Rakkas;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .th-label2 {
        color: #fff;
        font-family: Red Hat Display;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    /* Footer styles */
    footer {
        background: #E6E6E6;
        max-width: 100vw;
        height: 300px;
        padding-top: 58px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .cta {
        /* margin: 0 auto; */
        width: 470px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cta-text {
        color: #353535;
        font-family: Rakkas;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        transition: all 0.3s ease-in-out;
    }

    .email-link:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        /* margin-top: -10px; */
        cursor: pointer;
    }

    .social-links {
        display: flex;
        justify-content: space-between;
        width: 400px;
    }


    .social-links p {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.4;
        transition: all 0.2s ease-in-out;
    }

    .social-links p:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 1;
        cursor: pointer;
    }

    .copyright {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .end {
        display: flex;
        flex-direction: column;
        margin: 72px auto 24px;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        width: 470px;

    }

    a {
        text-decoration: none;
        color: #353535;
        font-family: Red Hat Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        /* opacity: 0.4; */
    }

}


/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {

    .navbar {
        margin: 50px auto 0;
        max-width: 380px;
    }

    .PITW-dhs {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("@/assets/PITWdhs.jpg") no-repeat center center / cover;
        height: 300px;
        max-width: 380px;
        margin: 30px auto;
        position: relative;
    }

    .PITW-ecc {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWecc.jpg") no-repeat center center / cover;
        height: 300px;
        max-width: 380px;
        margin: 30px auto;
        position: relative;
    }

    .PITW-ffw {
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWffw.jpg") no-repeat center center / cover;
    height: 300px;
    max-width: 380px;
    margin: 50px auto;
    position: relative;
}

    .th-label-container {
        position: absolute;
        left: 20px;
        top: 20px;
    }

    .th-label1 {
        color: #fff;
        font-family: Rakkas;
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .th-label2 {
        color: #fff;
        font-family: Red Hat Display;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }


    /* Footer Styles */
    footer {
        background: #E6E6E6;
        max-width: 100vw;
        height: 300px;
        padding-top: 58px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .cta {
        /* margin: 0 auto; */
        width: 470px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cta-text {
        color: #353535;
        font-family: Rakkas;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        transition: all 0.3s ease-in-out;
    }

    .email-link:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        /* margin-top: -10px; */
        cursor: pointer;
    }

    .social-links {
        display: flex;
        justify-content: space-between;
        width: 380px;
    }


    .social-links p {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.4;
        transition: all 0.2s ease-in-out;
    }

    .social-links p:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 1;
        cursor: pointer;
    }

    .copyright {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .end {
        display: flex;
        flex-direction: column;
        margin: 12px auto 24px;
        justify-content: space-between;
        align-items: center;
        gap: 16px;
        width: 380px;

    }

    a {
        text-decoration: none;
        color: #353535;
        font-family: Red Hat Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        /* opacity: 0.4; */
    }

}



/*Extra Small Devices (Phones) */
@media (max-width: 399px) {

    .navbar {
        margin: 50px auto 0;
        max-width: 300px;
    }



    .PITW-dhs {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.50) 100%), url("@/assets/PITWdhs.jpg") no-repeat center center / cover;
        height: 240px;
        max-width: 300px;
        margin: 30px auto;
        position: relative;
    }

    .PITW-ecc {
        border-radius: 20px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWecc.jpg") no-repeat center center / cover;
        height: 240px;
        max-width: 300px;
        margin: 30px auto;
        position: relative;
    }

    .PITW-ffw {
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url("@/assets/PITWffw.jpg") no-repeat center center / cover;
    height: 240px;
    max-width: 300px;
    margin: 50px auto;
    position: relative;
}

    .th-label-container {
        position: absolute;
        left: 20px;
        top: 20px;
    }

    .th-label1 {
        color: #fff;
        font-family: Rakkas;
        font-size: 18px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .th-label2 {
        color: #fff;
        font-family: Red Hat Display;
        font-size: 10px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    /* Footer styles */
    footer {
        background: #E6E6E6;
        max-width: 100vw;
        height: 250px;
        padding-top: 58px;
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .cta {
        /* margin: 0 auto; */
        width: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cta-text {
        color: #353535;
        font-family: Rakkas;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        transition: all 0.3s ease-in-out;
    }

    .email-link:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        /* margin-top: -10px; */
        cursor: pointer;
    }

    .social-links {
        display: flex;
        justify-content: space-between;
        width: 250px;
    }


    .social-links p {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 0.4;
        transition: all 0.2s ease-in-out;
    }

    .social-links p:hover {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        opacity: 1;
        cursor: pointer;
    }

    .copyright {
        color: #353535;
        font-family: Red Hat Display;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
    }

    .end {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 52px auto 24px;
        justify-content: space-between;
        align-items: center;
        width: 300px;

    }

    a {
        text-decoration: none;
        color: #353535;
        font-family: Red Hat Display;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
        /* opacity: 0.4; */
    }


}
</style>
  
  