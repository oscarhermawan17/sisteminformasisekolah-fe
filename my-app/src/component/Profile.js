import React from 'react';
import './Style.sass';
import { connect } from 'react-redux'
// import { getSingleProfileUser } from '../actions/User'
import { getSingleProfileUser } from '../actions/User'

class Profile extends React.Component {
    constructor(){
        super()
    }

    componentDidMount(){
        this.props.toGetSingleProfileUser('oke')
    }

    render(){
        return (
            <div>
                <div className="kotak-profile">
                    <div className="title-profile">
                        PROFIL SISWA
                    </div>
                    <div className="columns">
                        <div className="column is-two-fifths">
                            <div className="img-profile">
                                <img src={require ('../img/download.jpeg')} alt="Logo" />;
                            </div>
                        </div>
                        <div className="column is-three-fifths"> 
                            <div className="table-box">
                                <table className="table">
                                    <tr>
                                        <td>
                                            NIK
                                        </td>
                                        <td className="lebar">
                                            oke
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Nama Lengkap
                                        </td>
                                        <td>
                                            Drajat Saifuloh
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Jenis Kelamin
                                        </td>
                                        <td>
                                            Waria
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Email
                                        </td>
                                        <td>
                                            waria@waria.com
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Tanggal Lahir
                                        </td>
                                        <td>
                                            30 Februari 1992
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            No Telpon
                                        </td>
                                        <td>
                                            081701000888
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Alamat
                                        </td>
                                        <td>
                                            BTN Sanggulan, Neo Game Center
                                        </td>
                                    </tr>
                                </table>
                            </div>                                          
                        </div>
                    </div>    
                </div>
            </div>
        )
    }  
}

const mapStateToProps = (state) =>{
    return{
        user:state.User
    } 
}

const mapDispatchToProps = (dispatch) =>{
    return{
        toGetSingleProfileUser:(data)=>dispatch(getSingleProfileUser(data)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Profile)
