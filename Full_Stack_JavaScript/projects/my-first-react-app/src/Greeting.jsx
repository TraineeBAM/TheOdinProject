function MyComponent() {
  const animals = ["Lion", "Cow", "Snake", "Lizard", "Sheep"];

  return (
    <div>
      <h1>Animals: </h1>
      <ul>
        {animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    </div>
  );
}

export default MyComponent;