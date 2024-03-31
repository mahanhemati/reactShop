import styles from "./SearchBar.module.css";
import { MdManageSearch } from "react-icons/md";
function SearchBar({handler , state , setSate , selectState , selectHandler}) {
  return (
    <div className={styles.search}>
      <input type="text" placeholder="Search..." value={state} onChange={(e)=>{setSate(e.target.value)}}/>
      <button onClick={handler}>
        <MdManageSearch />
      </button>
      <select onChange={selectHandler}>
        <option value="terding">Good</option>
        <option value="populer">Bad</option>
      </select>
    </div>
  );
}

export default SearchBar;
