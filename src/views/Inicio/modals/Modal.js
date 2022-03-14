import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

import Grid from "@mui/material/Grid";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";

import { withStore } from "../../../components/StoreContext";

Modal.propTypes = {
  inicioStore: PropTypes.object.isRequired,
};

function Modal(props) {
  const { inicioStore } = props;

  return (
    <div>
      <Dialog color="primary" onClose={() => inicioStore.toggleModal()} open={inicioStore.modal}>
        <DialogTitle>Latas de Tinta</DialogTitle>
        <DialogContent style={{ paddingTop: 30, width: 370 }}>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h6" className="toolbarH2">
                Lata 18L: {inicioStore.latas.total_lata18l || 0}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="toolbarH2">
                Lata 3,6L: {inicioStore.latas.total_lata3_6l || 0}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="toolbarH2">
                Lata 2,5L: {inicioStore.latas.total_lata2_5l || 0}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="toolbarH2">
                Lata 0,5L: {inicioStore.latas.total_lata0_5l || 0}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" className="toolbarH2">
                Litras: {inicioStore.latas.litros || 0}
              </Typography>
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default withStore(observer(Modal));
