import React from 'react';
import ListSiswa  from './ListSiswa.module.sass'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllUsers, deleteUser } from '../actions/User'

class ListUserComponent extends React.Component {
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
        this.props.toGetAllUsers(this.props.user_navigation)
    }

    deleteUser(){
        this.props.toDeleteUser(this.state.tmp_id_ongoing_delete)
        this.setState({button_delete:"modal"})
    }

    render(){
        let props = this.props
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
                            
                            { this.props.allUsers === null ? null : 
                                this.props.allUsers.map(user => {
                                    return(
                                        <tr key={user.id}>
                                            <td className={ListSiswa.lebar10}>
                                                {user.nomor_induk}
                                            </td>
                                            <td className={ListSiswa.lebar30}>
                                                {user.nama_lengkap}
                                            </td>
                                            <td className={ListSiswa.lebar10}>
                                                {user.gender}
                                            </td>
                                            <td>
                                                Kelas
                                            </td>
                                            <td className={ListSiswa.lebar25}>
                                                {   this.props.user_navigation === 'siswa' ?
                                                    <Link to={{
                                                        pathname:`/ubah_siswa/${user.id}`,
                                                        edit:user
                                                    }}>
                                                        <a className="button is-info">Ubah</a> &nbsp;
                                                    </Link> : this.props.user_navigation === 'guru' ?
                                                    <Link to={{
                                                        pathname:`/ubah_guru/${user.id}`,
                                                        edit:user
                                                    }}>
                                                        <a className="button is-info">Ubah</a> &nbsp;
                                                    </Link> : null
                                                }    
                                                
                                                <a className="button is-danger" onClick={() => this.setState({button_delete:"modal is-active"}, () => this.setState({tmp_id_ongoing_delete:user}))}>Hapus</a>
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

const mapStateToProps = (state) => ({
        allUsers:state.User
})
  
const mapDispatchToProps = (dispatch) => ({
      toGetAllUsers:(criteria_find)=>dispatch(getAllUsers(criteria_find)),
      toDeleteUser:(user)=>dispatch(deleteUser(user)),
})

export default connect(mapStateToProps, mapDispatchToProps) (ListUserComponent)


