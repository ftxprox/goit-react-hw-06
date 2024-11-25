import s from './SearchBox.module.css';

export default function SearchBox ({filter, onFilterChange}){
    return (
    <div className={s.searchBox}>
      <label className={s.labelFilter}>Find contacts by name</label>
      <input
        type="text"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className={s.inputFilter}
      />
    </div>
  );    
}