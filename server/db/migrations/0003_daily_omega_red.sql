ALTER TABLE "categories"
  ADD COLUMN "image_meta" jsonb;

-- 2. back-fill every row
UPDATE categories
  SET image_meta = '{"width":800,"height":800}'
  WHERE image_meta IS NULL;

-- 3. now forbid NULLs
ALTER TABLE categories
  ALTER COLUMN image_meta SET NOT NULL;