import React from 'react';
import { connect } from 'react-redux'
import { createMataPelajaran, updateMataPelajaran } from '../actions/MataPelajaran'

class FormCreateUpdateMataPelajaran extends React.Component {
    constructor(props){
        super(props)
        this.state={
            nama_mata_pelajaran:"",
            deskripsi:"",
        }   
    }

    componentDidMount(){
        if(this.props.edit === 'yes' ){          
            let tmp = this.props.allMataPelajaran.filter(mata_pelajaran => parseInt(mata_pelajaran.id) === parseInt(this.props.match.params.id))
            this.setState({nama_mata_pelajaran:tmp[0].nama_mata_pelajaran})
            this.setState({deskripsi:tmp[0].deskripsi})
        }
    }

    componentDidUpdate(){
        if(this.props.changeUrl === true){
            this.props.history.push('/management_matpel')
        }
    }

    handleChange(e, name) {
        this.setState({ [name]: e.target.value });
    }

    createMataPelajaran(){
        let token = 0
        if(this.props.edit === 'yes' )
            this.props.toUpdateMataPelajaran({...this.state, params:this.props.match.params.id}, token)
        else 
            this.props.toCreateMataPelajaran(this.state)    
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
                                <input className="input is-info" value={this.state.nama_mata_pelajaran} type="text" placeholder="Masukkan Nama Mata Pelajran" onChange={(e) => this.handleChange(e, 'nama_mata_pelajaran')}/>
                            </td>                         
                        </tr>                                              
                        <tr>
                            <td>
                                Deskripsi Mata Pelajaran
                            </td>
                            <td>
                                <textarea className="textarea is-info" value={this.state.deskripsi} placeholder="Isikan dengan alamat lengkap"  onChange={(e) => this.handleChange(e, 'deskripsi')}></textarea>
                            </td>                           
                        </tr>                                         
                    </table>

                    <a className="button is-info" onClick={() => this.createMataPelajaran()}>Tambahkan</a>
                </div>               
            </div>
        ) 
    }
}

const mapStateToProps = (state) => ({
        allMataPelajaran:state.MataPelajaran,
        changeUrl:state.ChangeUrl
})

const mapDispatchToProps = (dispatch) => ({
        toCreateMataPelajaran:(data)=>dispatch(createMataPelajaran(data)),
        toUpdateMataPelajaran:(data, token)=>dispatch(updateMataPelajaran(data, token)),
})

export default connect(mapStateToProps, mapDispatchToProps) (FormCreateUpdateMataPelajaran)
