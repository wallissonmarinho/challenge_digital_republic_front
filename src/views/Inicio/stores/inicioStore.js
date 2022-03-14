import { action, makeObservable, observable } from "mobx";
import api from "../../../services/api";

class InicioStore {
  pintura = [
    {
      altura: null,
      largura: null,
      portas: null,
      janelas: null,
    },
    {
      altura: null,
      largura: null,
      portas: null,
      janelas: null,
    },
    {
      altura: null,
      largura: null,
      portas: null,
      janelas: null,
    },
    {
      altura: null,
      largura: null,
      portas: null,
      janelas: null,
    },
  ];

  latas = {
    total_lata18l: null,
    total_lata3_6l: null,
    total_lata2_5l: null,
    total_lata0_5l: null,
    litros: null,
  };

  modal = false;

  fetching = false;

  error = {
    message: "",
    open: false
  }

  handleChangePintura(target, index) {
    const { name, value } = target;
    this.pintura[index][name] = value;
  }

  toggleModal() {
    this.modal = !this.modal;
  }

  toggleError() {
    this.error.open = !this.error.open;
  }

  async calcularTinta() {
    try {
      this.fetching = true;

      const data = [];

      this.pintura.forEach((item) => {
        if (item.altura !== null && item.largura !== null) {
          data.push({
            altura: item.altura,
            largura: item.largura,
            portas: parseInt(item.portas),
            janelas: parseInt(item.janelas),
          });
        }
      });

      await api
        .post(`/pintura`, data)
        .then((response) => {
          this.latas = response.data;
          this.toggleModal();
        })
        .catch(({ response }) => {
          this.error.message = response.data;
          this.toggleError();
        });
    } finally {
      this.fetching = false;
    }
  }

  constructor() {
    makeObservable(this, {
      pintura: observable,
      latas: observable,
      modal: observable,
      error: observable,
      fetching: observable,
      handleChangePintura: action.bound,
      toggleModal: action.bound,
      toggleError: action.bound,
      calcularTinta: action.bound,
    });
  }
}

export default InicioStore;
