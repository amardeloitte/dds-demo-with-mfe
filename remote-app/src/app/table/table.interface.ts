interface ICompanyData {
    name: string;
    catchPhrase: string;
    bs: string;
}

export interface ITableData {
    id: number;
    name: string;
    username: string;
    email: string;
    address: object;
    phone: string;
    website: string;
    company: ICompanyData;
}