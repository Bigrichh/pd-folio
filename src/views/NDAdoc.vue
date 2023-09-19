<template>
    <div class="container">
        <h1 data-aos="fade-up" data-aos-duration="2500">PROJECT-DESIGN NON-DISCLOSURE AGREEMENT (NDA)</h1>
        <div data-aos="fade-up" data-aos-duration="2500" class="first-p">
            <p>
                This Non-Disclosure Agreement ("Agreement") is entered into on 21st July 2023, (the "Effective Date"),
                between:
                Richmann Addai, hereinafter referred to as the "Disclosing Party,"
                AND
                Any visitor of this portfolio website, located either in Ghana or elsewhere, hereinafter referred to as the
                "Receiving Party."
                WHEREAS, the Disclosing Party has developed certain confidential and proprietary design concepts, which
                include "Hostel House and TechEats" that it does not want to be replicated or used for any other project.The
                passkey to access the given case studies is given as '12@uthgr@nt3d34'
                NOW, THEREFORE, in consideration of the mutual promises contained herein, the Parties agree as follows:</p>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500" class="second-p">
            <ol>
                <li>
                    <p>Confidential Information</p>
                    <p>The term "Confidential Information" shall refer to the Design concept developed by the Disclosing
                        Party, including any related documentation and information provided by the Disclosing Party to the
                        Receiving Party.</p>
                </li>
                <li>
                    <p>Obligations</p>
                    <p>The unauthorized disclosure of any such Confidential Information can and will be seriously damaging
                        to the interests of the companies for which these designs were made, its clients and their
                        businesses.
                        The Receiving Party therefore accordingly undertakes that you shall not:
                    <ol class="exc">
                        <li>Divulge or disclose to another(except as authorized by the Dislosing Party in writing) in any
                            form or manner whatever, either directly or indirectly, any such confidential information;</li>
                        <li>Use for your own purpose or for any purpose other than evaluating the Disclosing party's skills
                            for
                            potential collaboration or hire. </li>
                    </ol>
                    </p>
                </li>
                <li>
                    <p>Duration of Confidentiality</p>
                    <p>The Receiving Party's obligation to maintain the confidentiality of the Confidential Information
                        shall continue indefinitely, unless otherwise agreed upon in writing by both Parties.
                    </p>
                </li>
                <li>
                    <p> Exceptions</p>
                    <p>The Receiving Party's obligations shall not apply to any information that:</p>
                    <ol class="exc">
                        <li>Was already in the public domain at the time of disclosure.</li>
                        <li>Becomes publicly known through no fault of the Receiving Party.</li>
                        <li>Is independently developed by the Receiving Party without reference to the Confidential
                            Information.
                        </li>
                    </ol>
                </li>
                <li>
                    <p>Governing Law</p>
                    <p>This Agreement shall be governed by and construed in accordance with the laws of the Republic of
                        Ghana.Any disputes arising out of or related to this Agreement shall be subject to the
                        exclusive jurisdiction of the courts of Ghana.
                    </p>
                </li>
            </ol>
        </div>

        <div data-aos="fade-up" data-aos-duration="2500" class="last-p">
            <p>IN WITNESS WHEREOF, the Parties hereto have executed this Agreement as of the Effective Date.</p>
            <p>Richmann Addai Kwesi</p>
            <p>All visiting parties who have consented to this NDA</p>
        </div>

            <button @click="goBack" data-aos="fade-up" data-aos-duration="2500">
                Proceed to access case studies
            </button>
  
    </div>
</template>


<script>
export default {
    name: 'ndadoc',
    methods: {
    goBack() {
      // Use router.go with a negative integer to go back two steps in history
      this.$router.go(-1);
    },
  },
}
</script>

<style scoped>
.container {
    width: 70%;
    margin: 0 auto;
    padding: 100px 0;
    color: rgba(6, 21, 27, 0.8);
    font-family: Red Hat Display;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
}

h1 {
    color: #353535;
    text-align: center;
    font-family: Rakkas;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

/* aggrement styles */
.first-p {
    margin: 20px;
    line-height: 120%;
}

.second-p {
    margin: 20px;
}

.second-p li {
    margin: 10px;
}

.second-p p {
    line-height: 120%;
    margin-bottom: 4px;
}

.exc {
    list-style-type: lower-roman;
    margin-left: 50px;
}

.last-p {
    margin: 40px 20px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

/* button */
button {
    display: flex;
    width: 95%;
    margin: 50px auto;
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
    transition: all 0.3s ease-in-out;
}

button:hover {
    display: flex;
    width: 95%;
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
}

a{
    text-decoration: none;
}

@media (min-width: 300px) and (max-width: 399px) {
    /* button */
button {
    display: flex;
    width: 95%;
    margin: 50px auto;
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
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    transition: all 0.3s ease-in-out;
}

button:hover {
    display: flex;
    width: 95%;
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
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
}
</style>