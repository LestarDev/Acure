import tupleBuilder from "../shared/touplesBuilder";

type ServersType = "Duels" | "OneBlock+";

const servers = tupleBuilder<ServersType>().add("Duels").add("OneBlock+").build();

const isWithApiTest = (name: string): number => servers.indexOf(name as any) ?? -1

export const isWithApi = (name: string): boolean => isWithApiTest(name)!=-1

export default ServersType