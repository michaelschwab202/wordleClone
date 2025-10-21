import './Components.css';

export default function WordleBlock({value, color})
{
    return <div className={"wordleBlock" + " " + color}>{value}</div>
}