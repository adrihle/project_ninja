"use server";

import { search } from "@/app/actions";
import { SendOutlined } from "@ant-design/icons";

const Search = () => {
  return (
    <main className="container mx-auto pt-14 px-8">
      <div className="flex justify-center ">
        <form
          className="flex flex-col gap-6 w-2/4 justify-center justify-items-center rounded-lg   "
          action={search}
        >
          <input className="rounded-lg px-3 py-3 " name="search" />

          <div className="flex justify-center items-center gap-2 border border-white px-3 py-3 rounded-lg">
            <input className="text-white" type="submit" />

            <SendOutlined
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "white",
              }}
            />
          </div>
        </form>
      </div>
    </main>
  );
};

export default Search;
