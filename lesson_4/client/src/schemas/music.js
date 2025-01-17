import * as Yup from "yup";

export const musicSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  description: Yup.string().required("Desccription is reuired"),
  image: Yup.string().required("Image is reuired"),
  price: Yup.number().required("Price is reuired"),
});
