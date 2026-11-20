function Footer(){
    return(
        <>
        <div className="bg-dark text-light py-3">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="footer d-flex justify-content-between row">
                        <div className="col row">
                        <h5 className="col">Developed by: Prasanthi.chitta</h5>
                        </div>
                        <div className="linkedin d-flex col ">
                           <a href="" target="_blank" className="text-decoration-none text-light "> <i class="fa-brands fa-square-linkedin fs-4"></i></a>
                            <h5>Linkedin</h5>
                        </div>
                        <div className="github d-flex col">
                           <a href="" target="_blank"  className="text-decoration-none text-light "> <i class="fa-brands fa-github fs-4"></i></a>
                            <h5>Github</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default Footer;