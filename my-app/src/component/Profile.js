import React from 'react';
import './Style.sass';
import { connect } from 'react-redux'

class Profile extends React.Component {
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
                                            {this.props.role_user === '1' ? 'ADMIN' : this.props.role_user === '2' ? 'Nomor Induk' : 'Nomor Induk Pegawai'}
                                        </td>
                                        <td className="lebar">
                                            {this.props.role_user === '2' ? this.props.profile.nomor_induk : this.props.profile.nomor_induk_pegawai}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Nama Lengkap
                                        </td>
                                        <td>
                                         {this.props.profile.nama_lengkap}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Jenis Kelamin
                                        </td>
                                        <td>
                                            {this.props.profile.gender}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Email
                                        </td>
                                        <td>
                                            {this.props.profile.email}
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
                                            {this.props.profile.nomor_hp}
                                        </td>
                                    </tr>

                                    <tr>
                                        <td>
                                            Alamat
                                        </td>
                                        <td>
                                            {this.props.profile.alamat}
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

const mapStateToProps = (state) => ({
    profile:state.Profile
})

export default connect(mapStateToProps, null) (Profile)
