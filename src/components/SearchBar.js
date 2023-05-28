function SearchBar({ searchTerm }) {
  function handleChange(e) {
    searchTerm(e.target.value);
  }
  return (
    <div>
      <input onChange={handleChange} placeholder="Type in username" />
    </div>
  );
}

export default SearchBar;
