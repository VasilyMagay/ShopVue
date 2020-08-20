Vue.component('my_footer', {
    data() {
        return {}
    },
    methods: {},
    mounted() {},
    template: `
    <div class="my_footer">
        <footer class="bottom">
            <div class="container">
                <div class="footer padding-site">
                    <section class="footer-info">
                        <div class="contact">
                            <h2 class="footer-h2">Contact&nbsp;Us</h2>
                            <p class="contact-text">132A Bridge Road Richmond VIC&nbsp;Australia.</p>
                            <br>
                            <p class="contact-text">Talk to&nbsp;us on&nbsp;1300&nbsp;132</p>
                            <p class="contact-text">info@interior.com</p>
                        </div>
                        <div class="useful">
                            <h2 class="footer-h2">Useful Information</h2>
                            <div class="useful-cols">
                                <div class="useful-col">
                                    <a href="#" class="useful-link">Sales terms</a>
                                    <a href="#" class="useful-link">Customer care</a>
                                    <a href="#" class="useful-link">Delivery</a>
                                </div>
                                <div class="useful-col">
                                    <a href="#" class="useful-link">Architect accounts</a>
                                    <a href="#" class="useful-link">Careers</a>
                                    <a href="#" class="useful-link">Exchanges &amp;&nbsp;returns</a>
                                </div>
                            </div>
                        </div>
                        <div class="stayintouch">
                            <h2 class="footer-h2">Let&rsquo;s Stay in&nbsp;Touch!</h2>
                            <p class="stay-text">Suscribe to&nbsp;know about our latest news, products and special offers just for suscribers.</p>
                            <div class="email-box">
                                <input class="email" type="email" placeholder="your email address">
                                <a href="#" class="email-link"><img src="img/airplane.jpg" alt="" class="email-img"></a>
                            </div>
                        </div>
                    </section>
                    <section class="copyright">
                        <div class="hidden">
                            <h2>Copyright</h2>
                        </div>
                        <div class="copy-col">
                           <p class="copyright-text">&copy;&nbsp;Copyright&nbsp;&mdash; INTERIOR 2016. All Rights Reserved.</p>
                        </div>
                        <div class="copy-col">
                           <a href="#" class="copyr-link"><i class="fab fa-facebook-f copyr-img"></i></a>
                           <a href="#" class="copyr-link"><i class="fab fa-twitter copyr-img"></i></a>
                           <a href="#" class="copyr-link"><i class="fab fa-google-plus-g copyr-img"></i></a>
                           <a href="#" class="copyr-link"><i class="fab fa-pinterest-p copyr-img"></i></a>
                        </div>
                        <div class="copy-col">
                            <a href="#" class="terms-link">Terms &amp;&nbsp;Conditions</a>
                            &nbsp;/&nbsp;<a href="#" class="terms-link">Privacy policy &amp;&nbsp;Cookies</a>
                        </div>
                    </section>
                    <section>
                        <div class="hidden">
                            <h2>Referens</h2>
                        </div>
                        <p>
                            <a href="https://jigsaw.w3.org/css-validator/check/referer">
                            <img style="border:0;width:88px;height:31px" src="https://jigsaw.w3.org/css-validator/images/vcss-blue" alt="Правильный CSS!">
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </footer>
    </div>
    `
})