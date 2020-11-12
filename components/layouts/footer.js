const Footer = () => {
    
    const currentYear = new Date().getFullYear();

    return (
        <footer class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer__copyright__text">
                            <p>Copyright &copy; {currentYear == '2020' ? currentYear : '2020 - ' + currentYear}  All rights reserved | This webapp is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://studio97.be" target="_blank">Studio 97</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
  
export default Footer;