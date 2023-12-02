
export default function Notification({ type, message }) {

  if (message === null) {
    return null
  }

  return (
    <div className={type === 'add' ? 'text-center bg-green-700 text-lg p-5 rounded my-2' : 'text-center bg-red-600 text-lg p-5 rounded my-2'}>
      {message}
    </div>
  )
}
