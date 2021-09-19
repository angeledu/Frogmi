/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import stores from '../api/frogmiStores';
import { Datum, FrogmeStores } from '../interfaces/storeInterface';

export const useCoords = () => {

    const [storesAct, setStoresAct] = useState<Datum[]>([]);

    useEffect(() => {
        getCoords();
    }, [ ]);

    const getCoords = async() =>{
        const resp = await stores.get<FrogmeStores>('/stores');
        setStoresAct([...resp.data.data]);
    }
    
    return (
        storesAct
    )
}
