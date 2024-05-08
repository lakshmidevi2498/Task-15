const Footer=()=>
{
    return(
        <>
      <div className="container-fluid bg-dark text-light mt-4 d-flex justify-content-evenly p-2" > 
                <div id="top" class="d-block d-sm-flex container" >
                    <div className="div1 container" ><h5> <span className="text-warning">Customer</span></h5>
                   
                        <li>contact us </li>
                        <li>About us </li>
                        <li>Company </li>
                        <li>Resources</li>
                        <li>Showcase </li>
                    
                    </div>
                    <div class="div2 container" >
                    <h5><span className="text-warning">Guides</span></h5>
                   
                        <li>Widgekit </li>
                        <li>Support </li>
                        <li> Helpcenter</li> 
                        <li >Privacy and policy </li>
                        <li> Services</li>
                    
                    </div>
                    <div class="div3 container justify-content-center" >
                    <h5><span className="text-warning">GROUP COMPINES</span></h5>
                      
                        <li>myntra</li>
                        <li>Cleartrip</li>
                        <li>shopsy</li>
                        <li>Sitemap</li>
                    
                    </div>
                    <div class='div4  align-items-center text-center container'>              
                    <h5 className="text-warning">Let be friends</h5>
                    <i className="fa-brands fa-square-facebook m-2 fs-3 text-primary"></i>
                    <i className="fa-brands fa-square-twitter m-2 fs-3 text-info"></i>
                    <i className="fa-brands fa-square-instagram m-2 fs-3 text-danger"></i>
                    <i className="fa-brands fa-linkedin m-2 fs-3 text-primary"></i> <br/>      
                    <div class="input-group ">
                                <input type="text" class="form-control "placeholder="@search"/>
                                <button class="btn btn-warning" id="button">Search</button>
                        </div>

                </div> 
             </div>
     
     
               

    </div>
   
 
        </>
    )
}
export default Footer;