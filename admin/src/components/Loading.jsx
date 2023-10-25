import loader from "../assets/loader.gif";

function Loading() {
  return (
    <div className="text-center text-black font-bold m-auto ">
      <div className="m-auto">
        <img src={loader} alt="mana" className="m-auto" />
        <span className="loading loading-dots loading-sm"></span>
      </div>
    </div>
  );
}

export default Loading;
