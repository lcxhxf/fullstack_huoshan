import { useState } from "react";
const Search = ({search}) => {
    const [searchValue, setSearchValue] = useState('')
    const handleSearchInputChanges = e => {
        setSearchValue(e.target.value.trim())
    }
    const callSearchFunction = (e) => {
        e.preventDefault();
        search(searchValue)
        resetInputField();
    }
    const resetInputField = () => {
        setSearchValue('')
    }
    return (
        <form>
            <input type="text" value={searchValue} onChange={handleSearchInputChanges}/>
            <input type="submit" value="Search" onClick={callSearchFunction}/>
        </form>
    )
}
export default Search