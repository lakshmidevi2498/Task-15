
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';


const Navbar=()=> {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid">
                    <div className=''>
                        <div className="h-100%" id="navv">
                            <a className="navbar-brand " href="#"><img
                                src="./assests/images/logo.webp" width="200px" height="100%"
                                className=" "id="image"
                                alt="..."
                            /></a>
                        </div>

                    </div>
                    <div className=" justify-content-center m-auto h-100%">
                        <div className=" container border rounded-pill p-2  bg-primary text-light" id ="address">
                            <div className="d-flex justify-content-between ">
                                <div > <h6 className="text-center align-items-center"><i class="fa-solid fa-location-dot"></i>1'st floor vplaza,chennai,Tamilnadu,India &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6></div>
                                <div className=""><h6 class="text-center align-items-center">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <i class="fa-regular fa-envelope"> </i>support@smarteyeapps.com &nbsp;<i class="fa-solid fa-phone-volume"></i>+918694583875</h6></div>
                            </div>
                        </div>
                        
                      </div>       
                 
                    <div className='icons d-flex'> 
                            <i className="fa-solid fa-magnifying-glass  fs-3 text-primary icon"></i>
                            <i className="fa-solid fa-cart-shopping  fs-3 text-primary icon"></i>
                            <i class="fa-regular fa-user  fs-3 text-primary icon"></i>                          
                    </div>
                </div>
            </nav>

        </>

    );
}


export default Navbar;
