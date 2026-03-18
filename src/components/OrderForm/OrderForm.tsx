import { useId } from "react";
import css from "./OrderForm.module.css";

export default function OrderForm() {
  const nameId = useId();
  const emailId = useId();

  // Один общий обработчик
  const handleFormSubmit = (formData: FormData) => {
    // достаю значение из каждого поля 
    const name = formData.get("username");
    const email = formData.get("email");
    const delivery = formData.get("delivery");
    //!тут getall, так как может быть несколько чекбоксов
    const restrictions = formData.getAll("restrictions");
    // Собираю всё в один объект
    const finalData = {
      name,
      email,
      delivery,
      restrictions,
    };

    console.log("All Form Data:", finalData);
  };

  return (
    <form className={css["order-form"]} action={handleFormSubmit}>
      <h2 className={css["form-title"]}>Хук useId</h2>

      {/* Input  */}
      <label className={css["form-label"]} htmlFor={nameId}>Text field label</label>
      <input className={css["form-input"]} type="text" id={nameId} name="username" />
      
      <label className={css["form-label"]} htmlFor={emailId}>Email</label>
      <input className={css["form-input"]} type="email" id={emailId} name="email" />

      {/* Radio */}
       <fieldset>
        <legend>Delivery method:</legend>

        <label>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>
            
      {/* Checkboxes  */}
      <fieldset>
        <legend>Dietary restrictions:</legend>
        <label>
          <input type="checkbox" name="restrictions" value="vegan" />
          Vegan
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="gluten-free" />
          Gluten-free
        </label>
        <label>
          <input type="checkbox" name="restrictions" value="nut-free" />
          Nut-free
        </label>
      </fieldset>

      <button className={css["form-button"]} type="submit">Place Order</button>
    </form>
  );
}

