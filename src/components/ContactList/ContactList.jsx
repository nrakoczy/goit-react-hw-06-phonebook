import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

import { List, Item, Text, Button } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts?.filter(contact =>
    contact?.name?.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <List>
      {filteredContacts?.length === 0 ? (
        <Text>No contacts found.</Text>
      ) : (
        filteredContacts.map(({ id, name, number }) => (
          <Item key={id}>
            <Text>
              {name}: {number}
            </Text>
            <Button type="button" onClick={() => onDeleteContact(id)}>
              Delete
            </Button>
          </Item>
        ))
      )}
    </List>
  );
};
