const EventCard = () => {
  return (
    <div>
      <article className="card">
        <img
          className="card_img"
          src="https://scontent.fctg1-4.fna.fbcdn.net/v/t1.6435-9/52441737_538848883273779_8791250476646531072_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=IPkUM79DI3IAX_7_9_e&_nc_ht=scontent.fctg1-4.fna&oh=00_AfC3aUuxduDPIkOsLV3Ji0XpBDL21hmoPZU7WjAfWE_ahw&oe=63F4C942"
          alt="perro con corbartin"
        />
        <button className="card_button">❤</button>
        <article className="card_content">
          <h2 className="card_tittle">Concierto de Lady Gaga</h2>
          <p className="card_p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            quae quisquam eligendi sapiente nihil eius id sint in?
          </p>
          <a className="card_link" href="ladygaga.com">
            ladygaga.com
          </a>
          <p className="card_votes">90.800.756 votos</p>
        </article>
      </article>
    </div>
  );
};

export default EventCard;
