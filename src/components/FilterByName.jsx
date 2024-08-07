function FilterByName({ onChangeName, valueName }) {
    const handleChangeName = (ev) => {
      onChangeName(ev.target.value);
    };
  
    return (
      <div>
        <label className="input" htmlFor="name"></label>
        <input className="input" value={valueName} type="text" id="name"  placeholder="Busca tu personaje..." onChange={handleChangeName} />
      </div>
    );
  }

export default FilterByName