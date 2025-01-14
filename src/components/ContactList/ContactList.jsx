import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import style from "./ContactList.module.css";

const ContactList = ({ onDelete }) => {
  const items = useSelector((state) => state.contacts.items);

  return (
    <ul className={style.list}>
      {items.map(({ id, name, number }) => {
        return (
          <li className={style.item} key={id}>
            <Contact name={name} number={number} onDelete={onDelete} id={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
