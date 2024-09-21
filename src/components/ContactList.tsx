import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const contacts = ['张三', '李四', '王五', '赵六'];

function ContactList() {
  return (
    <List>
      {contacts.map((contact, index) => (
        <ListItem button key={index}>
          <ListItemText primary={contact} />
        </ListItem>
      ))}
    </List>
  );
}

export default ContactList;
