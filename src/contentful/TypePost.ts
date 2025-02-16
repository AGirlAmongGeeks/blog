import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode,
} from 'contentful';

export interface TypePostFields {
  title: EntryFieldTypes.Symbol;
  slug: EntryFieldTypes.Symbol;
  tags?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
  content: EntryFieldTypes.Text;
}

export type TypePostSkeleton = EntrySkeletonType<TypePostFields, 'post'>;
export type TypePost<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode,
> = Entry<TypePostSkeleton, Modifiers, Locales>;
