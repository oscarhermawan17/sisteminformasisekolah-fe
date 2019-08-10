import React from 'react';
import ListSiswa  from './ListSiswa.module.sass'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllSiswa, deleteUser } from '../actions/User'

class ListSiswaComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            button_delete:"modal",
            tmp_id_ongoing_delete:{
                id:"",
                nama_lengkap:""
            }
        }
    }

    componentDidMount(){
        this.props.toGetAllSiswa(this.props.user_navigation)
    }

    deleteUser(){
        this.props.toDeleteUser(this.state.tmp_id_ongoing_delete)
        this.setState({button_delete:"modal"})
    }


    render(){
        return (
        <div>
            <div>
                <div className="kotak-profile padding-bottom-10">
                    <div className="title-profile">
                        MANAGEMENT {this.props.user_navigation.toUpperCase() }
                    </div>
                    
                    <div className="content-with-padding-10">
                        <div>
                            <div className={ListSiswa.content_left}>     
                                {   this.props.user_navigation === 'siswa' ? 
                                    <Link to="/tambah_siswa">
                                        <span className="button is-info">Tambah {this.props.user_navigation } baru</span>
                                    </Link> : this.props.user_navigation === 'guru' ?                           
                                    <Link to="/tambah_guru">
                                        <span className="button is-info">Tambah {this.props.user_navigation } baru</span>
                                    </Link> : null
                                }
                            </div>
                            <div className={ListSiswa.content_right}>
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
                                <td className={ListSiswa.lebar10}>
                                    NIS
                                </td>
                                <td className={ListSiswa.lebar30}>
                                    Nama Lengkap
                                </td>
                                <td className={ListSiswa.lebar10}>
                                    Gender
                                </td>
                                <td>
                                    Kelas
                                </td>
                                <td className={ListSiswa.lebar10}>
                                    Atur
                                </td>
                            </tr>
                            
                            { this.props.allSiswa === null ? null : 
                                this.props.allSiswa.map(siswa => {
                                    return(
                                        <tr key={siswa.id}>
                                            <td className={ListSiswa.lebar10}>
                                                {siswa.nomor_induk}
                                            </td>
                                            <td className={ListSiswa.lebar30}>
                                                {siswa.nama_lengkap}
                                            </td>
                                            <td className={ListSiswa.lebar10}>
                                                {siswa.gender}
                                            </td>
                                            <td>
                                                Kelas
                                            </td>
                                            <td className={ListSiswa.lebar25}>
                                                <a className="button is-info">Ubah</a> &nbsp;
                                                <a className="button is-danger" onClick={() => this.setState({button_delete:"modal is-active"}, () => this.setState({tmp_id_ongoing_delete:siswa}))}>Hapus</a>
                                            </td>
                                        </tr>
                                    )
                                })
                            
                            }  
                            </tbody>
                            
                        </table>
                        
                    </div>
                    
                </div>   
            </div>

            <div className={this.state.button_delete}>
            <div className="modal-background"></div>
            <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">Anda yakin akan menghapus {this.state.tmp_id_ongoing_delete.nama_lengkap} ? </p>
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
        allSiswa:state.Siswa
    } 
}
  
const mapDispatchToProps = (dispatch) =>{
    return{
      toGetAllSiswa:(criteria_find)=>dispatch(getAllSiswa(criteria_find)),
      toDeleteUser:(user)=>dispatch(deleteUser(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListSiswaComponent)


