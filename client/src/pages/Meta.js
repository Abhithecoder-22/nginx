import React,{useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import img1 from '../Components/images/back.jpg';
// import './App.css'
import Slide from '../Components/Home/Slide';
import { getProducts as listProducts } from '../redux/actions/productActions';
import { useSelector,useDispatch } from 'react-redux';
import MidSlide from '../Components/Home/MidSlide'


const Services = () => {
  const getProducts = useSelector(state => state.getProducts);
  const { products, error } = getProducts;

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(listProducts())
  }, [dispatch]);
  return (
    <div>
       <header>
        <nav>
          {/* <div class="logo">
                    <a href="/">
                        <img src="" alt="IdeNavLinkl Softwares" />
                    </a>
                </div> */}
          <ul>
            <li>
              <a href="tel:123-456-7890">CLICK TO CALL</a>
            </li>
            <li>|</li>
            <li>
              <NavLink to="/services">Call For Any Concern</NavLink>
            </li>
          </ul>
          <ul className="middle">
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>|</li>
            <li>
              <NavLink to="/services">Portfolio</NavLink>
            </li>
            <li>|</li>
            <li>
              <NavLink to="/services">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <div className="middle-header">
        <h2>RV Technology</h2>
        <div className="search-tool">
          <form action="" >
            <input type="search" placeholder="Search for tools, Products" style={{ height: 40, width: 300, margin: 10, padding: 10 }} />
            <button className="search-btn" >Search</button>
          </form>
        </div>
           <div className="account">
          <NavLink className="nav-item" to="/loginform"><i class="fa-solid fa-user"></i>
          <h3>Login</h3></NavLink> 
           </div>
        




        </div>

        <section className="header-main">

<ul>
  <li>
    
    <div className="drop-btn"><NavLink activeClassName="active_class" className='nav-item' aria-current="page" to='/'>Home</NavLink> 
      {/* <div className="content">
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
      </div> */}
    </div>
    
    {/* <a href="/">Home</a> */}
  </li>

  <li>
    <div className="drop-btn"><NavLink className='nav-item' to='/services'>Premium Tools</NavLink> 
      <div className="content">
        <a href="/ai">Artificial Intelligence</a>
        <a href="/chatmeta">Chat for Facebook</a>
        <a href="/cloudwhatsapp">Cloud Whatsapp</a>
        <a href="/cloudwhatsapp">Cloud Whatsapp</a>
      </div>
    </div>
    {/* <a href="/">About</a> */}
  </li>


  <li>
    <div className="drop-btn"><NavLink className='nav-item' to='/services'>Advertising</NavLink> 
      <div className="content">
        <a href="/customsoftware">Custom Software Developement</a>
        <a href="/software">Software Developement</a>
        <a href="/ddd">Daily Domain Database</a>
        <a href="/ddd">Daily Domain Database</a>
        
      </div>
    </div>
    {/* <a href="/">Services</a> */}
  </li>

  <li>
    <div className="drop-btn"><NavLink className='nav-item' to='/services'>Services</NavLink> 
      <div className="content">
        <a href="/logodesign">Logo Designning & Branding</a>
        <a href="/googleads">Advertising on Google</a>
        <a href="/searchengine">Search Engine Optimisation</a>
        <a href="/webdesign">Web Designning & Developement</a>
      </div>
    </div>
    {/* <a href="/">Products</a> */}
  </li>


  <li>
    <div className="drop-btn"><NavLink className='nav-item' to='/services'>Web Hosting</NavLink> 
      {/* <div className="content">
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
      </div> */}
    </div>
    {/* <a href="/">Premium Tools</a> */}
  </li>
  <li>
    <div className="drop-btn"><NavLink className='nav-item' to='/services'>My Products</NavLink> 
      {/* <div className="content">
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
        <a href="/">Link 1</a>
      </div> */}
    </div>
    {/* <a href="/">Web Hosting</a> */}
  </li>
</ul>

</section>
      <div className="heading">
        <img src={img1} alt=""  />
        <h1>Facebook & Instagram Marketing</h1>
      </div>
      <section className="consultation">
            <h1 className="texts underline">Free Consultation</h1>
            <div className="consult-content">

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, vitae et. Iure assumenda, maiores culpa itaque maxime facere placeat modi mollitia dicta deserunt hic provident aliquid explicabo totam in fuga eaque velit, aut corrupti debitis ipsa <i style={{color:'blue',textTransform:'capitalize',fontWeight:'bold'}}>veritatis!</i>  Esse ratione Suscipit, aperiam eligendi deleniti nihil nemo adipisci cum in cumque voluptatum quos praesentium illum, eum rem. Vitae optio non omnis dolores quis ad labore, placeat deserunt nam nulla in deleniti.  laborum, minus magnam eius exercitationem excepturi aspernatur deleniti dolorem nulla consequuntur? Ipsa minima dicta quis, facilis beatae quam! Facere possimus inventore pariatur et minus dolore magni.
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatem praesentium unde voluptates. Itaque beatae soluta laudantium repellendus obcaecati quae <b  style={{color:'red',}}>omnis consequatur</b>  expedita ab consequuntur, nostrum, praesentium ex quasi voluptatibus, dolorum doloremque eius. Ipsum sapiente aperiam in et quasi ducimus tempore at harum, doloribus non corrupti ad vero consequuntur, itaque mollitia obcaecati atque eius provident ratione. Quia, iste vitae!               
                 </p>
                 

            <div className="form-proposal" style={{width:'100%',marginTop:'-40px'}}>

            <MidSlide/>
            </div>
               
              
              {/* <form  className="request">

              <input type="text" id="text" placeholder="Name" style={{ height: 40, margin: 10, padding: 10,width:350 }} />
                <input type="text" id="text" placeholder="Company Name" style={{ height: 40, margin: 10, padding: 10 ,width:350}} />
                <input type="text" id="text" placeholder="Email" style={{ height: 40, margin: 10, padding: 10 ,width:350}} />
                <input type="text" id="text" placeholder="Contact" style={{ height: 40, margin: 10, padding: 10 ,width:350}} />
                <input type="text" id="text" placeholder="City" style={{ height: 40, margin: 10, padding: 10,width:350 }} />
                <input type="text" id="text" placeholder="City" style={{ height: 40, margin: 10, padding: 10,width:350 }} />
                <button className="btn">Request Demo</button>
              </form> */}
            </div>
          </section>

<section className="product" style={{marginTop:'2%',textAlign:'center',padding:'30px 120px',gap:'20px',margin:'20px 20px'}}>

<Slide 

data ={products}
title='Related Products'
timer={false} 
multi={true}
/>

</section>
      <footer>
            {/* footer main  */}
            <section class="ft-main">
              <div class="ft-main-item">
                <h2 class="ft-title">About</h2>
                <ul>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">Portfolios</a></li>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="/">Customers</a></li>
                  <li><a href="/">Careers</a></li>
                </ul>
              </div>
              <div class="ft-main-item">
                <h2 class="ft-title">About</h2>
                <ul>
                  <li><a href="/">Services</a></li>
                  <li><a href="/">Portfolios</a></li>
                  <li><a href="/">Pricing</a></li>
                  <li><a href="/">Customers</a></li>
                  <li><a href="/">Careers</a></li>
                </ul>
              </div>

              <div class="ft-main-item">
                <h2 class="ft-title">Contact</h2>
                <ul>
                  <li><a href="/">Help</a></li>
                  <li><a href="/">Sales</a></li>
                  <li><a href="/">Advertise</a></li>
                  <li><a href="/">Advertise</a></li>
                  <li><a href="/">Advertise</a></li>
                </ul>
              </div>
              <div class="ft-main-item">
                <h2 class="ft-title">Stay Updated</h2>
                <p>Subscribe to our newslatter to get our latest news.</p>
                <form>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter email address"
                  />
                  <button className="btn" type="submit" value="Subscribe" >SUBSCRIBE</button>
                </form>
              </div>
            </section>
            {/* Footer Social  */}
            <section class="ft-social">
              <ul class="ft-social-list">
                <li>
                  <a href="/"><i class="fab fa-facebook"></i></a>
                </li>
                {/* <li>
            <a href="/"><i class="fab fa-Instagram"></i></a>
          </li>
          <li>
            <a href="/"><i class="fab fa-Linkdin"></i></a>
          </li>
          <li>
            <a href="/"><i class="fab fa-Github"></i></a>
          </li> */}
                <li>
                  <a href="/"><i class="fab fa-youtube"></i></a>
                </li>
                <li>
                  <a href="/"><i class="fa-brands fa-square-instagram"></i></a>
                </li>
                <li>
                  <a href="/"><i class="fa-brands fa-github"></i></a>
                </li>
              </ul>
            </section>
            {/* Footer Main */}
            <section class="ft-legal">
              <ul class="ft-legal-list">
                <li><a href="/">Term &amp; Condition</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">&copy; 2019 Copyright Nowrap Inc.</a></li>
              </ul>
            </section>
          </footer>
    </div>
  )
}

export default Services
