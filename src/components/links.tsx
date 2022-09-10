const links = ['twitter', 'instagram', 'google'];
export function Links() {
 return (
   <div>
   {links.map(l => <p>{l}</p>)}
   </div>
 )
}
