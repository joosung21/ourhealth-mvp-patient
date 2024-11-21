import Nav1Active from '@/assets/nav1-active.svg';
import Nav2 from '@/assets/nav2.svg';
import Nav3 from '@/assets/nav3.svg';
import Nav4 from '@/assets/nav4.svg';

export default function FootNav() {
  return (
    <>
      <div className="foot-nav">
        <div className="foot-nav-item active">
          <img src={Nav1Active} alt="Home" />
          Home
        </div>
        <div className="foot-nav-item">
          <img src={Nav2} alt="Search" />
          Search
        </div>
        <div className="foot-nav-item">
          <img src={Nav3} alt="Booking" />
          Booking
        </div>
        <div className="foot-nav-item">
          <img src={Nav4} alt="Booking" />
          Setting
        </div>
      </div>
    </>
  );
}
