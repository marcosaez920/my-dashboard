
import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { FavoritePokemons } from "@/pokemons/components/FavoritePokemons";
import { IoHeartOutline } from "react-icons/io5";



export const metadata = {
    title: 'Favoritos',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci, nemo voluptas aliquid consectetur laboriosam aperiam recusandae eos dolorem quis ipsum, architecto harum explicabo similique. Est ducimus aperiam deserunt necessitatibus.'
};



export default async function PokemonsPage() {

    return(
        <div className="flex flex-col">

            <span className="text-5xl my-2">Pokemons favoritos <small className="text-blue-500">Global State</small></span>

            
            <FavoritePokemons />

        </div>
    );
}


