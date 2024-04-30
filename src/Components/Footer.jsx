import React from "react";

const Footer = () => {


    return (
        <footer className="footer footer-static footer-light" style={{ position: 'sticky',color:'#6e6b7b',marginLeft:'auto',marginRight:'auto',maxWidth:'1230px',fontSize:'0.9rem',borderRadius:'1rem'}}>
            <div className="rower" style={{display:'flex',flexWrap:'wrap'}}>
                <div className="bookmark-wrapper d-flex align-items-center mr-1" style={{width:'auto'}}>
                    <img style={{ maxWidth: '150px', maxHeight: '70px' }} src="/logigates_new_blue.png" alt="Logigates Logo" />
                </div>
                <div className="col-md-3 d-flex align-items-center" style={{marginTop:'1.7rem',width:'auto'}}>
                    Powered by Logigates Technologies.
                </div>
                <div className="col-md-5 d-flex align-items-center" style={{marginTop:'1.7rem',width:'auto' }}>
                    <strong>
                        Copyrights © 2023-2024 <a href="https://mail.google.com/mail" style={{textDecoration:'none',color:'#7367f0',background:'transparent'}}>info@logigates.com</a>
                    </strong>
                    All Rights Reserved.
                </div>
                <div className="col-md-3 d-flex align-items-center" style={{marginTop:'1.7rem'}}>
                    <div className="float-right d-none d-sm-inline-block"> 
                        <b>Version</b> 4.0.0
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
