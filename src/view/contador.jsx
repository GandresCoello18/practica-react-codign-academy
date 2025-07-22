import { useCount } from '../hooks/count.hooks';

export const ContadorView = () => {
  const { count, handleClickSuma, handleClickResta } = useCount();

  return (
    <div>
      <h1>Contador</h1>

      <br />

      <span style={{ fontSize: 40, marginRight: 10 }}>{count}</span>
      <button onClick={handleClickSuma}>Incremento</button>
      <button onClick={handleClickResta}>Decremento</button>
    </div>
  );
};
