function FilterByName({ onChangeName, valueName }) {
    const handleChangeName = (ev) => {
      onChangeName(ev.target.value);
    };
  
    return (
      <div>
        <label className="input" htmlFor="name">Busca por nombre:</label>
        <input value={valueName} type="text" id="name" onChange={handleChangeName} />
      </div>
    );
  }

export default FilterByName