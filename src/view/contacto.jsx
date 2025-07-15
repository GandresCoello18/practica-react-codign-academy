import { Fragment, useState } from 'react';
import { ItemContact } from '../components/itemContact';
import '../styles/contacto.css';

export const ContactView = () => {
    const [name, setName] = useState(null);
    const [phone, setPhone] = useState(null);
    const [contacts, setContacts] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (!name || !phone) {
            alert('Debes ingresar el nombre y el número del contacto');
            return;
        }

        // const listaActual = contacts;
        const newContact = { name, phone };
        // listaActual.push(newContact);
        setContacts([ ...contacts, newContact ]);
        setName(null);
        setPhone(null);
    }

    /*const handleClickCloseContact = (phone) => {
        console.log('click en close ', phone);
        const updateContacts = contacts.filter(contact => contact.phone !== phone);
        setContacts(updateContacts);
    }*/

    const handleClickCloseContact = (index) => {
        console.log('click en close ', index);
        const updateContacts = contacts.filter((_, indexContact) => index !== indexContact);
        setContacts(updateContacts);
    }

    const handleClickEditContact = (index) => {
        console.log('click en edit ', index);
        // const updateValueContact = prompt(`Actualiza el numero de teléfono de ${contacts[index].name}`);

        const findContact = contacts.find((_, indexContact) => index === indexContact);
        if (!findContact) return;

        const updateValueContact = prompt(`Actualiza el numero de teléfono de ${findContact.name}`);
        console.log('updateValueContact ', updateValueContact);
        const updateContacts = contacts.map((contact, indexContact) => {
            if (index === indexContact) {
                return { ...contact, phone: updateValueContact };
            }
            return contact;
        });
        setContacts(updateContacts);
    }

    const handleClearContacts = () => {
        setContacts([]);
        setName(null);
        setPhone(null);
    }

    return (
        <Fragment>
            <div className='container'>
                <h2>Añadir contacto</h2>

                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Nombre del contacto' onChange={event => setName(event.target.value)} />
                    <input type='number' placeholder='Número del contacto' onChange={event => setPhone(event.target.value)} />
                    <button type='submit'>Agregar contacto</button>
                </form>
            </div>

            <div className='container'>
                <h2>Lista de contactos</h2>

                {contacts.length === 0 && <p>No hay contactos para mostrar</p>}

                <ul>
                    {contacts.map((contact, index) => (
                        <ItemContact key={index} indexContact={index} data={contact} onClickEdit={handleClickEditContact} onClickDelete={handleClickCloseContact} />
                    ))}
                </ul>

                {contacts.length > 0 && <button onClick={handleClearContacts}>Limpiar contactos</button>}
            </div>
        </Fragment>
    )
}
