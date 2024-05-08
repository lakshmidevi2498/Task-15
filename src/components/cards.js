const Cards=()=> {
    return (

        <>
           
            <h2 class="text-center text-white mt-4 mb-4"><span className='bg-primary px-3 mb-5'>RECENT CAUSES</span></h2>
  <div className="container">
       <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
            <div class="col  text-center mb-3">
                <div class="card cards">
                <img src="./assests/images/imgc1.jpg" class="card-img-top border border-primary rounded-circle w-50 m-auto mt-3" alt="..." max-width='100%' height='auto'/>
                <div class="card-body">
                    <h5 class="card-title">CONNECTING THE PEOPLE</h5>
                    <p class="card-text">he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English..</p>
                    <button className='btn btn-primary px-5'>Donate</button>
                </div>
                </div>
            </div>
            <div class="col text-center mb-3">
                <div class="card cards">
                <img src="./assests/images/imgc2.jpg" class="card-img-top border border-primary rounded-circle w-50 m-auto mt-3" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">CONNECTING THE PEOPLE</h5>
                    <p class="card-text">he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English..</p>
                    <button className='btn btn-primary px-5'>Donate</button>
                </div>
                </div>
            </div>
            <div class="col text-center mb-3">
                <div class="card cards">
                <img src="./assests/images/imgc3.jpg" class="card-img-top  border border-primary rounded-circle w-50 m-auto mt-3" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">CONNECTING THE PEOPLE</h5>
                    <p class="card-text">he point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English..</p>
                    <button className='btn btn-primary px-5'>Donate</button>
                </div>
                </div>
            </div>
            </div>
     </div>

        </>

    );
}
export default Cards;