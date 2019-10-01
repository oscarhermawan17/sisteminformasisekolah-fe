import React from 'react';
import { connect } from 'react-redux'
import { createUser } from '../actions/User'

class FormCreateUpdateUser extends React.Component {
    constructor(props){
        super(props)
        this.state={
            nomor_induk:"",
            nama_lengkap:"",
            gender:"0",  
            email:"",
            alamat:"",
            nomor_hp:"",
            password:"admin",
        }   
    }

    componentDidMount(){
        if(this.props.edit === 'yes' ){          
            let tmp = this.props.allUsers.filter(siswa => parseInt(siswa.id) === parseInt(this.props.match.params.id))
            this.setState({nomor_induk:tmp[0].nomor_induk})
            this.setState({nama_lengkap:tmp[0].nama_lengkap})
            this.setState({gender:tmp[0].gender})
            this.setState({email:tmp[0].email})
            this.setState({alamat:tmp[0].alamat})
            this.setState({nomor_hp:tmp[0].nomor_hp})
        }
    }

    handleChange(e, name) {
        this.setState({ [name]: e.target.value });
    }

    createUser(){
        if(this.props.user_navigation === 'create_siswa'){
            this.props.toCreateUser({...this.state, role:2})
            this.props.history.push('/management_siswa')
        } else if(this.props.user_navigation === 'create_guru'){
            this.props.toCreateUser({...this.state, role:3})
            this.props.history.push('/management_guru')
        }         
    }

    render(){
        return(
            <div className="kotak-profile padding-bottom-10">
                <div className="title-profile">
                    TAMBAH {this.props.user_navigation.toUpperCase() }
                </div>

                <div className="content-with-padding-10">
                    <table className="table">
                        <tr>
                            <td width="19%">
                                Nomor Induk Siswa
                            </td>
                            <td>
                                <input className="input is-info" type="text" placeholder="Masukkan Nomor Induk" value={this.state.nomor_induk} onChange={(e) => this.handleChange(e, 'nomor_induk')}/>
                            </td>                         
                        </tr>
                        <tr>
                            <td>
                                Nama Lengkap
                            </td>
                            <td>
                                <input className="input is-info" width="200px" type="text" placeholder="Isikan dengan nama lengkap" value={this.state.nama_lengkap} onChange={(e) => this.handleChange(e, 'nama_lengkap')}/>
                            </td>                           
                        </tr> 
                        <tr>
                            <td>
                                Gender
                            </td>
                            <td>
                            <div class="field has-addons">
                                <div class="control is-expanded">
                                    <div class="select is-fullwidth is-info">
                                    <select name="country" onChange={(e) => this.handleChange(e, 'gender')}>
                                        <option value="0">Pilih Jenis Kelamin</option>
                                        <option value="Pria">Pria</option>
                                        <option value="Wanita">Wanita</option>
                                    </select>
                                    </div>
                                </div>
                                <div class="control">
                                    <button type="submit" class="button is-primary">Choose</button>
                                </div>
                                </div>
                            </td>                           
                        </tr>
                        <tr>
                            <td>
                                Email
                            </td>
                            <td>
                                <input className="input is-info" type="text" placeholder="Isikan Email" value={this.state.email} onChange={(e) => this.handleChange(e, 'email')}/>
                            </td>                           
                        </tr>  
                        <tr>
                            <td>
                                Alamat Lengkap
                            </td>
                            <td>
                                <textarea className="textarea is-info" placeholder="Isikan dengan alamat lengkap" value={this.state.alamat} onChange={(e) => this.handleChange(e, 'alamat')}></textarea>
                            </td>                           
                        </tr> 
                        <tr>
                            <td>
                                No Handphone
                            </td>
                            <td>
                                <input className="input is-info" type="text" placeholder="Isikan nomor Hp User" value={this.state.nomor_hp} onChange={(e) => this.handleChange(e, 'nomor_hp')} />
                            </td>                           
                        </tr>                    
                    </table>

                    <a className="button is-info" onClick={() => this.createUser()}>Tambahkan</a>
                </div>               
            </div>
        ) 
    }
}

const mapStateToProps = (state) => ({
    allUsers:state.User
})

const mapDispatchToProps = (dispatch) => ({
    toCreateUser:(data)=>dispatch(createUser(data)),
})

export default connect(mapStateToProps, mapDispatchToProps) (FormCreateUpdateUser)
