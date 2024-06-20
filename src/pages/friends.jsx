export function Friends() {
  return (
    <div className="friends-wrapper">
      <h2 className="friends-header">Invite your frends!</h2>
      <button className="friends-btn">
        <img
          className="friends-btn-img"
          src="./images/tg-inv.webp"
          width={100}
          height={100}
        />
        <p className="btn-text">Invite a friend</p>
      </button>
      <button className="friends-btn">
        <img
          className="friends-btn-img"
          src="./images/tg-prem.png"
          width={100}
          height={100}
        />
        <p className="btn-text">Invite a friend with TG Prem</p>
      </button>
    </div>
  );
}
