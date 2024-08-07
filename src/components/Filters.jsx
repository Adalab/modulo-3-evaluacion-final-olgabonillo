import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";

function Filters(onChangeName, onChangeSpecies, valueName, valueSpecies) {
  return (
    <form>
      <FilterByName onChangeName={onChangeName} valueName={valueName} />
      <FilterBySpecies
        onChangeGender={onChangeSpecies}
        valueGender={valueSpecies}
      />
    </form>
  );
}

export default Filters;
