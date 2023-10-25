function ModalCast({ id, casts }) {
  return (
    <dialog id={id + "-cast"} className="modal m-auto">
      <div className="modal-box bg-white text-black">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <div className="flex mb-3">
          <div className="m-auto">
            <div className="bg-cover md:w-60 md:h-72 m-auto rounded" style={{ backgroundImage: `url(${casts[0].Cast.profilePict})` }}></div>
            {/* <img src={casts[0].Cast.profilePict} alt={casts[0].Cast.name} className="w-60 h-72 m-auto rounded" /> */}
            <p className="text-center font-semibold mt-2">{casts[0].Cast.name}</p>
          </div>
        </div>
        {casts.length > 1 ? (
          <div className="flex">
            <div className="m-auto">
              <div className="flex gap-2">
                {casts.slice(1).map((e) => (
                  <div key={e.id + "castmodal"}>
                    <div className="bg-cover md:w-24 md:h-28 m-auto rounded" style={{ backgroundImage: `url(${e.Cast.profilePict})` }}></div>
                    <p className="font-semibold text-center text-xs mt-2">{e.Cast.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </dialog>
  );
}

export default ModalCast;
