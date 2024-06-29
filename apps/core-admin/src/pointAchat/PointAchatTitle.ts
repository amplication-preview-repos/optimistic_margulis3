import { PointAchat as TPointAchat } from "../api/pointAchat/PointAchat";

export const POINTACHAT_TITLE_FIELD = "id";

export const PointAchatTitle = (record: TPointAchat): string => {
  return record.id?.toString() || String(record.id);
};
