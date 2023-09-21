import css from './ContactList.module.css';

export const ContactList = ({ contacts, onDeleteContact }) => {
   return (
      <ul className={css.contactList}>
         <li className={css.contactListHead}>
            <p className={css.contactListText}>Name</p>
            <p className={css.contactListText}>Phone</p>
         </li>
         {contacts.map(({ id, name, number }) => (
            <li key={id}>
               <p className={css.contactListText}>{name}</p>
               <p className={css.contactListText}>{number}</p>
               <button type="button" className={css.delButton} onClick={() => onDeleteContact(id)}>Delete</button>
            </li>
         ))}
      </ul>
   );
};