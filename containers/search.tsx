'use server'

import { search } from "@/app/actions";

const Search = () => {
  return (
    <div>
      <form action={search} >
        <input name="search" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Search;
