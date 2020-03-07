import React from 'react';
import {Dialog} from 'react-native-simple-dialogs';

import styles from './CustomDialogStyles';

const CustomDialog = ({dismissAction, isVisible, children}) => (
  <Dialog
    visible={!!isVisible}
    dialogStyle={styles.dialogContainer}
    onTouchOutside={() => dismissAction()}
    animationType="fade">
    {children}
  </Dialog>
);

export default CustomDialog;
