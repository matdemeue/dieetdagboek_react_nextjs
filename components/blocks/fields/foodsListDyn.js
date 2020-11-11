import FoodItem from "./foodItem.js";
import ExcItem from "./excItem.js";
import Totals from "./totals.js";
import { useState, useEffect } from "react";

const FoodListDynamic = () => {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  const [dinner, setDinner] = useState();
  const [ontbijt, setOntbijt] = useState();
  const [lunch, setLunch] = useState();
  const [snack, setSnack] = useState();
  const [day, setDay] = useState(new Date());
  const [totalCals, setTotalCals] = useState();
  const [exercise, setExercise] = useState();

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        `https://dieet-api.herokuapp.com/api/v1/entries/day/${yyyy}/${mm}/${dd}`
      ).catch((err) => {
        alert(err);
      });
      let resData = await response.json();

      setOntbijt(resData[0].ontbijt);
      setDinner(resData[0].dinner);
      setLunch(resData[0].lunch);
      setSnack(resData[0].snack);
    };

    const fetchTotals = async () => {
      let response = await fetch(
        `https://dieet-api.herokuapp.com/api/v1/entries/day/totals/${yyyy}/${mm}/${dd}`
      ).catch((err) => {
        alert(err);
      });
      let resData = await response.json();

      setTotalCals(resData);
    };

    const fetchExercise = async () => {
      let response = await fetch(
        `https://dieet-api.herokuapp.com/api/v1/entries/day/exercise/${yyyy}/${mm}/${dd}`
      ).catch((err) => {
        alert(err);
      });
      let resData = await response.json();

      setExercise(resData);
    };

    fetchData();
    fetchTotals();
    fetchExercise();
  }, []);

  const handleDate = (date) => {
    const year = String(date).slice(0, 4);
    const month = String(date).slice(5, 7);
    const day = String(date).slice(8, 10);

    const fetchData = async () => {
      let response = await fetch(
        `https://dieet-api.herokuapp.com/api/v1/entries/day/${year}/${month}/${day}`
      ).catch((err) => {
        alert(err);
      });
      let resData = await response.json();

      setOntbijt(resData[0].ontbijt);
      setDinner(resData[0].dinner);
      setLunch(resData[0].lunch);
      setSnack(resData[0].snack);
    };

    const fetchTotals = async () => {
      let response = await fetch(
        `https://dieet-api.herokuapp.com/api/v1/entries/day/totals/${year}/${month}/${day}`
      ).catch((err) => {
        alert(err);
      });
      let resData = await response.json();

      setTotalCals(resData);
    };

    const fetchExercise = async () => {
      let response = await fetch(
        `https://dieet-api.herokuapp.com/api/v1/entries/day/exercise/${year}/${month}/${day}`
      ).catch((err) => {
        alert(err);
      });
      let resData = await response.json();

      setExercise(resData);
    };

    fetchData();
    fetchTotals();
    fetchExercise();

    setDay(new Date(`${year}-${month}-${day}`));
  };

  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  return (
    <div id="aboutJobs" className="py-5">
      <div className="container">
        <h2 className="pb-5">
          Huidige dag:{" "}
          {`${String(day.getDate()).padStart(2, "0")}/${String(
            day.getMonth() + 1
          ).padStart(2, "0")}/${day.getFullYear()}`}
        </h2>

        <div className="row">
          <div className="col-12 pb-5">
            <input
              type="date"
              onChange={(e) => handleDate(e.target.value)}
              min="2020-10-28"
              max={`${yyyy}-${mm}-${dd}`}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="pb-3">✅ Dagtotaal:</h3>
          </div>
          {!!totalCals ? (
            <Totals
              moment={"vandaag"}
              total={2000}
              calories={totalCals[0].calories}
              burntcalories={
                !!exercise
                  ? exercise.reduce(function (tot, arr) {
                      // return the sum with previous value
                      return tot + arr.nutrition_information["calories burned"];

                      // set initial value as 0
                    }, 0)
                  : 0
              }
            />
          ) : (
            <div className="container">
              <div className="d-flex align-items-center my-5">
                <div className="spinner-border" role="status"></div>
                <p className="mb-0 ml-3">Dagtotaal wordt geladen....</p>
              </div>
            </div>
          )}
          <div className="col-12">
            <h3 className="pb-3">🥣 Ontbijt:</h3>
          </div>
          {!!ontbijt ? (
            ontbijt.length !== 0 ? (
              ontbijt.map((row, i) => <FoodItem key={i} data={row} />)
            ) : (
              <div className="container">
                <div className="d-flex align-items-center my-5">
                  <div className="spinner-border" role="status"></div>
                  <p className="mb-0 ml-3">
                    Foodies worden geladen of zijn er niet aanwezig!
                  </p>
                </div>
              </div>
            )
          ) : (
            <div className="container">
              <div className="d-flex align-items-center my-5">
                <div className="spinner-border" role="status"></div>
                <p className="mb-0 ml-3">
                  Foodies worden geladen of zijn er niet aanwezig!
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="pb-3">🥪 Lunch:</h3>
          </div>
          {!!lunch ? (
            lunch.length !== 0 ? (
              lunch.map((row, i) => <FoodItem key={i} data={row} />)
            ) : (
              <div className="container">
                <div className="d-flex align-items-center my-5">
                  <div className="spinner-border" role="status"></div>
                  <p className="mb-0 ml-3">
                    Foodies worden geladen of zijn er niet aanwezig!
                  </p>
                </div>
              </div>
            )
          ) : (
            <div className="container">
              <div className="d-flex align-items-center my-5">
                <div className="spinner-border" role="status"></div>
                <p className="mb-0 ml-3">
                  Foodies worden geladen of zijn er niet aanwezig!
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="pb-3">🍜 Dinner:</h3>
          </div>
          {!!dinner ? (
            dinner.length !== 0 ? (
              dinner.map((row, i) => <FoodItem key={i} data={row} />)
            ) : (
              <div className="container">
                <div className="d-flex align-items-center my-5">
                  <div className="spinner-border" role="status"></div>
                  <p className="mb-0 ml-3">
                    Foodies worden geladen of zijn er niet aanwezig!
                  </p>
                </div>
              </div>
            )
          ) : (
            <div className="container">
              <div className="d-flex align-items-center my-5">
                <div className="spinner-border" role="status"></div>
                <p className="mb-0 ml-3">
                  Foodies worden geladen of zijn er niet aanwezig!
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="pb-3">🍫 Snacks:</h3>
          </div>
          {!!snack ? (
            snack.length !== 0 ? (
              snack.map((row, i) => <FoodItem key={i} data={row} />)
            ) : (
              <div className="container">
                <div className="d-flex align-items-center my-5">
                  <div className="spinner-border" role="status"></div>
                  <p className="mb-0 ml-3">
                    Foodies worden geladen of zijn er niet aanwezig!
                  </p>
                </div>
              </div>
            )
          ) : (
            <div className="container">
              <div className="d-flex align-items-center my-5">
                <div className="spinner-border" role="status"></div>
                <p className="mb-0 ml-3">
                  Foodies worden geladen of zijn er niet aanwezig!
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-12">
            <h3 className="pb-3">🎾 Activiteit:</h3>
          </div>
          {!!exercise ? (
            exercise.length !== 0 ? (
              exercise.map((row, i) => <ExcItem key={i} data={row} />)
            ) : (
              <div className="container">
                <div className="d-flex align-items-center my-5">
                  <div className="spinner-border" role="status"></div>
                  <p className="mb-0 ml-3">
                    Activiteiten worden geladen of zijn er niet aanwezig!
                  </p>
                </div>
              </div>
            )
          ) : (
            <div className="container">
              <div className="d-flex align-items-center my-5">
                <div className="spinner-border" role="status"></div>
                <p className="mb-0 ml-3">
                  Activiteiten worden geladen of zijn er niet aanwezig!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default FoodListDynamic;
