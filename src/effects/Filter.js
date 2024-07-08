
const Filter = ({ filterData }) => {
    return (
      <div>
        {filterData.map((data) => ( // Use filterData here to map over data
          <button  key={data.id || data.title}>
            {data.title}
          </button>
        ))}
      </div>
    );
  };
  export default Filter
  