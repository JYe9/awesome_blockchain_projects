import React from "react";
import { BsSearch } from "react-icons/bs";

const HeaderSearch = () => {
  return (
    <form action="#" class="float-left header-search">
      <div class="form-group mb-0 icon-input">
        <i class=" font-sm text-grey-400">
          <BsSearch />
        </i>
        <input
          type="text"
          placeholder="Start typing to search.."
          class="bg-grey border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-500 rounded-xl w350 theme-dark-bg"
        />
      </div>
    </form>
  );
};

export default HeaderSearch;
