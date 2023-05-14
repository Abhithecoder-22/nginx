import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer>
        {/* footer main  */}
        <section class="ft-main">
          <div class="ft-main-item">
            <h2 class="ft-title">About</h2>
            <ul>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Portfolios</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Customers</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">About</h2>
            <ul>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">Portfolios</a>
              </li>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">Customers</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
            </ul>
          </div>

          <div class="ft-main-item">
            <h2 class="ft-title">Contact</h2>
            <ul>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/">Sales</a>
              </li>
              <li>
                <a href="/">Advertise</a>
              </li>
              <li>
                <a href="/">Advertise</a>
              </li>
              <li>
                <a href="/">Advertise</a>
              </li>
            </ul>
          </div>
          <div class="ft-main-item">
            <h2 class="ft-title">Stay Updated</h2>
            <p>Subscribe to our newslatter to get our latest news.</p>
            <form >
              <input
              style={{width:'100%',listStyle:'none'}}
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <button className="btn" type="submit" value="Subscribe" style={{margin:'30px 10px'}}>
                SUBSCRIBE
              </button>
            </form>
          </div>
        </section>
        {/* Footer Social  */}
        <section class="ft-social">
          <ul class="ft-social-list">
            <li>
              <a href="/">
                <i class="fab fa-facebook"></i>
              </a>
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
              <a href="/">
                <i class="fab fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-brands fa-square-instagram"></i>
              </a>
            </li>
            <li>
              <a href="/">
                <i class="fa-brands fa-github"></i>
              </a>
            </li>
          </ul>
        </section>
        {/* Footer Main */}
        <section class="ft-legal">
          <ul class="ft-legal-list">
            <li>
              <a href="/">Term &amp; Condition</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">&copy; 2019 Copyright Nowrap Inc.</a>
            </li>
          </ul>
        </section>
      </footer>
    </div>
  )
}

export default Footer
