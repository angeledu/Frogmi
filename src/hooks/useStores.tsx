/* eslint-disable prettier/prettier */
import { useEffect, useState } from 'react';
import stores from '../api/frogmiStores';
import { Datum, FrogmeStores } from '../interfaces/storeInterface';

export const useStores = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const [control, setControl] = useState(true);

    const [page, setPage] = useState(1);

    const [storesAct, setStoresAct] = useState<Datum[]>([]);

    useEffect(() => {
        getStores();
    }, [ page ]);

    const getStores = async() =>{
        setIsLoadingMore(true);
        const resp = await stores.get<FrogmeStores>(`/stores?page=${ page }&per_page=20`);
        setStoresAct([ ...storesAct, ...resp.data.data ]);
        setIsLoadingMore(false);
        const datax = resp.data.links.next;
        if (datax){
            setControl(true);
        } else{
            setControl(false);
        }

        setIsLoading( false);
    }

    const getMoreStores = () => {
        if (control){
            setPage( page + 1 );
        }
    }

    return {
        storesAct,
        getMoreStores,
        isLoading,
        isLoadingMore,
    }
}
