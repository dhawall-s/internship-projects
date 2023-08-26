import { Link } from "react-router-dom";
function NnavBar()
{

   return(
    <>
    <ul >
  <li> <Link to="/hello" className="active">home</Link></li>
  <li>< Link to="/">Countcomp</Link></li>
  <li>< Link to="/fi">Contact</Link></li>
  <li>< Link to="/hi">About</Link></li>
  <li><Link to ="/post/:id">ParentComp</Link></li>
  <li><Link to ="/roast/:id">Blogs</Link></li>
  <li><Link to ="/posts/:id">Blogs</Link></li>
</ul>
    </>
   );
}
export default NnavBar;