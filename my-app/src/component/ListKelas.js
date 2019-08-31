import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllKelas, deleteKelas } from '../actions/Kelas'

class ListKelas extends React.Component {
    constructor(props){    
        super(props)
        this.state = {
            button_delete:"modal",
        }
    }

    deleteUser(){
        this.setState({button_delete:"modal"})
    }

    render(){
        let props = this.props
        return (
        <div>
            <div>
                <div className="kotak-profile padding-bottom-10">
                    <div className="title-profile">
                        MANAGEMENT KELAS
                    </div>
                    
                    <div className="content-with-padding-10">
                        <div>
                            <div>     
                                <Link to="/tambah_siswa">
                                    <span className="button is-info">Tambah Kelas baru</span>
                                </Link>
                            </div>
                            <div>
                                <a className="button is-info">Search</a> &nbsp;
                                <a className="button is-info">Cari</a>
                            </div> 
                            <div className="clear_float">
                            </div>   
                        </div>   

                        <br/>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        Nomor
                                    </td>
                                    <td>
                                        Nama Kelas
                                    </td>
                                    <td >
                                        Tahun Dibuat
                                    </td>                                   
                                    <td>
                                        Atur
                                    </td>
                                </tr>                                             
                            </tbody>
                            
                        </table>
                        
                    </div>
                    
                </div>   
            </div>

            <div className={this.state.button_delete}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Anda yakin akan menghapus ini ? </p>
                </header>
                <footer className="modal-card-foot">
                    <button className="button is-danger" onClick={() => this.deleteUser()}>Ya</button>
                    <button className="button is-info" onClick={() => this.setState({button_delete:"modal"})}>Batal</button>
                </footer>
            </div>
            </div>
        </div> 
        );
    }
}

const mapStateToProps = (state) =>{
    return{
        allKelas:state.Kelas
    } 
}
  
const mapDispatchToProps = (dispatch) =>{
    return{
      toGetAllKelas:()=>dispatch(getAllKelas()),
      toDeleteKelas:(user)=>dispatch(deleteKelas(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListKelas)


