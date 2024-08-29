import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.name) {
    errors.name = "Nome é obrigatório";
  }
  if (!values.email) {
    errors.email = "Endereço de email é obrigatório";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Formato inválido do endereço de email";
  }
  if (!values.message) {
    errors.message = "Mensagem é obrigatória";
  }
  
  if (!values.numero) {
    errors.message = "Número é obrigatório";
  }
  return errors;
}
