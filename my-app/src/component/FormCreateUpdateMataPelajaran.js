import React from 'react';
import { connect } from 'react-redux'
import { createMataPelajaran } from '../actions/MataPelajaran'

class FormCreateUpdateMataPelajaran extends React.Component {
    constructor(props){
        super(props)
        this.state={
            nama_mata_pelajaran:"",
            deskripsi:"",
        }   
    }

    componentDidMount(props, state){
        // if(this.props.edit === 'yes' ){           
        //     let tmp = this.props.allSiswa.filter(siswa => parseInt(siswa.id) === parseInt(this.props.match.params.id))
        //     this.setState({nomor_induk:tmp[0].nomor_induk})
        //     this.setState({nama_lengkap:tmp[0].nama_lengkap})
        //     this.setState({gender:tmp[0].gender})
        //     this.setState({email:tmp[0].email})
        //     this.setState({alamat:tmp[0].alamat})
        //     this.setState({nomor_hp:tmp[0].nomor_hp})
        // }
    }

    handleChange(e, name) {
        this.setState({ [name]: e.target.value });
    }

    createMataPelajaran(){
        this.props.toCreateMataPelajaran(this.state)
        this.props.history.push('/management_matpel')      
    }

    render(){
        return(
            <div className="kotak-profile padding-bottom-10">
                <div className="title-profile">
                    TAMBAH MataPelajaran
                </div>

                <div className="content-with-padding-10">
                    <table className="table">
                        <tr>
                            <td width="19%">
                                Nama mata pelajatan
                            </td>
                            <td>
                                <input className="input is-info" type="text" placeholder="Masukkan Nama Mata Pelajran" onChange={(e) => this.handleChange(e, 'nama_mata_pelajaran')}/>
                            </td>                         
                        </tr>                                              
                        <tr>
                            <td>
                                Deskripsi Mata Pelajaran
                            </td>
                            <td>
                                <textarea className="textarea is-info" placeholder="Isikan dengan alamat lengkap"  onChange={(e) => this.handleChange(e, 'deskripsi')}></textarea>
                            </td>                           
                        </tr>                                         
                    </table>

                    <a className="button is-info" onClick={() => this.createMataPelajaran()}>Tambahkan</a>
                </div>               
            </div>
        ) 
    }
}

const mapStateToProps = (state) =>{
    return{
        allSiswa:state.MataPelajaran
    } 
}

const mapDispatchToProps = (dispatch) =>{
    return{
        toCreateMataPelajaran:(data)=>dispatch(createMataPelajaran(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (FormCreateUpdateMataPelajaran)
