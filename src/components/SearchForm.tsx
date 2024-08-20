"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";

function SearchForm() {
  const [value, setValue] = useState("");
  const router = useRouter();

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!value) return;
    router.push(`/events/${value}`);
  };
  return (
    <form onSubmit={onSubmitHandler} className="w-full sm:w-[580px]">
      <input
        value={value}
        onChange={onChangeHandler}
        className="w-full h-16 bg-white/[7%] px-6 outline-none rounded-lg ring-accent/50 transition focus:ring-2 focus:bg-white/10 "
        type="text"
        name="search-events"
        id="search-events"
        placeholder="Search events in any city....."
        spellCheck={false}
      />
    </form>
  );
}

export default SearchForm;
