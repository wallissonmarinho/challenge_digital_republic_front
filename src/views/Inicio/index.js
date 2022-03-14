import React from "react";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

import { withStore } from "../../components/StoreContext";
import { Float, Integer } from "../../components/Input";
import Modal from "./modals/Modal";

Inicio.propTypes = {
  inicioStore: PropTypes.object.isRequired,
};

function Inicio(props) {
  const { inicioStore } = props;

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <div style={{ marginRight: "20%", marginLeft: "20%" }}>
      <Card>
        <CardHeader
          title="Calcular tinta necessária"
          action={
            <div>
              <Button
                style={{ marginRight: "15px" }}
                color="primary"
                variant="outlined"
                onClick={() => inicioStore.calcularTinta()}
              >
                Calcular
              </Button>
            </div>
          }
        />

        <CardContent>
          <TableContainer style={{ maxHeight: "600px" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Altura</TableCell>
                  <TableCell align="left">Largura</TableCell>
                  <TableCell align="left">Portas</TableCell>
                  <TableCell align="left">Janelas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {inicioStore.pintura.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      <TextField
                        name="altura"
                        label="Altura Parede"
                        id={`altura-${index}`}
                        InputProps={{
                          inputComponent: Float,
                        }}
                        inputProps={{ min: 0 }}
                        value={row.altura}
                        onChange={({ target }) =>
                          inicioStore.handleChangePintura(target, index)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="largura"
                        label="Largura Parede"
                        id={`largura-${index}`}
                        InputProps={{
                          inputComponent: Float,
                        }}
                        inputProps={{ min: 0 }}
                        value={row.largura}
                        onChange={({ target }) =>
                          inicioStore.handleChangePintura(target, index)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="portas"
                        label="Portas"
                        id={`Portas-${index}`}
                        InputProps={{
                          inputComponent: Integer,
                        }}
                        inputProps={{ min: 0 }}
                        value={row.portas}
                        onChange={({ target }) =>
                          inicioStore.handleChangePintura(target, index)
                        }
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        name="janelas"
                        label="Janelas"
                        id={`Janelas-${index}`}
                        InputProps={{
                          inputComponent: Integer,
                        }}
                        inputProps={{ min: 0 }}
                        value={row.janelas}
                        onChange={({ target }) =>
                          inicioStore.handleChangePintura(target, index)
                        }
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>
      <Snackbar
        open={inicioStore.error.open}
        autoHideDuration={6000}
        onClose={() => inicioStore.toggleError()}
      >
        <Alert
          onClose={() => inicioStore.toggleError()}
          severity="error"
          sx={{ width: "100%" }}
        >
          {inicioStore.error.message}
        </Alert>
      </Snackbar>
      <Modal />
    </div>
  );
}

export default withStore(observer(Inicio));
