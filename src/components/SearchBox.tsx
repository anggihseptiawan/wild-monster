import React, { ChangeEvent } from "react";

interface SearchBoxProps {
  placeholder: string;
  handleChange: (e: ChangeEvent) => void;
}

export const SearchBox = ({ placeholder, handleChange }: SearchBoxProps) => (
  <div className="flex justify-center">
    <input
      type="search"
      className="rounded-md border mt-8 mb-4 px-4 py-2"
      placeholder={placeholder}
      onChange={(e) => handleChange(e)}
    />
  </div>
);
