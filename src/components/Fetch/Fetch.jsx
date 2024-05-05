import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../store/reducers/dataReducer";
import { useEffect } from "react";

function Fetch() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.data.data);
  const loading = useSelector((state) => state.data.loading);
  const error = useSelector((state) => state.data.error);

  useEffect(() => {
    console.log('Fetching data...');
    dispatch(fetchData());
  }, [dispatch]);

  console.log('Data:', data);
  console.log('Loading:', loading);
  console.log('Error:', error);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
}

export default Fetch;
