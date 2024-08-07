import FilterByName from "./FilterByName";


function Filters({ onChangeName, valueName }) {
  function handleSubmit(event) {
    event.preventDefault(); 
  }
  return (
    <form onSubmit={handleSubmit}>
      <FilterByName onChangeName={onChangeName} valueName={valueName} />
    </form>
  );
}

export default Filters;
