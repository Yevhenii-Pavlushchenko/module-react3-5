import { useEffect, useState } from "react";

export default function LocalStorageBtn() {
  //!Состояние для хранения количества кликов
  const [clicks, setClicks] = useState(() => {
    //!Выгрузка данных из localStorage
    const savedClicks = window.localStorage.getItem("saved-clicks");
    if (savedClicks !== null) {
      return JSON.parse(savedClicks);
    }
    return 0;
  });

  //!Загрузка данных в localStorage при монтировании компонента
  useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
  }, [clicks]);
  return (
    <div>
      <button
        onClick={() => {
          setClicks(clicks + 1);
        }}
      >
        Your clicked {clicks} times
      </button>
      <button
        onClick={() => {
          setClicks(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
