import React from 'react';
import { connect } from 'react-redux'
import { getAllMataPelajaran } from '../actions/MataPelajaran'
import { getAllGuruByIdMataPelajaran } from '../actions/GuruMataPelajaran'
import Panel  from '../style/Panel.module.sass'

class ListGuruMataPelajaran extends React.Component {
    constructor(props){    
        super(props)
        this.state = {
            button_delete:"modal",
            mata_pelajaran_selected:""
        }
    }

    componentDidMount(){
        this.props.toGetAllMataPelajaran()
    }

    chooseMataPelajaran(id_mata_pelajaran){
        this.props.toGetAllGuruByIdMataPelajaran(id_mata_pelajaran)
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
                                    {
                                        this.props.allGuruMataPelajaran.length === null ? null :
                                        this.props.allGuruMataPelajaran.map(guru=>{
                                            return(
                                                <div className="grid-3">
                                                    <div className="padding-box">
                                                        <div className="border-box">{guru.nama_lengkap}</div>
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

const mapStateToProps = (state) =>{
    return{
        allMataPelajarans:state.MataPelajaran,
        allGuruMataPelajaran:state.GuruMataPelajaran
    } 
}
  
const mapDispatchToProps = (dispatch) =>{
    return{
        toGetAllMataPelajaran:()=>dispatch(getAllMataPelajaran()),
        toGetAllGuruByIdMataPelajaran:(id_mata_pelajaran)=>dispatch(getAllGuruByIdMataPelajaran(id_mata_pelajaran))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ListGuruMataPelajaran)


