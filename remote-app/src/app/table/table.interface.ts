interface IGeo {
    lat: string;
    lng: string;
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: IGeo;
}

interface ICompany {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface ITableData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress;
    phonr: string;
    website: string;
    company: ICompany;
}