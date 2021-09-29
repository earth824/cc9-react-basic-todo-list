function Notification({ message, color }) {
  return <div class={`alert alert-${color ?? 'danger'}`}>{message}</div>;
}

export default Notification;
