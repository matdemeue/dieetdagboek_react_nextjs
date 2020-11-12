const ExcItem = (props) => {
  return (
    <div className="col-lg-6" style={{ marginBottom: "30px" }}>
      <div class="card">
        <div class="card-header">{props.data.name}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            {props.data.nutrition_information.minutes} minuten
          </li>
          <li class="list-group-item">
            {props.data.nutrition_information["calories burned"]} kcal verbrand
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ExcItem;
