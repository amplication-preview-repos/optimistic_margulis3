import { CrudLog as TCrudLog } from "../api/crudLog/CrudLog";

export const CRUDLOG_TITLE_FIELD = "action";

export const CrudLogTitle = (record: TCrudLog): string => {
  return record.action?.toString() || String(record.id);
};
