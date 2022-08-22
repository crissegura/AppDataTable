import React from "react";

export const Modal = () => {
    <dialog id="modal">
        <form method="dialog">
            <label for="">Nombre</label><br />
            <input type="text" name="" id="" />
            <button id="cerrar">cerrar</button>
            <button id="enviar">enviar</button>
        </form>
    </dialog>

    const modal = document.getElementById('modal')
    const abrir = document.getElementById('abrir')

    return(
        
        abrir.onclick = () =>{
            modal.showModal();
        }
    )    

}


