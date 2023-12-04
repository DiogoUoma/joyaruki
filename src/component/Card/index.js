import React from 'react';
import './card.css';
import joyaruki from '../../assets/joyaruki.jpg'
import instagram from '../../assets/icons/instagram.png';
import tiktok from '../../assets/icons/tiktok.png';
import twitch from '../../assets/icons/twitch.png';
import youtube from '../../assets/icons/youtube.png';

const Card = () => {

    const apareceNaTela = (event) => {
        event.preventDefault();
        alert("Sim, você é uma PRINCESA");
    }

    const mudaTela = (site) => (event) => {
        event.preventDefault();
        if(site === "twitch") {
            window.location.replace("https://twitch.tv/joyaruki");
        } else if(site === "youtube") {
            window.location.replace("https://www.youtube.com/@joyaruki");
        }else if(site === "instagram") {
            window.location.replace("https://www.instagram.com/joy.aruki/");
        }else if(site === "tiktok") {
            window.location.replace("https://www.tiktok.com/@joy.aruki");
        }
    }

    return (
        <div className='card'>
            <div className='imageContainer'>
                <img 
                    className='imagem'
                    src={joyaruki}
                    alt="imagem Joyaruki"
                    onClick={apareceNaTela}
                />
            </div>
            <div className='text'>
                <h2 className='textDescricao'>PT: Sou a Joy, não tenho muitos amigos então espero me sentir menos sozinha aqui.
                    Sou meio indecisa, divertida e sou a melhor que possui nos jogos. 
                    Gosto de jogar Counter Strike 2, Valorant e me divertir com todos, E ODEIO O SHOGUN</h2>
                <h2 className='textDescricao'>EN: I'm Joy, I don't have many friends so I hope to feel less lonely here.
                    Im a little undecided, funny and the best player in games.
                    I like to play Contra-Ataque 2, Jogo de tiro do Lol and have fun with everyone, AND I HATE SHOGUN</h2>
            </div>
            <div className='socials'>
                <img 
                    className='iconImage' 
                    src={twitch} 
                    alt="icone twitch" 
                    onClick={mudaTela("twitch")} 
                />
                <img 
                    className='iconImage' 
                    src={youtube} 
                    alt="icone youtube"
                    onClick={mudaTela("youtube")} 
                />
                <img 
                    className='iconImage' 
                    src={instagram} 
                    alt="icone instagram"
                    onClick={mudaTela("instagram")} 
                />
                <img 
                    className='iconImage' 
                    src={tiktok} 
                    alt="icone tiktok"
                    onClick={mudaTela("titok")} 
                />
            </div>
        </div>
    )
}

export default Card;