import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';

const Filter = (props) => {

	const {
		getCars,
    setCars,
	} = props;
  

    const filter = () => {
        var duration = document.getElementById("duration").value;
        var distance = document.getElementById("distance").value;
    
        if (duration && distance) {
          getCarsByDurationAndDistance(duration, distance);
        }
      }


      const getCarsByDurationAndDistance = (duration, distance) => {
        let mounted = true;
        getCars('cars.json?duration='+duration+'?distance='+distance)
          .then(items => {
            if(mounted) {
                setCars(items)
            }
          })
      }


      return (
        <div>
            <div class="container d-flex flex-row">
              <div class="d-flex flex-row">
                <div class="row">
                <div class="d-flex flex-row p-2">
                    <input placeholder="1-30" class="form-control" type="number" step="1" min="1" max="30" id="duration"/>
                    <div class="input-group-append">
                      <span class="input-group-text" id="basic-addon2">Jours</span>
                    </div>
                </div>
                <div class="d-flex flex-row p-2">
                    <input placeholder="50-3000" class="form-control" type="number" step="10" min="50" max="3000" id="distance"/>
                    <div class="input-group-append">
                        <span class="input-group-text" id="basic-addon">Km</span>
                    </div>
                </div>
                </div>
                <div class="p-2 d-flex align-items-center">
                  <Button class="btn btn-primary" type="submit" onClick={() => filter()}>Envoyer</Button>
                </div>
            </div>
            </div>
          </div>
      );
  }
  
  export default Filter;