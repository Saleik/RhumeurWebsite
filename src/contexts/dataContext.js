import React, { useState, useEffect } from 'react'
import sanityClient from '../utils/client'

const DataContext = React.createContext({});

export const DataProvider = props => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const query = `{
                    "menu": *[_type == "menu"]{
                        "logo":{
                            "alt":caption,
                            "url":logo.asset->url,
                        },
                        eshopLink,
                        "socialMedia":{
                            facebook,
                            instagram
                        }
                    }[0],
                    "accueil":*[_type =="homepage"]{
                        "image":{
                            caption,
                            "url":background.asset->url
                        },
                        text,
                    }[0],
                    "fabrication":*[_type =="manufacture"]{
                        "video":{
                            caption,
                            link
                        },
                        text,
                    }[0],
                    "bestSellersIntroduce":*[_type == "productIntroduce"]{
                      text,
                    }[0],
					"bestSellers":*[_type == "products"]{

                       "image": picture.asset->url,
                        alt,
                        name,
                        resume,
                      	link
                    }[0...4],
                    "bestSellersSpice":*[_type == "productsSpice"]{

                       "image": picture.asset->url,
                        alt,
                        name,
                        resume,
                      	link
                    }[0...4],
					"bestSellersFruit":*[_type == "productsFruit"]{

                       "image": picture.asset->url,
                        alt,
                        name,
                        resume,
                      	link
                    }[0...4],
                    "quiSommesNousIntroduction": *[_type == "whoWeAreIntroduce"]{
                        text,
                    }[0],
                    "quiSommesNous": *[_type == "whoWeAre"]{
                      "image": picture.asset->url,
                      firstName,
                      presentation
                    },
                    "quiSommesNousGalerie":*[_type =="gallery"]{
                   	"image":image.asset->url,
                    caption,
                    texte
                    }[0...6],
                }`

    //fetch data to sanity studio
    useEffect(() => {
        sanityClient.fetch(query)
            .then((freshData) => {
                setData(freshData);
                setIsLoading(false);
            })
            .catch((err) => {
                setError(err);
                setIsLoading(false);
            });

    }, [query, setData, setError])

    return (
        <DataContext.Provider value={{ data, error, isLoading }}>
            {props.children}
        </DataContext.Provider>
    )
}

export const useData = () => React.useContext(DataContext);

