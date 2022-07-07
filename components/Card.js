export default function Card({ member }) {
  return (
    <div className="flex justify-center">
      <div className="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
        <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
          {member.name}
        </h5>
        <p className="text-gray-700 text-base mb-4">{member.position}</p>
        <button
          type="button"
          className=" inline-block px-6 py-2.5 bg-mint-green text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-warm-pink hover:shadow-lg focus:bg-warm-yellow focus:shadow-lg focus:outline-none focus:ring-0 active:bg-warm-yellow active:shadow-lg transition duration-150 ease-in-out"
        >
          See Detail
        </button>
      </div>
    </div>
  );
}
