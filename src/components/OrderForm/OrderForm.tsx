import { useId } from "react";
import css from "./OrderForm.module.css";

export default function OrderForm() {
  const nameId = useId();
  const emailId = useId();
  const selectId = useId();

  // Один общий обработчик
  const handleFormSubmit = (formData: FormData) => {
    // достаю значение из каждого поля
    const name = formData.get("username");
    const email = formData.get("email");
    const delivery = formData.get("delivery");
    //!тут getall, так как может быть несколько чекбоксов
    const restrictions = formData.getAll("restrictions");
    const deliveryTime = formData.get("deliveryTime") as string;

    // Собираю всё в один объект
    const finalData = {
      name,
      email,
      delivery,
      restrictions,
      deliveryTime,
    };

    console.log("All Form Data:", finalData);
  };

  return (
    <form className={css["order-form"]} action={handleFormSubmit}>
      <h2 className={css["form-title"]}>Хук useId</h2>

      {/* Input  */}
      <label className={css["form-label"]} htmlFor={nameId}>
        Name
      </label>
      <input
        className={css["form-input"]}
        type="text"
        id={nameId}
        name="username"
        placeholder="Enter your name"
      />

      <label className={css["form-label"]} htmlFor={emailId}>
        Email
      </label>
      <input
        className={css["form-input"]}
        type="email"
        id={emailId}
        name="email"
        placeholder="Enter your email"
      />

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

      {/* Selected  */}
      <div className={css["form-group"]}>
        <label className={css["form-label"]} htmlFor={selectId}>Preferred delivery time</label>
        <select 
          className={css["form-input"]}
          name="deliveryTime"
          id={selectId}
          defaultValue=""
        >
          <option value="">-- Choose delivery time --</option>
          <option value="morning">Morning (8:00–12:00)</option>
          <option value="afternoon">Afternoon (12:00–16:00)</option>
          <option value="evening">Evening (16:00–20:00)</option>
        </select>
      </div>

      <button className={css["form-button"]} type="submit">
        Place Order
      </button>
    </form>
  );
}
