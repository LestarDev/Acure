import tupleBuilder from "../shared/touplesBuilder";

export type SetPageType = React.Dispatch<React.SetStateAction<number>>;

type PageType = {
    setPage: SetPageType,
    pageNr?: number
}

// export type AdvancedPageType<T> = {[Key in keyof PageType as PageType[Key] extends Required<PageType>[Key] ? Key : "pageNr"]-?: PageType[Key]} & T

// type ChangeToPageName<val> = {[key in keyof val as val[key] extends PageType['pageNr'] ? 'pageName' : key]: val[key]}
export type possiblePagesNamesType = "Strona Główna" | "Voucher" | "Sklep" | "Login" | "DOŁĄCZ DO GRY" | "Duels";


export type AdvancedPageType<T, isPageName = false> = isPageName extends true ? 
    T & {[Key in keyof PageType as PageType[Key] extends PageType['pageNr'] ? 'pageName' : Key]-?: PageType[Key] extends PageType['pageNr'] ? possiblePagesNamesType : PageType[Key]} : 
    T & {[Key in keyof PageType]-?: PageType[Key]}


const possiblePagesNames = tupleBuilder<possiblePagesNamesType>().add("Strona Główna").add("Voucher").add("Sklep").add("Login").add("DOŁĄCZ DO GRY").add("Duels").build();

export const getPageName = (pageNr: number) => {
    console.log('getPageName:', pageNr, possiblePagesNames[pageNr])
    return possiblePagesNames[pageNr];
}

export const getPageNumber = (pageName: possiblePagesNamesType): number => possiblePagesNames.indexOf(pageName);


export default PageType