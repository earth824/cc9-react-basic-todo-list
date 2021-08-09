function RemainingMessage({ remaining }) {
  // { remaining: length }
  // #1
  // let classes = 'alert text-center ';
  // if (remaining) {
  //   classes += 'alert-danger';
  // } else {
  //   classes += 'alert-success';
  // }

  // #1
  // return <div className={classes}>{remaining ? `${remaining} Task Remaining` : 'No Task Left'}</div>;

  // #2
  return (
    <div className={`alert alert-${remaining ? 'danger' : 'success'} text-center`}>
      {remaining ? `${remaining} Task Remaining` : 'No Task Left'}
    </div>
  );
}

export default RemainingMessage;
