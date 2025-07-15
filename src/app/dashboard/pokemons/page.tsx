
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";


export async function generateMetadata (): Promise<Metadata> {

    try {

        return{
            title: 'Listado Pokemon',
            description: 'Página con lista de los pokemons',
        }
        
    } catch (error) {
        return{
            title: 'Página del Pokemon',
            description: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati fuga, delectus ipsa dignissimos, laudantium ea at deleniti dolorum incidunt tempora nulla. Cumque iste nihil enim vel harum numquam quaerat molestias!`,
        }
    }
}

const getPokemons = async( limit = 20, offset = 0 ): Promise<SimplePokemon[]> => {
    const data: PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
        .then( res => res.json() );

        const pokemons = data.results.map( pokemon => ({
            id: pokemon.url.split('/').at(-2)!,
            name: pokemon.name,
        }) )

        return pokemons;
}





export default async function PokemonsPage() {

    const pokemons = await getPokemons(151);

    return(
        <div className="flex flex-col">

            <span className="text-5xl my-2">Listado de Pokemons <small className="text-blue-500">estático</small></span>

            <PokemonGrid pokemons = { pokemons } />
        </div>
    )
}