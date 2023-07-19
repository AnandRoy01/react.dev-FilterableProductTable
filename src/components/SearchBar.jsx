import PropTypes from "prop-types";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  return (
    <form>
      <input
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />{" "}
        Only show products in stock
      </label>
    </form>
  );
};

SearchBar.propTypes = {
  filterText: PropTypes.string,
  inStockOnly: PropTypes.bool,
  onFilterTextChange: PropTypes.func,
  onInStockOnlyChange: PropTypes.func,
};

export default SearchBar;
