export  default function Item({id,name,isPacked}){
    return (
        <li id={id}>{name} {isPacked && '✅' } </li>
    )
}