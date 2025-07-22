import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { useForm /*, Controller*/ } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup
  .object({
    name: yup
      .string()
      .min(3, 'El nombre debe tener al menos 3 caracteres')
      .max(20, 'El nombre debe tener menos de 20 caracteres')
      .matches(/^[A-Za-z]+$/i, 'El nombre solo puede contener letras')
      .required('Por favor, ingresa tu nombre')
      .default('Andres Coello'),
    email: yup
      .string()
      .email('Escribe un email valido')
      .required('El campo email es requerido')
      .default('goyeselcoca@gmail.com'),
    age: yup
      .number()
      .positive()
      .min(0, 'La edad debe ser mayor a 0')
      .max(99, 'La edad debe ser menor a 99')
      .integer()
      .required('Ingresa una edad valida')
      .default(3),
  })
  .required();

export const FormHookView = () => {
  const {
    // control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      email: 'goyeselcoca@gmail.com',
    },
  });

  const handleForm = data => {
    console.log('data ', data);
  };

  return (
    <Fragment>
      <h1>Form Hook</h1>

      <Container className="p-5" justifyContent="center">
        <form onSubmit={handleSubmit(handleForm)}>
          {/*<Controller
                        name='name'
                        control={control}
                        render={({ field }) => (
                            <input type='text' placeholder="Escribe tu nombre" {...field}/>
                        )}
                    />*/}
          <input type="text" placeholder="Escribe tu nombre" {...register('name')} />
          <span className="text-danger">{errors.name?.message}</span>
          <input type="email" placeholder="Escribe tu correo" {...register('email')} />
          <span className="text-danger">{errors.email?.message}</span>

          <input type="number" placeholder="Escribe tu edad" {...register('age')} />
          <span className="text-danger">{errors.age?.message}</span>

          <button type="submit">Enviar</button>
        </form>
      </Container>
    </Fragment>
  );
};
