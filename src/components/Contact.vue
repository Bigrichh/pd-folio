<template>
    <div :class="{ 'contact-container-hidden': hidden, 'contact-container-visible': contactClicked }">
        <!-- <div :class="getClass"> -->

        <div class="contact-container-nav">
            <div class="logo">
                <p>RICHMANN</p>
            </div>
            <div class="icon" @click="toggleHidden">
                <Icon class="iconn" icon="mingcute:close-fill" color="#353535" width="40" />
            </div>

        </div>

        <div class="cta">
            <p class="cta-label">Let’s work together</p>
            <p><a class="email-link" href="mailto:richmanaddai@gmail.com">richmanaddai@gmail.com</a></p>
        </div>
    </div>
</template>


<script>
import { Icon } from '@iconify/vue';



export default {
    name: 'Contact',
    components: { Icon, },
    props: {
        contactClicked: false, // Prop received from parent
        hidden: true,
    },

    methods: {
        toggleHidden() {
            this.$emit('updateProps');
        }
    },
}

</script>


<style scoped>
/* CONTAINER COMPONENT ACTIVE */
.contact-container-visible {
    width: 100%;
    height: 100%;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 1;
    position: fixed;
    transition: all 0.35s ease-in-out;
}

.contact-container-visible .contact-container-nav {
    display: flex;
    max-width: 1290px;
    justify-content: space-between;
    margin: 64px auto;
}

.contact-container-visible .logo {
    font-family: 'Rakkas', cursive;
    color: #353535;
    font-size: 36px;
    font-style: normal;
    line-height: normal;
}

.contact-container-visible .cta {
    margin: 12% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-container-visible .cta-label {
    color: #353535;
    font-family: Rakkas;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.contact-container-visible .email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    margin-top: -10px;
}



/* CONTAINER COMPONENT HIDDEN */
.contact-container-hidden {
    visibility: hidden;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #fff;
    opacity: 0;
    pointer-events: none;
    transition: all 0.35s ease-in-out;
}

.contact-container-hidden .contact-container-nav {
    display: flex;
    max-width: 1290px;
    justify-content: space-between;
    margin: 64px auto;
}

.contact-container-hidden .logo {
    font-family: 'Rakkas', cursive;
    color: #353535;
    font-size: 36px;
    font-style: normal;
    line-height: normal;
}

.contact-container-hidden .cta {
    margin: 12% 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.contact-container-hidden .cta-label {
    color: #353535;
    font-family: Rakkas;
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.contact-container-hidden .email-link {
    color: rgba(53, 53, 53, 0.40);
    font-family: Red Hat Display;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
    margin-top: -10px;
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
    margin-top: -10px;
    cursor: pointer;
}

.icon:hover {
    cursor: pointer;
    opacity: 0.5;
}

















/* MEDIA QUERIES */

/* **Extra Large Devices (Large Laptops and Desktops):** */
@media (min-width: 993px) and (max-width: 1300px) {
    .contact-container-visible {
        width: 100%;
        height: 100%;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 1;
        position: fixed;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-visible .contact-container-nav {
        display: flex;
        max-width: 890px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-visible .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 32px;
        font-style: normal;
        line-height: normal;
    }

    .contact-container-visible .cta {
        margin: 16% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-visible .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-visible .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
    }



    /* CONTAINER COMPONENT HIDDEN */
    .contact-container-hidden {
        visibility: hidden;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 0;
        pointer-events: none;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-hidden .contact-container-nav {
        display: flex;
        max-width: 890px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-hidden .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 32px;
        font-style: normal;
        line-height: normal;
    }

    .contact-container-hidden .cta {
        margin: 16% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-hidden .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-hidden .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
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
        margin-top: -10px;
        cursor: pointer;
    }




}




/*Large Devices (Desktops and Small Laptops): */
@media (min-width: 769px) and (max-width: 992px) {
    .contact-container-visible {
        width: 100%;
        height: 100%;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 1;
        position: fixed;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-visible .contact-container-nav {
        display: flex;
        max-width: 690px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-visible .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
    }

    .contact-container-visible .cta {
        margin: 16% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-visible .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-visible .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
    }



    /* CONTAINER COMPONENT HIDDEN */
    .contact-container-hidden {
        visibility: hidden;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 0;
        pointer-events: none;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-hidden .contact-container-nav {
        display: flex;
        max-width: 690px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-hidden .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
    }

    .contact-container-hidden .cta {
        margin: 16% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-hidden .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 48px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-hidden .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
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
        margin-top: -10px;
        cursor: pointer;
    }

}



/*Medium Devices (Tablets): */
@media (min-width: 577px) and (max-width: 768px) {
    .contact-container-visible {
        width: 100%;
        height: 100%;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 1;
        position: fixed;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-visible .contact-container-nav {
        display: flex;
        max-width: 490px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-visible .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
    }

    .contact-container-visible .icon .iconn{
        width: 36px;
    }

    .contact-container-visible .cta {
        margin: 28% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-visible .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-visible .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
    }



    /* CONTAINER COMPONENT HIDDEN */
    .contact-container-hidden {
        visibility: hidden;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 0;
        pointer-events: none;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-hidden .contact-container-nav {
        display: flex;
        max-width: 490px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-hidden .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
    }

    .contact-container-hidden .icon .iconn{
        width: 36px;
    }


    .contact-container-hidden .cta {
        margin: 28% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-hidden .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-hidden .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
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
        margin-top: -10px;
        cursor: pointer;
    }
}


/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 480px) and (max-width: 576px) {
    .contact-container-visible {
        width: 100%;
        height: 100%;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 1;
        position: fixed;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-visible .contact-container-nav {
        display: flex;
        max-width: 470px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-visible .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
        visibility: hidden;
    }

    .contact-container-visible .icon .iconn{
        width: 36px;
    }

    .contact-container-visible .cta {
        margin: 28% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-visible .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-visible .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
    }



    /* CONTAINER COMPONENT HIDDEN */
    .contact-container-hidden {
        visibility: hidden;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 0;
        pointer-events: none;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-hidden .contact-container-nav {
        display: flex;
        max-width: 490px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-hidden .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
        visibility: hidden;
    }

    .contact-container-hidden .icon .iconn{
        width: 36px;
    }


    .contact-container-hidden .cta {
        margin: 28% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-hidden .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-hidden .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
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
        margin-top: -10px;
        cursor: pointer;
    }
}


/*Small Devices (Portrait Tablets, Phones in Landscape): */
@media (min-width: 400px) and (max-width: 479px) {
    .contact-container-visible {
        width: 100%;
        height: 100%;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 1;
        position: fixed;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-visible .contact-container-nav {
        display: flex;
        max-width: 400px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-visible .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
        visibility: hidden;
    }

    .contact-container-visible .icon .iconn{
        width: 36px;
    }

    .contact-container-visible .cta {
        margin: 28% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-visible .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-visible .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
    }



    /* CONTAINER COMPONENT HIDDEN */
    .contact-container-hidden {
        visibility: hidden;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 0;
        pointer-events: none;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-hidden .contact-container-nav {
        display: flex;
        max-width: 400px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-hidden .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
        visibility: hidden;
    }

    .contact-container-hidden .icon .iconn{
        width: 36px;
    }


    .contact-container-hidden .cta {
        margin: 28% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-hidden .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 40px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-hidden .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 28px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
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
        margin-top: -10px;
        cursor: pointer;
    }
}



/*Extra Small Devices (Phones) */
@media (max-width: 399px) {
    .contact-container-visible {
        width: 100%;
        height: 100%;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 1;
        position: fixed;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-visible .contact-container-nav {
        display: flex;
        max-width: 300px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-visible .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
        visibility: hidden;
    }

    .contact-container-visible .icon .iconn{
        width: 36px;
    }

    .contact-container-visible .cta {
        margin: 40% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-visible .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-visible .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
    }



    /* CONTAINER COMPONENT HIDDEN */
    .contact-container-hidden {
        visibility: hidden;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 10;
        position: absolute;
        top: 0;
        left: 0;
        background-color: #fff;
        opacity: 0;
        pointer-events: none;
        transition: all 0.35s ease-in-out;
    }

    .contact-container-hidden .contact-container-nav {
        display: flex;
        max-width: 400px;
        justify-content: space-between;
        margin: 64px auto;
    }

    .contact-container-hidden .logo {
        font-family: 'Rakkas', cursive;
        color: #353535;
        font-size: 28px;
        font-style: normal;
        line-height: normal;
        visibility: hidden;
    }

    .contact-container-hidden .icon .iconn{
        width: 36px;
    }


    .contact-container-hidden .cta {
        margin: 40% 0;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .contact-container-hidden .cta-label {
        color: #353535;
        font-family: Rakkas;
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    .contact-container-hidden .email-link {
        color: rgba(53, 53, 53, 0.40);
        font-family: Red Hat Display;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        text-decoration-line: underline;
        margin-top: -10px;
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
        margin-top: -10px;
        cursor: pointer;
    }
}
</style>