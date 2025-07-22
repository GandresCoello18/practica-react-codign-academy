/**
 *
 * @component
 * @param {Object} props - Parámetros que recibe mi componente
 * @param {number} props.indexContact - Indice del contacto
 * @param {{  name: string, phone: string }} props.data - Datos del contacto
 * @param {Function} props.onClickEdit - Función para editar un contacto
 * @param {Function} props.onClickDelete - Función para eliminar un contacto
 * @returns {JSX.Element} - El componente ItemContact
 */
export const ItemContact = ({ indexContact, data, onClickEdit, onClickDelete }) => {
  return (
    <li>
      {indexContact + 1} / {data.name} - {data.phone}{' '}
      <span className="edit" onClick={() => onClickEdit(indexContact)}>
        #
      </span>{' '}
      <span className="close" onClick={() => onClickDelete(indexContact)}>
        X
      </span>
    </li>
  );
};
