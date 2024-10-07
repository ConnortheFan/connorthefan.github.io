import LikeButton from "./like-button";

function Header({ title }) {
    return (<h1>{title ? title : "Default"}</h1>);
}

export default function HomePage() {

    const names = ["Me", "Me When", "Lol"];

    
    
    return (
        <div>
            <Header title="React" />
            <Header />
            <ul>
                {names.map( (name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
            <LikeButton />
        </div>
    );
}
