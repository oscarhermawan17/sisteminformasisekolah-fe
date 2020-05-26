import React from 'react';
import { connect } from 'react-redux'
import { createUser, getOneUser } from '../actions/User'
import Url from '../url/Url'
import axios from 'axios'
class FormCreateUpdateUser extends React.Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                nomor_induk: "",
                nama_lengkap:"",
                gender:"",  
                email:"",
                alamat:"",
                nomor_hp:"",
                password:"admin",
            }
        }   
    }

    componentDidMount(){
        let role = this.props.user_navigation === 'update_siswa' ? 2 : this.props.user_navigation === 'update_guru' ? 3 : null
        if(this.props.edit === 'yes' ){          
            axios.get(`${Url}/users/${role}/get_single_user/${this.props.match.params.nomor_induk}`)
            .then(response => {
                console.log('hasil', role, this.props)
              if(response.data.status === 'success'){
                  this.setState({user:response.data.data})
              } else {
                alert(`${response.data.message_response}`)
              }
            })
            .catch(err => {
              alert("Error Connection. Please check your connection")
            });
        }
    }

    handleChange(e, name) {
        this.setState({ 
            user:{...this.state.user, [name]: e.target.value }
        });
    }

    createUser(){
        if(this.props.user_navigation === 'create_siswa'){
            this.props.toCreateUser({...this.state, role:2})
        } else if(this.props.user_navigation === 'create_guru'){
            this.props.toCreateUser({...this.state, role:3})
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
                                <input className="input is-info" type="text" placeholder="Masukkan Nomor Induk" value={this.state.user.nomor_induk} onChange={(e) => this.handleChange(e, 'nomor_induk')}/>
                            </td>                         
                        </tr>
                        <tr>
                            <td>
                                Nama Lengkap
                            </td>
                            <td>
                                <input className="input is-info" width="200px" type="text" placeholder="Isikan dengan nama lengkap" value={this.state.user.nama_lengkap} onChange={(e) => this.handleChange(e, 'nama_lengkap')}/>
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
                                    <select name="country" value={this.state.user.gender} onChange={(e) => this.handleChange(e, 'gender')}>
                                        <option value="">Pilih Jenis Kelamin</option>
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
                                <input className="input is-info" type="text" placeholder="Isikan Email" value={this.state.user.email} onChange={(e) => this.handleChange(e, 'email')}/>
                            </td>                           
                        </tr>  
                        <tr>
                            <td>
                                Alamat Lengkap
                            </td>
                            <td>
                                <textarea className="textarea is-info" placeholder="Isikan dengan alamat lengkap" value={this.state.user.alamat} onChange={(e) => this.handleChange(e, 'alamat')}></textarea>
                            </td>                           
                        </tr> 
                        <tr>
                            <td>
                                No Handphone
                            </td>
                            <td>
                                <input className="input is-info" type="text" placeholder="Isikan nomor Hp User" value={this.state.user.nomor_hp} onChange={(e) => this.handleChange(e, 'nomor_hp')} />
                            </td>                           
                        </tr>                    
                    </table>

                    <span className="button is-info" onClick={() => this.createUser()}>Tambahkan</span>
                </div>               
            </div>
        ) 
    }
}

const mapStateToProps = (state) => ({
    changeUrl:state.ChangeUrl
})

const mapDispatchToProps = (dispatch) => ({
    toGetOneUser:(data)=>dispatch(getOneUser(data)),
    toCreateUser:(data)=>dispatch(createUser(data))
})

export default connect(mapStateToProps, mapDispatchToProps) (FormCreateUpdateUser)
