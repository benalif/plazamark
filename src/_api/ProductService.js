import Axios from "axios";
import { PRODUCT_URL } from "../_util/resources";

export const getProducts = (setProducts) => {
  Axios.get(PRODUCT_URL)
    .then((response) => {
      console.log(response.data);
      setProducts(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
};
