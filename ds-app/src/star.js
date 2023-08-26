
import './star.css';
function StarSection(){
    return(
       
        <main className="star" >
               < div className="star-content">
                <h1>YOUR EYES DESERVES BETTER</h1>
                <p>
                Introducing GOGGLES, where fashion meets function. Our exquisite range of sunglasses offers a blend of style and UV protection, ensuring you step out with confidence. Elevate your look while safeguarding your eyes from the sun's glare. Discover eyewear that's a reflection of your unique personality.
                </p>
                <div className='bm2' >
                    <button className='bm '>shop now</button>
                    <button className='bm'>category</button>
                    </div>

                    <div className="shopping">
                        <p>
                            Also Available ON 
                        </p>
                        <div >
                            <img className='brand-icons' src="/iamges/download.png" alt="amazon" />
                            <img  className='brand-icons' src="/iamges/fl.jpg" alt="flipkart" />
                        </div>

                    </div>

                </div>
               
               <div className="image">
                <img id='myimage' src="/iamges/images.jpg" alt="" />
               </div>
   
               
            </main>
            
                
    );
   
    };
    export default StarSection;
