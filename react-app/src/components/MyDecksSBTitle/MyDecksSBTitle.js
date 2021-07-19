import "./MyDecksSBTitle.css";

const MyDecksSBTitle = () => {
  return (
    <>
      <div id="outer-div">
        <div id="my-decks-text">
          <text>My Decks</text>
        </div>
        <div>
          <button>
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
      <hr></hr>
    </>
  );
};

export default MyDecksSBTitle;
