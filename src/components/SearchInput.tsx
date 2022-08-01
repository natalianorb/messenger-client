import './SearchInput.css';
import { ChangeEventHandler } from 'react';

export default function SearchInput({
  onChange,
}: { onChange: ChangeEventHandler<HTMLInputElement> }) {
  return (
    <input type="text" placeholder="Search" className="search-input" onChange={onChange} />
  );
}
