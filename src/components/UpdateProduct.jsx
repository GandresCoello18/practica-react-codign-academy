import { Container } from "react-bootstrap";
import { toast } from 'sonner'
import { updateProductByIdAxios } from '../api/product.api';
import { useForm } from 'react-hook-form';

export const UpdateProduct = ({ setOpenModal, setProduct, product }) => {
const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm({
    // resolver: yupResolver(schema),
    defaultValues: {
      title: product?.title,
      name: product?.seller_full_name,
      price: product?.price,
      rating: product?.rating,
      img: product?.image
    },
  });

    const handleUpdateProduct = async (data) => {
        try {
            const formData = new FormData();

            formData.append('title', data.title);
            formData.append('seller_full_name', data.name);
            formData.append('price', data.price);
            formData.append('rating', data.rating);

            console.log('data ', data);

            if (Array.isArray(data?.img) && data.img?.length) {
                formData.append('image', data.img[0]);
            }

            const updateProduct = await updateProductByIdAxios({ id: product.id, data: formData });
            console.log('updateProduct ', updateProduct);
            setProduct(updateProduct);

            toast.success('Producto actualizado');
            document.getElementById('formNewProduct').reset();
            setOpenModal(false);
        } catch (error) {
            console.log('err ', error, error.message);
            toast.error(error.message);
        }
    }

    return (
        <Container>
            <form id="formNewProduct" onSubmit={handleSubmit(handleUpdateProduct)}>
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