import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal'
import {confirmable} from 'react-confirm';

const Confirmation = (props: any) => {


    return (
        <div className="static-modal">
            <Modal isOpen={true} onAfterOpen={props.dismiss}>
                {props.confirmation}
                <button onClick={() => props.cancel('arguments will be passed to the callback')}>CANCEL</button>
                <button onClick={() => props.proceed('same as cancel')}>OK</button>
            </Modal>
        </div>
    )
};

Confirmation.propTypes = {
    show: PropTypes.bool,            // from confirmable. indicates if the dialog is shown or not.
    proceed: PropTypes.func,         // from confirmable. call to close the dialog with promise resolved.
    cancel: PropTypes.func,          // from confirmable. call to close the dialog with promise rejected.
    dismiss: PropTypes.func,         // from confirmable. call to only close the dialog.
    confirmation: PropTypes.string,  // arguments of your confirm function
    options: PropTypes.object        // arguments of your confirm function
};
export default confirmable(Confirmation);