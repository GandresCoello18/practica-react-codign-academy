import { Container } from "react-bootstrap";
import { toast } from 'sonner'
import { newProductAxios } from '../api/product.api';
import { useForm } from 'react-hook-form';

export const NewProduct = ({ setOpenModal, setProducts }) => {
const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
  });

    const handleNewProduct = async (data) => {
        try {
            const formData = new FormData();

            formData.append('title', data.title);
            formData.append('seller_full_name', data.name);
            formData.append('price', data.price);
            formData.append('rating', data.rating);
            formData.append('image', data.img[0]);

            const newProduct = await newProductAxios({ data: formData });
            setProducts(prev => [...prev, newProduct]);

            toast.success('Producto creado');
            document.getElementById('formNewProduct').reset();
            setOpenModal(false);
        } catch (error) {
            console.log('err ', error, error.message);
            toast.error(error.message);
        }
    }

    return (
        <Container>
            <form id="formNewProduct" onSubmit={handleSubmit(handleNewProduct)}>
                <div className="mb-3">
                    <label id="title">Titulo</label>
                    <input type='text' {...register('title')} className="w-full p-2 border border-gray-300" />
                </div>

                <div className="mb-3">
                    <label id="name">Full Name</label>
                    <input type='text' {...register('name')} className="w-full p-2 border border-gray-300" />
                </div>

                <div className="mb-3">
                    <label id="price">Precio</label>
                    <input type='number' {...register('price')} className="w-full p-2 border border-gray-300" />
                </div>

                <div className="mb-3">
                    <label id="rating">Calificación</label>
                    <input type='number' {...register('rating')} className="w-full p-2 border border-gray-300" />
                </div>

                <div className="mb-3">
                    <label id="img">Imagen</label>
                    <input type='file' {...register('img')} className="w-full p-2 border border-gray-300" />
                </div>

                <button type="submit" className="w-100 bg-primary text-white font-bold py-2 px-4 rounded">Guardar</button>
            </form>
        </Container>
    )
}