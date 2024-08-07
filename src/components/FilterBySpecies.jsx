function FilterBySpecies({ onChangeSpecies, valueSpecies }) {
    const handleChangeSpecies = (ev) => {
        onChangeSpecies(ev.target.value);
      };
  
    return (
        <div className="form-input">
          <label className="input" htmlFor="species">Busca por especie:</label>
          <input value={valueSpecies} type="text" id="species" onChange={handleChangeSpecies} />
        </div>
      );
    }
 
export default FilterBySpecies