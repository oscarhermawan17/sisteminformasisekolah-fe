import React from 'react';
import ListSiswa  from './ListSiswa.module.sass'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getAllMataPelajaran, deleteMataPelajaran } from '../actions/MataPelajaran'

class ListMatPel extends React.Component {
    constructor(props){    
        super(props)
        this.state = {
            button_delete:"modal",
            tmp_mata_pelajaran_onging_delete:""
        }
    }

    deleteUser(){
        this.props.toDeleteMataPelajaran(this.state.tmp_mata_pelajaran_ongoing_delete)
        this.setState({button_delete:"modal"})
    }

    componentDidMount(){
        this.props.toGetAllMataPelajaran()
    }

    render(){
        return (
        <div>
            <div>
                <div className="kotak-profile padding-bottom-10">
                    <div className="title-profile">
                        MANAGEMENT MATA PELAJARAN
                    </div>
                    
                    <div className="content-with-padding-10">
                        <div>
                            <div className={ListSiswa.content_left}>       
                                <Link to="/tambah_mata_pelajaran">
                                    <span className="button is-info">Tambah Mata Pelajaran Baru</span>
                                </Link>
                            </div>
                            <div className={ListSiswa.content_right}>
                                <span className="button is-info">Search</span> &nbsp;
                                <span className="button is-info">Cari</span>
                            </div> 
                            <div className="clear_float">
                            </div>   
                        </div>   

                        <br/>
                        <table className="table">
                            <tbody>
                                <tr>
                                    <td>
                                        ID Mata Pelajaran
                                    </td>
                                    <td>
                                        Nama Pelajaran
                                    </td>
                                    <td >
                                        Deskripsi Mata Pelajaran
                                    </td>                                   
                                    <td>
                                        Atur
                                    </td>
                                </tr>
                                { this.props.allMataPelajarans == null ? null : this.props.allMataPelajarans.map( mata_pelajaran => {
                                    return(
                                        <tr>
                                            <td>
                                                {mata_pelajaran.id}
                                            </td>
                                            <td>
                                                {mata_pelajaran.nama_mata_pelajaran}
                                            </td>
                                            <td className="content-description">
                                                {mata_pelajaran.deskripsi}
                                            </td>                                   
                                            <td className="action-edit-delete">

                                                <Link to={{
                                                        pathname:`/ubah_mata_pelajaran/${mata_pelajaran.id}`,
                                                }}>
                                                        <span className="button is-info">Ubah</span> &nbsp;
                                                </Link>
                                                <span className="button is-danger" onClick={() => this.setState({button_delete:"modal is-active"}, () => this.setState({tmp_mata_pelajaran_ongoing_delete:mata_pelajaran}))}>Hapus</span>
                                            </td>
                                        </tr>  
                                    )
                                })}
                                                                          
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

const mapStateToProps = (state) => ({
        allMataPelajarans:state.MataPelajaran
})
  
const mapDispatchToProps = (dispatch) => ({
      toGetAllMataPelajaran:()=>dispatch(getAllMataPelajaran()),
      toDeleteMataPelajaran:(mata_pelajaran)=>dispatch(deleteMataPelajaran(mata_pelajaran)),
})

export default connect(mapStateToProps, mapDispatchToProps) (ListMatPel)


