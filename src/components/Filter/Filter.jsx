import css from './Filter.module.css';

export const Filter = ({ name, handleFilterChange }) => (
   <label className={css.label}>
      <span className={css.labelText}>Find contacts by name</span>
      <input
         className={css.input}
         type="text"
         name="filter"
         value = {name}
         placeholder='Enter contact name'
         onChange={handleFilterChange}
      />
   </label>
);