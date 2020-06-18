import React,{Component} from 'react'
import {ListGroup, Button} from 'react-bootstrap'
import { faMale,faFemale,faRedo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {patientService} from '../../services'

class patientList extends Component{
    constructor(props){
        super(props)
        this.state={
            patients:[]
        }
    }
    componentDidMount(){
        patientService.getAll()
        .then((response)=>{
            this.setState({
                ...this.state,
                patients:[]
            })
        })
    };
    onChangeHandler = (event)=>{
        patientService.getAll()
        .then((response)=>{
            this.setState({
                ...this.state,
                patients:[]
            })
        });
        alert('refreshing list')
    };

    render(){
        const div={
            padding:'15px',
            margin: '15px',
            textAlign: 'left',
            border: '2px solid black'
            
        };
        const  listGroup={
            marginBottom: '10px',
            overflowY:'scroll',
            height: '420px'
        };

        return(
            <div style={div}>
                <h3 style={{textAlign: "center"}}>Pacientes ingresados</h3>
                <small>Refresh </small> 
                <Button  className= 'btn btn-light' onClick={this.onChangeHandler} >
                     <FontAwesomeIcon icon={faRedo} size="xs"  /></Button>
                <ListGroup style={listGroup} className='border' >
                <ListGroup.Item className='border'>
                    <p><strong>Paciente: </strong>Jorge Sanhueza <FontAwesomeIcon icon={faMale} size="md"  style={{ color: 'blue' }} /></p>
                    <p><strong>Fecha Nacimiento: </strong>03-10-97</p>
                    
                </ListGroup.Item>
                <ListGroup.Item className='list-group-item-'>
                    <p><strong>Paciente: </strong>Jaime Rodiguez <FontAwesomeIcon icon={faFemale} size="md"  style={{ color: 'deeppink' }} /></p>
                    <p><strong>Fecha Nacimiento: </strong>01-01-14</p>
                </ListGroup.Item>
                <ListGroup.Item className='list-group-item-'>
                    <p><strong>Paciente: </strong>Nacho
                    <FontAwesomeIcon icon={faFemale} size="md"  style={{ color: 'deeppink' }} />
                    <FontAwesomeIcon icon={faFemale} size="md"  style={{ color: 'blue' }} />
                    </p>
                    <p><strong>Fecha Nacimiento: </strong>01-01-39</p>
                </ListGroup.Item>
                </ListGroup>
            </div>
        )
    }
};

export default patientList;