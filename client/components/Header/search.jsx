import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import styles from "../../styles/navbar.module.css";

const Search = () => {

    const router = useRouter();
    const [search, setSearch] = useState("");


const handleSearch=(e)=>{
    e.preventDefault();
    router.push(`/products/search/?q=${search}`)
}

    return (
        <form onSubmit={(e)=>handleSearch(e)} className={styles.searchDiv}>
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
