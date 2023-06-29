import React, { Fragment, useEffect, useState } from 'react'
import Dialog from "../../Dialog";


const confirmDialogDelete = () => {
    const [dialog, setDialog] = useState({
        message: "",
        isLoading: false,
        //Update
        nameProduct: ""
    });

    const handleDialog = (message, isLoading, nameProduct, id) => {
        setDialog({
            message,
            isLoading,
            //Update
            nameProduct,
            id
        });
    };

    const deleteOrderHandler = (id, name) => {
        handleDialog("Are you sure you want to delete order?", true, name, id);
    }

    const areUSureDelete = (choose) => {
        if (choose) {
            dispatch(deleteOrder(dialog.id))
            handleDialog("", false);
        } else {
            handleDialog("", false);
        }
    }


    return (
        <div>confirmDialogDelete
            <button className="btn btn-danger py-1 px-2" onClick={() => deleteOrderHandler(order.id, order.name)}>
                <i className="fa fa-trash"></i>
            </button>

            <div>
                {dialog.isLoading && (
                    <Dialog
                        //Update
                        nameProduct={dialog.nameProduct}
                        onDialog={areUSureDelete}
                        message={dialog.message}
                        id={dialog.id}
                    />
                )}
            </div>
        </div>
    )
}

export default confirmDialogDelete