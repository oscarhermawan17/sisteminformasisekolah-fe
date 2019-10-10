import React from 'react';
// import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { log_Out } from '../actions/User'


class Navbar extends React.Component {
  constructor(){
    super()
    this.state = {
      burger_nav:"navbar-burger",
      menu_tranparant:"navbar-menu",

    }
  }

  activeDropdown(){
    if(this.state.burger_nav === "navbar-burger"){
      this.setState({burger_nav:"navbar-burger is-active"}, () => this.setState({menu_tranparant:"navbar-menu is-active"}))
    } else {
      this.setState({burger_nav:"navbar-burger"}, () => this.setState({menu_tranparant:"navbar-menu"}))
    }
  }

  render(){
    return (
      <div className="testing-navbar">
        <nav className="navbar is-transparent">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://bulma.io">
              <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28"/>
            </a>
            <div onClick={() => this.activeDropdown()} className={this.state.burger_nav} data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" className={this.state.menu_tranparant}>
            <div className="navbar-start">             
              <a className="navbar-item" href="/">
                Profil
              </a>
              <a className="navbar-item" href="/404">
                Datar Nilai
              </a>

              <div className="navbar-item has-dropdown is-hoverable">
                <span className="navbar-link">
                  Admin Panel
                </span>
                <div className="navbar-dropdown is-boxed">
                  <a className="navbar-item" href="/management_siswa">
                    Atur Siswa
                  </a>
                  <a className="navbar-item" href="/management_guru">
                    Atur Guru
                  </a>
                  <a className="navbar-item" href="/management_matpel">
                    Atur Mata Pelajaran
                  </a>
                  <a className="navbar-item" href="/management_guru_matpel">
                    Atur Guru Mata Pelajaran
                  </a>
                </div>
              </div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                  <span className="button is-danger" onClick={() => this.props.toLog_out()}>Keluar</span>
              </div>
            </div>

          </div>
        </nav>
      </div> 
    );
  }
  
}

const mapDispatchToProps = dispatch => ({
  toLog_out:()=>dispatch(log_Out()),
})

export default connect(null, mapDispatchToProps) (Navbar)
