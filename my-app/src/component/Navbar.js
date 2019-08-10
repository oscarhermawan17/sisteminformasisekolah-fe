import React from 'react';

class Navbar extends React.Component {
  render(){
    return (
      <div className="testing-navbar">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
            <div className="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className="navbar-menu">
            <div className="navbar-start">             
              <a className="navbar-item" href="/">
                Profil
              </a>
              <a className="navbar-item">
                Datar Nilai
              </a>


              <div className="navbar-item has-dropdown is-hoverable">
                <span className="navbar-link">
                  Atur Siswa / Guru
                </span>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item" href="/management_siswa">
                    Atur Siswa
                  </a>
                  <a className="navbar-item" href="/management_guru">
                    Atur Guru
                  </a>
              
                </div>
              </div>

              <a className="navbar-item" href="https://bulma.io/">
                Atur Nilai
              </a>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="field is-grouped">
                  <p className="control">
                    <a className="bd-tw-button button" data-social-network="Twitter" data-social-action="tweet" data-social-target="http://localhost:4000" target="_blank" href="https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&amp;hashtags=bulmaio&amp;url=http://localhost:4000&amp;via=jgthms">
                      <span className="icon">
                        <i className="fab fa-twitter"></i>
                      </span>
                      <span>
                        Keluar
                      </span>
                    </a>
                  </p>
                  
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div> 
    );
  }
  
}

export default Navbar
