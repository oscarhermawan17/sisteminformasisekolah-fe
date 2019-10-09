import React from 'react';
import { connect } from 'react-redux'
import { getAllMataPelajaran } from '../actions/MataPelajaran'
import { getAllGuruByIdMataPelajaran, addGuruFromSearchBar, deleteGuruMataPelajaran } from '../actions/GuruMataPelajaran'
import { getGuruByName } from '../actions/User'

import Panel  from '../style/Panel.module.sass'

class ListGuruMataPelajaran extends React.Component {
    constructor(props){    
        super(props)
        this.state = {
            button_delete:"modal",
            mata_pelajaran_selected:"",
            nama_guru_input:"",
        }
    }

    handleChange(event) {
        this.setState({ nama_guru_input: event.target.value }, () => this.props.toGetGuruByName(this.state.nama_guru_input));
    }

    componentDidMount(){
        this.props.toGetAllMataPelajaran()
    }

    addGuruToMataPelajaran(guru){
        let data = {
            id_guru: guru.id,
            id_mata_pelajaran: this.state.mata_pelajaran_selected
        }
        this.props.toAddGuruFromSearchBar(data)
    }

    chooseMataPelajaran(id_mata_pelajaran){
        this.props.toGetAllGuruByIdMataPelajaran(id_mata_pelajaran)
        this.setState({ nama_guru_input: "" }, () => this.props.toGetGuruByName(this.state.nama_guru_input));
        this.setState({mata_pelajaran_selected:id_mata_pelajaran})

    }

    render(){
        return (
        <div>
            <div>
                <div className="kotak-profile padding-bottom-10">
                    <div className="title-profile">
                        MANAGEMENT GURU MATA PELAJARAN
                    </div>
                    
                    <div className="content-with-padding-10">
                        <div class="columns">
                            <div className="column is-one-quarter">
                                    { this.props.allMataPelajarans == null ? null : this.props.allMataPelajarans.map( mata_pelajaran => {
                                        if(this.state.mata_pelajaran_selected === mata_pelajaran.id){
                                            return(
                                                <div className={Panel.selected} id={mata_pelajaran.id} onClick={() => this.chooseMataPelajaran(mata_pelajaran.id)}>                                            
                                                        <center>{mata_pelajaran.nama_mata_pelajaran}</center>
                                                </div>  
                                            )
                                        } else{
                                            return(
                                                <div className={Panel.panel} id={mata_pelajaran.id} onClick={() => this.chooseMataPelajaran(mata_pelajaran.id)}>                                            
                                                        <center>{mata_pelajaran.nama_mata_pelajaran}</center>
                                                </div>  
                                            )
                                        }  
                                    })}
                            </div>

                            <div className="column is-two-third">                           
                                <div className="padding-20-all background-white">
                                    <div>
                                        <input class="input is-primary" type="text" placeholder="Primary input" value={this.state.nama_guru_input} onChange={(e) => this.handleChange(e)} />
                                        <div className="dropdown-name-tag">
                                            {this.props.allGurusByNameInput === 0 ? null : this.props.allGurusByNameInput.map(guru => 
                                            <div className="dropdown-name-list">
                                                <span className="add-guru-text">{guru.nama_lengkap}</span>
                                                <span className="add-guru-button button is-info" onClick={() => this.addGuruToMataPelajaran(guru) }>add</span>
                                                <div className="clear-float"></div>
                                            </div>)}
                                        </div>
                                    </div>
                                    
                                    {
                                        this.props.allGuruMataPelajaran.length === null ? null :
                                        this.props.allGuruMataPelajaran.map(guru=>{
                                            return(
                                                <div className="make-grid grid-2">                                                   
                                                    <div className="border-box">                          
                                                        <div className="textNya">{guru.id}-{guru.nama_lengkap}</div>
                                                        <div className="button-delete" onClick={() => this.props.toDeleteGuruMataPelajaran(guru.id)}>
                                                            <center>X</center>
                                                        </div>                                                        
                                                    </div>                                                
                                                </div>
                                            )
                                        })
                                    }
                                    <div className="clear-float"></div>
                                </div>
                            </div>
                        </div>       
                    </div>
                    
                </div>   
            </div>
        </div> 
        );
    }
}

const mapStateToProps = (state) => ({
    allGurusByNameInput:state.User,
    allMataPelajarans:state.MataPelajaran,
    allGuruMataPelajaran:state.GuruMataPelajaran
})
  
const mapDispatchToProps = (dispatch) => ({
    toAddGuruFromSearchBar:(data)=>dispatch(addGuruFromSearchBar(data)),
    toGetGuruByName:(name_input)=>dispatch(getGuruByName(name_input)), // For Triger Search
    toGetAllMataPelajaran:()=>dispatch(getAllMataPelajaran()), // For Menu (left bar) 
    toGetAllGuruByIdMataPelajaran:(id_mata_pelajaran)=>dispatch(getAllGuruByIdMataPelajaran(id_mata_pelajaran)), // For Get All Guru By Mata Pelajaran
    toDeleteGuruMataPelajaran:(guru)=>dispatch(deleteGuruMataPelajaran(guru))
})

export default connect(mapStateToProps, mapDispatchToProps) (ListGuruMataPelajaran)


