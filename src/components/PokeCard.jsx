export default function PokeCard({ PokeData }) {
  return (
    <>
      {PokeData.map((poke) => {
        const name = poke.name;
        const number = poke.id;
        const sprite = poke.sprites.front_default;
        const abilities = poke.abilities.map((ablArr) => {
          const ability = ablArr.ability.name;
          const capAbility = ability.charAt(0).toUpperCase() + ability.slice(1);
          return (
            <span key={ability} className="abilities">
              {capAbility + " / "}
            </span>
          );
        });

        const pkmTypes = poke.types.map((typeArr) => {
          const typeName = typeArr.type.name;
          const classTypeName = "pkm-type m-auto mb-2 " + typeName;

          return (
            <span key={typeName} className={classTypeName}>
              {typeName.toUpperCase()}
            </span>
          );
        });

        return (
          <div
            className={`pokecard ${
              pkmTypes[0].key + "-bg"
            } rounded-lg p-4 flex flex-col transition-all hover:scale-105`}
            key={number}
          >
            <h2 className="poke-id font-mono text-xl text-stone-700">
              #{number}
            </h2>
            <img className="poke-sprite" src={sprite}></img>
            <h2 className="poke-name font-mono text-xl m-auto">
              {name.toUpperCase()}
            </h2>
            {pkmTypes}
            <p>Abilities: {abilities}</p>
          </div>
        );
      })}
    </>
  );
}
