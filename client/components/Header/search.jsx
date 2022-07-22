import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "../../styles/navbar.module.css";

const Search = () => {
    const [search, setSearch] = useState("");

    return (
        <form className={styles.searchDiv}>
            <FiSearch />
            <input
                type="search"
                placeholder="What are you looking for?"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </form>
    );
};

export default Search;
