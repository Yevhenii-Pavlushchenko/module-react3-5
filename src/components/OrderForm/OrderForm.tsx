import { useId } from "react";
import css from "./OrderForm.module.css";

export default function OrderForm() {
    //!hooks
    const nameId = useId();
    const emailId = useId();
    return (
        <>
        <form className={css["order-form"]} >
            <h2 className={css["form-title"]}>Хук useId</h2>

      <label className={css["form-label"]} htmlFor={nameId}>Text field label</label>
            <input className={css["form-input"]} type="text" id={nameId} />
      <label className={css["form-label"]} htmlFor={emailId}>Email</label>
        <input className={css["form-input"]} type="email" id={emailId} />
      
        <button  className={css["form-button"]}type="submit">Place Order</button>
    </form>
        </>
          
  );
}
