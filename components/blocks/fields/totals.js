import Link from "next/link";
import { v4 as uuidv4 } from "uuid";

const Totals = (props) => {
  const totaltoday = props.total + props.burntcalories - props.calories;

  return (
    <div className="col-12" style={{ marginBottom: "30px" }}>
      <div
        class={
          totaltoday > 500
            ? "card text-white bg-success"
            : totaltoday < 0
            ? "card text-white bg-danger"
            : "card text-white bg-warning"
        }
      >
        <div class="card-header">Energieverhouding {props.moment}</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item text-dark">{`${totaltoday} kcal over vandaag!`}</li>
        </ul>
      </div>
    </div>
  );
};

export default Totals;
