import style from "./SearchBox.module.css";

const SearchBox = ({ filter, onFilter }) => {
  return (
    <div className={style.wrapper}>
      <label className={style.label} htmlFor="search">
        Find contacts by name
      </label>
      <input
        id="search"
        className={style.input}
        type="text"
        name="search"
        value={filter}
        onChange={(event) => onFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
