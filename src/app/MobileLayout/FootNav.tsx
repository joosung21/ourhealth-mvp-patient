export default function FootNav() {
  return (
    <>
      <div className="foot-nav">
        <div className="foot-nav-item active">
          <img src="/src/assets/nav1-active.svg" alt="Home" />
          Home
        </div>
        <div className="foot-nav-item">
          <img src="/src/assets/nav2.svg" alt="Search" />
          Search
        </div>
        <div className="foot-nav-item">
          <img src="/src/assets/nav3.svg" alt="Booking" />
          Booking
        </div>
        <div className="foot-nav-item">
          <img src="/src/assets/nav4.svg" alt="Booking" />
          Setting
        </div>
      </div>
    </>
  );
}
