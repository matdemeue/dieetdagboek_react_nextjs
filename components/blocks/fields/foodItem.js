import Link from 'next/link'
import { v4 as uuidv4 } from 'uuid';

const FoodItem = props => {

    return (
      <div className="col-lg-6" style={{marginBottom: '30px'}}>
        <div class="card">
          <div class="card-header">
            {props.data.gerecht}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{props.data.calories} kcal</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default FoodItem;