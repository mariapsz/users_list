import { createConfirmation } from 'react-confirm';
import ConfirmationDialog from './ConfirmationDialog';

const confirm = createConfirmation(ConfirmationDialog, 10);

export default function(confirmation: any, options = {}) {
    return confirm({ confirmation, options });
}