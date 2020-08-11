import {api} from '../helpers/api'

const basePath= 'v1';

function getAll (){
    return api.get(`${basePath}/pacientes`)
};
function show (pacienteId){
    return api.get(`${basePath}/id=${pacienteId}`)
};
function create (data){
    return api.post(`${basePath}/paciente`,data)
};
function remove (pacienteId){
    return api.post(`${basePath}/paciente/id=${pacienteId}`)
};

export const patientService ={
    getAll,
    show,
    create,
    remove
};
