export default function Profile({ person }) {
  return (
    <div>
      <p className="font-bold">Address</p>
      <p className="text-xs mt-2 text-gray-600">{person.address}</p>
      <p className="font-bold mt-3">Email</p>
      <p className="text-xs mt-2 text-gray-600">{person.email}</p>
      <p className="font-bold mt-3">Phone</p>
      <p className="text-xs mt-2 text-gray-600">{person.phone}</p>
    </div>
  );
}
