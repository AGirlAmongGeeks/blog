import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';
import type { TypeCategorySkeleton } from './TypeCategory';

export interface TypePostFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  content: EntryFieldTypes.Text;
  coverImage?: EntryFieldTypes.AssetLink;
  date: EntryFieldTypes.Date;
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  categories?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeCategorySkeleton>>;
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, 'post'>;
export type TypePost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePostSkeleton, Modifiers, Locales>;
