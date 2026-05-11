import { Transaction } from "@/types/db-types";
import { PgTable } from "drizzle-orm/pg-core";
import {
  type TopicsBySlugMap,
  getTopicsBySlugMap,
} from "./seeder-utils/topicsBySlug";
import { InferInsertModel } from "drizzle-orm";

export async function runSeed<TRow, TTable extends PgTable>(
  tx: Transaction,
  data: TRow[],
  table: TTable,
  mapRow: (
    row: TRow,
    topicsBySlug: TopicsBySlugMap,
  ) => InferInsertModel<TTable>,
  label: string,
): Promise<void> {
  const topicsBySlug = await getTopicsBySlugMap(tx);

  const dataRows = data.map((row) => mapRow(row, topicsBySlug));

  await tx.insert(table).values(dataRows);
  console.log(`✅ Inserted ${dataRows.length} ${label}`);
}
