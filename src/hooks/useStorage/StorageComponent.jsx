import { useStorage } from "./useStorage";
export function StorageComponent() {
  const [value, setValue, clear] = useStorage(
    "gigi",
    "tonno",
    window.localStorage
  );

  return (
    <>
      <div>
        <p>
          <span>{value}</span>
        </p>
      </div>

      <button onClick={() => setValue("matteo")}>matteo</button>
      <button onClick={() => setValue("paolo")}>paolo</button>
      <button onClick={() => setValue("gianni")}>gianni</button>
      <br />
      <button onClick={() => clear()}>CLEAR</button>
    </>
  );
}
// import { useSessionStorage, useLocalStorage } from "./useStorage";

// export function StorageComponent() {
//   const [name, setName, removeName] = useSessionStorage("name", "Kyle");
//   const [age, setAge, removeAge] = useLocalStorage("age", 26);

//   return (
//     <div>
//       <div>
//         {name} - {age}
//       </div>
//       <button onClick={() => setName("John")}>Set Name</button>
//       <button onClick={() => setAge(40)}>Set Age</button>
//       <button onClick={removeName}>Remove Name</button>
//       <button onClick={removeAge}>Remove Age</button>
//     </div>
//   );
// }
