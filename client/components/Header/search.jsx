import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { SetSearch } from "../../redux/action/products.actions";
import styles from "../../styles/navbar.module.css";

const Search = () => {

    const router = useRouter();
    const [search, setSearch] = useState("");

    // const dispatch=useDispatch();

const handleSearch=(e)=>{
    e.preventDefault();
    // dispatch(SetSearch(search))
    router.push(`/products/search/${search}`)
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
