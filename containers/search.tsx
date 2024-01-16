'use client'

import { useURL } from "@/hooks";
import { SendOutlined } from "@ant-design/icons";

const Search = () => {
  const { setQuery } = useURL();

  const onSubmit = (e: any) => {
    e.preventDefault();
    const channel = e.target[0].value;
    setQuery({ channel, page: 1 });
  };

  return (
    <main className="container mx-auto pt-14 px-8">
      <div className="flex justify-center ">
        <form
          className="flex flex-col gap-6 w-2/4 justify-center justify-items-center rounded-lg   "
          onSubmit={onSubmit}
        >
          <input className="rounded-lg px-3 py-3 " name="channel" />

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
