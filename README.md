# useParams

```js
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
```

# useSearchParams

```js
import { useSearchParams } from 'react-router-dom';

export const Edit = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  console.log(id);
  console.log(mode);
  return (
    <>
      <h1>Edit</h1>
      <div>This Page Edit</div>
      <button onClick={() => setSearchParams({ who: 'Hynn' })}>
        QS Change
      </button>
    </>
  );
};
```

# useNavigate

```js
import { useNavigate, useSearchParams } from 'react-router-dom';

export const Edit = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get('id');
  const mode = searchParams.get('mode');

  console.log(id);
  console.log(mode);
  return (
    <>
      <h1>Edit</h1>
      <div>This Page Edit</div>
      <button onClick={() => setSearchParams({ who: 'Hynn' })}>
        QS Change
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Home
      </button>
      <button onClick={() => navigate(-1)}>Back</button>
    </>
  );
};
```
