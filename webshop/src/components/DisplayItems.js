import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { faGifts } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

export default function DisplayItems() {
  return(
    <div class="item-display">
      <div className='item'>
        <FontAwesomeIcon icon={faGifts} className="faicon" />
        <h1>Egyedi termékek</h1>
        <p>Minden termékem egyedileg, kézzel készül a legnagyobb odafigyeléssel.</p>
      </div>
      <div className='item'>
        <FontAwesomeIcon icon={faHeart}  className="faicon" />
        <h1>Prémium minőségű alapanyagok</h1>
        <p>A termékek elkészítéséhez kizárólag prémium minőségű alapanyagokat használok.</p>
      </div>
      <div className='item'>
        <FontAwesomeIcon icon={faTruckFast} className="faicon" />
        <h1>Gyors kiszállítás</h1>
        <p>A terméket elkészülte után 1-2 napon belül házhozszállítjuk.</p>
      </div>
    </div>
  )
}
