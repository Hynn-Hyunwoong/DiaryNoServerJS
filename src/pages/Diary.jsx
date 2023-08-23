import { useParams } from 'react-router-dom';

export const Diary = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <h1>Diary</h1>
      <div>This Page Diary</div>
    </>
  );
};

export default Diary;
