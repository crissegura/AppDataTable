import DataTable from 'react-data-table-component';
import React,{useState, useEffect} from 'react';
import 'styled-components';
//import { Modal } from '../Modal';



const columns = [
    {name: 'CV_1 Español', selector: row => row['CV_1 Español'],grow:2},
    {name: 'CV_2 Ingles', selector: row => row['CV_2 Ingles'],grow:2},
    {name: 'Comentarios Informe', selector: row => row['Comentarios Informe'],grow:2},
    {name: 'Email Candidato', selector: row => row['Email Candidato'],grow:2},
    {name: 'Email Reclutador Principal', selector: row => row['Email Reclutador Principal'],grow:2},
    {name: 'Email Reclutdor Secundario', selector: row => row['Email Reclutdor Secundario'],grow:2},
    {name: 'Fecha Ejercicio Tecnico con Cliente', selector: row => row['Fecha Ejercicio Tecnico con Cliente'],grow:2},
    {name: 'Fecha Entrevista (no tecnica) con Cliente', selector: row => row['Fecha Entrevista (no tecnica) con Cliente'],grow:2},
    {name: 'Fecha Entrevista Técnica con Cliente', selector: row => row['Fecha Entrevista Técnica con Cliente'],grow:2},
    {name: 'Fecha Informe Aprobado', selector: row => row['Fecha Informe Aprobado'],grow:2},
    {name: 'Fecha Informe Cargado', selector: row => row['Fecha Informe Cargado'],grow:2},
    {name: 'Fecha Oferta con Cliente', selector: row => row['Fecha Oferta con Cliente']},
    {name: 'Fecha On Hold', selector: row => row['Fecha On Hold']},
    {name: 'Fecha Pre Offer', selector: row => row['Fecha Pre Offer']},
    {name: 'Fecha Reserva', selector: row => row['Fecha Reserva']},
    {name: 'Fecha Tramites de Ingreso (post-aprobacion oferta)', selector: row => row['Fecha Tramites de Ingreso (post-aprobacion oferta)']},
    {name: 'Fecha Ultimo Estado', selector: row => row['Fecha Ultimo Estado']},
    {name: 'ID', selector: row => row['ID']},
    {name: 'Inf_1 Español', selector: row => row['Inf_1 Español']},
    {name: 'Inf_2 Ingles', selector: row => row['Inf_2 Ingles']},
    {name: 'Linkedin', selector: row => row['Linkedin']},
    {name: 'Ultimo Estado', selector: row => row['Ultimo Estado']},
]
export const PostulateTable =()=>{
        
    const [users, setUsers] = useState([])

    const URL = 'http://181.13.244.170:5000/'

    const showData = async ()=>{
        const response = await fetch(URL)
        const data     = await response.json()
        setUsers(data)
    }

    useEffect(()=>{
        showData();
    },[])
    
    const [pending, setPending] = React.useState(true);
	const [rows, setRows] = React.useState([]);

	React.useEffect(() => {
		const timeout = setTimeout(() => {
			setRows(users);
			setPending(false);
		}, 1500);
		return () => clearTimeout(timeout);
	}, []);

    const [selectedRows, setSelectedRows] = React.useState([]);
	const [toggleCleared, setToggleCleared] = React.useState(false);
	const [data, setData] = React.useState(DataTable);

	const handleRowSelected = React.useCallback(state => {
		setSelectedRows(state.selectedRows);
	}, []);

	const contextActions = React.useMemo(() => {
		const Modal = () => {
            
            return(
                
            )
        }
		return (
			<button key="delete" onClick={Modal} style={{ backgroundColor: 'red' }} icon>
				ABRIR MODAL
			</button>
		);
	}, [data, selectedRows, toggleCleared]);


    return (
        <>

        <DataTable
        title='Tabla postulados'
        columns={columns}
        data={users}
        theme='custom'
        FixedHeaderStory
        fixedHeader
        fixedHeaderScrollHeight="550px"
        progressPending={pending}
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
        />
        </>
    )
}
