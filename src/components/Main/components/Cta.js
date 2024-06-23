
function Cta(props){
  return (
    <>
      <p className="cta">
        <a href={props.href} className={props.right ? 'right' : ''}>{props.titre}</a>
      </p>
    </>
  );
}
export default Cta;