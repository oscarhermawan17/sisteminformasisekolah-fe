import React from 'react';
import ListSiswa  from './ListSiswa.module.sass'

import { connect } from 'react-redux'
import { getAllSiswa } from '../actions/User'

class ListSiswaComponent extends React.Component {
    constructor(){
        super()
        this.state = {

        }
    }

    componentDidMount(){
        console.log('masuk did mount')
        this.props.toGetAllSiswa()
    }

    render(){
        return (
        <div>
            <div>
                <div className="kotak-profile">
                    <div className="title-profile">
                        MANAGEMENT SISWA
                    </div>
                    
                    <div className="content-with-padding-10">
                        <div>
                            <div className={ListSiswa.content_left}>
                                <a className="button is-info">Tambah Siswa Baru</a>
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
                                <td className={ListSiswa.lebar25}>
                                    Atur
                                </td>
                            </tr>
                            { this.props.AllSiswa === null ? null : console.log(this.props.AllSiswa) }

                            
                                
                            
                            
                        </table>
                    </div>
                    
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
      toGetAllSiswa:()=>dispatch(getAllSiswa()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps) (ListSiswaComponent)


