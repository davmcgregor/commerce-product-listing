const Search = () => {
  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Search..."
        // value={query}
        // onChange={handleChange}
        aria-label="Search for products"
        data-testid="input"
      />
    </div>
  );
};

export default Search;
